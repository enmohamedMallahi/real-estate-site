import { collection, getDocs, doc, getDoc, query, where, orderBy, limit, setDoc, deleteDoc, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

// Function to get all properties
export const getAllProperties = async () => {
  const propertiesCollection = collection(db, 'properties');
  const querySnapshot = await getDocs(propertiesCollection);

  const properties = [];
  querySnapshot.forEach((doc) => {
    properties.push({ id: doc.id, ...doc.data() });
  });

  return properties;
};

// Function to get a single property by ID
export const getSingleProperty = async (propertyId) => {
  const propertyDocRef = doc(db, 'properties', propertyId);
  const propertyDocSnapshot = await getDoc(propertyDocRef);

  if (propertyDocSnapshot.exists()) {
    return { id: propertyDocSnapshot.id, ...propertyDocSnapshot.data() };
  } else {
    return null; // Property not found
  }
};

// Function to get properties by surface, location, or type
export const getPropertiesByFilter = async ({ buyOrRent = 'all', location = 'all', type = 'all' }) => {
  const propertiesCollection = collection(db, 'properties');
  let propertyQuery = query(propertiesCollection);

  if (buyOrRent !== 'all') {
    propertyQuery = query(propertyQuery, where('buyOrRent', '==', buyOrRent));
  }

  if (location !== 'all') {
    propertyQuery = query(propertyQuery, where('location', '==', location));
  }

  if (type !== 'all') {
    propertyQuery = query(propertyQuery, where('type', '==', type));
  }

  const querySnapshot = await getDocs(propertyQuery);

  const properties = [];
  querySnapshot.forEach((doc) => {
    properties.push({ id: doc.id, ...doc.data() });
  });

  return properties;
};


// Function to edit a property
export const editProperty = async (propertyId, updatedData) => {
  const propertyDocRef = doc(db, 'properties', propertyId);
  await setDoc(propertyDocRef, updatedData, { merge: true });
};

// Function to add a new property
export const addProperty = async (propertyData) => {
  const propertiesCollection = collection(db, 'properties');
  await addDoc(propertiesCollection, propertyData);
};

// Function to delete a property
export const deleteProperty = async (propertyId) => {
  const propertyDocRef = doc(db, 'properties', propertyId);
  await deleteDoc(propertyDocRef);
};
