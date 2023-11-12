import Cookies from "cookies";
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookies = new Cookies(req, res);
  const userId = cookies.get("user");

  if (req.method !== "GET")
    return res.status(405).json({ message: "Only GET requests allowed" });
  const filePath = path.resolve('./public', 'mock-data','statistics','continuous.json');
  const data = fs.readFileSync(filePath, {
    encoding: "utf-8",
  });
  const dataToJson = JSON.parse(data);
  return res.status(200).json(dataToJson);
}
