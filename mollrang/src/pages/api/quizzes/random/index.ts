import type {NextApiRequest, NextApiResponse} from 'next';
import * as fs from 'fs';
import path from "path";
import axios from "axios";
import {axiosInstance} from "@libs/Axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET')
    return res.status(405).json({message: 'Only GET requests allowed'});

  const {data} = await axiosInstance.get('/quizzes');
  console.log(data)

  // const filePath = path.resolve('./public', 'mock-data', 'shorts.json');
  // const dataToJson = JSON.parse(data.result.data);
  // return res.status(200).json(dataToJson);
}
