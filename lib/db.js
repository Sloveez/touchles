import firebase from "./firebase";

const firestore = firebase.firestore();

export function createUser(uid, data) {
  return firestore
    .collection("users")
    .doc(uid)
    .set(
      {
        uid,
        ...data,
      },
      { merge: true }
    );
}

export function createLocation(data) {
  const location = firestore.collection("locations").doc();
  location.set({ ...data });

  return location;
}

export function createFeedback(data) {
  return firestore.collection("feedback").add({
    ...data,
  });
}

export function deleteFeedback(feedbackId) {
  return firestore.collection("feedback").doc(feedbackId).delete();
}
