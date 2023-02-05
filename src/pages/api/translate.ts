import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const medicalReport = req.body.medicalReport;
  res.status(200).json(medicalReport + "!");
};
