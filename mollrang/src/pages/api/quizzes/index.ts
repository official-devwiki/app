import type {NextApiRequest, NextApiResponse} from 'next';
import * as fs from 'fs';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET')
    return res.status(405).json({message: 'Only GET requests allowed'});
  const data = fs.readFileSync('public/mock-data/quizzes.json', {
    encoding: 'utf-8',
  });
  console.log(data)
  const dataToJson = JSON.parse(data);
  return res.status(200).json(dataToJson);
}