import { getAllUserLocations } from "@/lib/db-admin";
import { auth } from "@/lib/firebase-admin";

export default async (req, res) => {
  try {
    const { uid } = await auth.verifyIdToken(req.headers.token);

    const locations = await getAllUserLocations(uid);
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ error });
  }
};
