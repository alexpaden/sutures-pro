import { NextApiRequest, NextApiResponse } from "next";

// options for the medical report
// choose from training set type
// choose length of response (short, medium, long)
// choose multiple choice
// choose to create dialogue with bot

export default (req: NextApiRequest, res: NextApiResponse) => {
  const medicalReport = req.body.medicalReport;
  res.status(200).json(medicalReport + "!");
};
