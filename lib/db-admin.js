import { compareDesc, parseISO } from "date-fns";
import { db } from "./firebase-admin";

export async function getAllFeedback(locationId) {
  try {
    const snapshot = await db
      .collection("feedback")
      .where("locationId", "==", locationId)
      .get();

    const feedback = [];
    snapshot.forEach((doc) => {
      feedback.push({ id: doc.id, ...doc.data() });
    });

    feedback.sort((a, b) =>
      compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
    );

    return { feedback };
  } catch (error) {
    return { error };
  }
}

export async function getAllLocations() {
  try {
    const snapshot = await db.collection("locations").get();

    const locations = [];
    snapshot.forEach((doc) => {
      locations.push({ id: doc.id, ...doc.data() });
    });

    return { locations };
  } catch (error) {
    return { error };
  }
}

export async function getAllUserLocations(userId) {
  const snapshot = await db
    .collection("locations")
    .where("userId", "==", userId)
    .get();

  const locations = [];
  snapshot.forEach((doc) => {
    locations.push({ id: doc.id, ...doc.data() });
  });

  return { locations };
}

export async function getUserFeedback(userId) {
  const snapshot = await db
    .collection("feedback")
    .where("authorId", "==", userId)
    .get();

  const feedback = [];
  snapshot.forEach((doc) => {
    feedback.push({ id: doc.id, ...doc.data() });
  });

  return { feedback };
}
