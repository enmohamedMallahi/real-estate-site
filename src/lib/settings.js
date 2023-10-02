import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from './firebase'; // Import your Firestore instance

const settingsDocRef = doc(db, 'settings', 'site-settings'); // Assuming 'site-settings' is the document ID

// Function to get site settings
export const getSiteSettings = async () => {
  try {
    const docSnap = await getDoc(settingsDocRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null; // Return null if the document doesn't exist
    }
  } catch (error) {
    console.error('Error getting site settings:', error);
    throw error;
  }
};

// Function to update site settings
export const updateSiteSettings = async (newSettings) => {
  try {
    const docSnap = await getDoc(settingsDocRef);
    if (docSnap.exists()) {
      // If the document exists, update it
      await updateDoc(settingsDocRef, newSettings);
    } else {
      // If the document doesn't exist, create a new one with the provided data
      await setDoc(settingsDocRef, newSettings);
    }
    return true; // Indicate success
  } catch (error) {
    console.error('Error updating site settings:', error);
    throw error;
  }
};
