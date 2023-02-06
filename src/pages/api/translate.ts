import { NextApiRequest, NextApiResponse } from "next";
const { Configuration, OpenAIApi } = require("openai");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const medicalReport = req.body.medicalReport;

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Hello world",
  });

  console.log(completion.data.choices[0].text);

  res.status(200).json(medicalReport + "!");
};

// options for the medical report
// choose from training set type
// choose length of response (short, medium, long)
// choose multiple choice
// choose to create dialogue with bot
