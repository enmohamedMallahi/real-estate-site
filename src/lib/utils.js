export const locations = [
  'Aïn Chock',
  'Aïn Sebaâ',
  'Anfa',
  'Ben M\'Sick',
  'Sidi Bernoussi',
  'Al Fida - Mers Sultan',
  'Hay Hassani',
  'Moulay Rachid'
]

export const propertyTypes = [
  'appartement',
  'studio',
  'bureau',
  'magasin',
  'terrain'
]

// Function to generate a unique property ID
export const generateUniquePropertyId = async () => {
  const propertiesCollection = collection(db, 'properties');
  let uniqueId = null;
  let isUnique = false;

  while (!isUnique) {
    // Generate a random 6-digit number
    const randomId = Math.floor(100000 + Math.random() * 900000).toString();

    // Check if the generated ID already exists in Firestore
    const propertyQuery = query(
      propertiesCollection,
      where('id', '==', `REF-${ randomId }`)
    );
    const querySnapshot = await getDocs(propertyQuery);

    if (querySnapshot.empty) {
      uniqueId = `REF-${ randomId }`;
      isUnique = true;
    }
  }

  return uniqueId;
};