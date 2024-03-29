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
    //input: "The patient ",
    //instructions: "Explain this medical report to a layman in 3 sentences",
    //n: 2,
    temperature: 0.75,
    //top_p: 0.15,
    max_tokens: 700,
    prompt:
      "Convert this radiology report to an easy to understand summary. Thoroughly explain all medical terminology, and beginning with 'the patient is' '''" +
      medicalReport.toString(),
  });
  //console.log(completion.data.choices);

  res.status(200).json(completion.data.choices[0].text);
};

// options for the medical report
// choose from training set type
// choose length of response (short, medium, long)
// choose multiple choice
// choose to create dialogue with bot
