import { db } from "./firebaseConfig";
import { getDoc, doc, setDoc, serverTimestamp } from "firebase/firestore";

// Generate a random alphanumeric ID
function generateRoomCode() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let roomCode = "";
  for (let i = 1; i < 5; i++) {
    roomCode += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return roomCode.toLowerCase();
}
export async function getRoomDoc(roomId) {
  try {
    const roomRef = doc(db, "rooms", roomId);
    const roomDoc = await getDoc(roomRef);

    if (roomDoc.exists()) {
      return roomDoc;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching room:", error);
    throw error;
  }
}
export async function getRoom(roomId) {
  try {
    const roomRef = doc(db, "rooms", roomId);
    const roomDoc = await getDoc(roomRef);

    if (roomDoc.exists()) {
      return roomDoc.data();
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching room:", error);
    throw error;
  }
}
export async function createRoom(userId, quizSettings) {
  try {
    let roomId = generateRoomCode();

    // Ensure roomId is unique by checking Firestore
    let roomRef = doc(db, "rooms", roomId);
    let roomDoc = await getDoc(roomRef);

    while (roomDoc.exists()) {
      roomId = generateRoomCode(); // Regenerate if ID already exists
      roomRef = doc(db, "rooms", roomId);
      roomDoc = await getDoc(roomRef);
    }

    // Set data for the new room
    await setDoc(roomRef, {
      roomId: roomId,
      host: userId,
      players: [{ id: userId, score: 0 }],
      status: "open",
      createdAt: serverTimestamp(),
      quizSettings: quizSettings,
    });

    return roomId;
  } catch (error) {
    console.error("Error creating room:", error);
    throw error;
  }
}
