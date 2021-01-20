import db from "@/lib/firebase-admin";

export default async (_, res) => {
  const snapshot = await db.collection("locations").get();
  const locations = [];

  snapshot.forEach((doc) => {
    locations.push({ id: doc.id, ...doc.data() });
  });

  res.status(200).json({ locations });
};
