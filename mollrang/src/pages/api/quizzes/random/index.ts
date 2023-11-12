import type {NextApiRequest, NextApiResponse} from 'next';
import * as fs from 'fs';
import path from "path";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET')
    return res.status(405).json({message: 'Only GET requests allowed'});
  const filePath = path.resolve('./public', 'mock-data', 'shorts.json');
  const data = fs.readFileSync(filePath, {
    encoding: 'utf-8',
  });
  const dataToJson = JSON.parse(data);
  return res.status(200).json(dataToJson);
}
