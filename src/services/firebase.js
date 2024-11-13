import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  query, 
  where,
  addDoc,
  serverTimestamp 
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA4egQ9vswqN42vFuTTKS1D3zg8ihWTAIs",
  authDomain: "horizonte-interior.firebaseapp.com",
  projectId: "horizonte-interior",
  storageBucket: "horizonte-interior.firebasestorage.app",
  messagingSenderId: "236581687187",
  appId: "1:236581687187:web:03cd523ac5a8c5738be266",
  measurementId: "G-GTE7MXZBW6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export const getProducts = async (categoryId) => {
  try {
    let productsQuery;
    
    if (categoryId) {
      productsQuery = query(
        collection(db, 'products'), 
        where('category', '==', categoryId)
      );
    } else {
      productsQuery = collection(db, 'products');
    }

    const querySnapshot = await getDocs(productsQuery);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error getting products:", error);
    throw error;
  }
};


export const getProductById = async (productId) => {
  try {
    const docRef = doc(db, 'products', productId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      };
    } else {
      throw new Error('Product not found');
    }
  } catch (error) {
    console.error("Error getting product:", error);
    throw error;
  }
};


export const createOrder = async (orderData) => {
  try {
    const ordersCollection = collection(db, 'orders');
    const order = {
      ...orderData,
      date: serverTimestamp(),
      status: 'pending'
    };
    
    const docRef = await addDoc(ordersCollection, order);
    return docRef.id;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};