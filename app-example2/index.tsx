import React, { useEffect } from 'react';
import { View, Text, Platform } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';  // import from wherever you initialized Firebase

const Index = () => {
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        
      });
    };
    fetchData();
  }, []);

  return (
    <View>
      <Text>Firebase Setup tested</Text>
    </View>
  );
};

export default Index;
