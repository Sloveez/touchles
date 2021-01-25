import { getAllFeedback } from "@/lib/db-admin";

export default async (req, res) => {
  const locationId = req.query.locationId;
  const { feedback, error } = await getAllFeedback(locationId);

  if (result.error) {
    return res.status(500).json({ error });
  }

  return res.status(200).json({ feedback });
};
