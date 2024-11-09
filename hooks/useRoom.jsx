import { useEffect, useState } from "react";
import { db } from "../services/firebaseConfig";
import { getRoomDoc } from "../services/multiplayerService";
import { doc, onSnapshot, query, where } from "firebase/firestore";
export default function useRoom(roomId) {
  const [roomData, setRoomData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const roomRef = doc(db, "rooms", roomId);
    // console.info(roomRef);
    // Set up the onSnapshot listener
    const unsubscribe = onSnapshot(roomRef, (snapshot) => {
      // console.info(snapshot);
      if (snapshot.exists()) {
        setRoomData(snapshot.data());
        setError(null);
      } else {
        setRoomData(null);
        setError("Invalid Room Code");
      }
      setIsLoading(false);
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, [roomId]);
  return { roomData, isLoading, error };
}
