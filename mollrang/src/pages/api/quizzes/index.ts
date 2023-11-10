import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";
import Cookies from "cookies";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookies = new Cookies(req, res);
  const userId = cookies.get("user");
  console.log(userId);

  if (req.method === "GET") {
    const filePath = path.resolve('./public', 'mock-data', 'quizzes.json');
    const data = fs.readFileSync(filePath, {
      encoding: "utf-8",
    });

    const dataToJson = JSON.parse(data);
    return res.status(200).json(dataToJson);
  }

  if (req.method === "POST") {

    const { count, answer } = req.body;
    if (count === 1) {
      return res
        .status(200)
        .json({ result: false, data:  [{ answer1: "O", answer2: "y" }] });
    } else if (count === 2) {
      return res
        .status(200)
        .json({ result: false, data:  [{ answer1: "X", answer2: "X" }] });
    } else if (count === 3) {
      return res
        .status(200)
        .json({ result: false, data:  [{ answer1: "y", answer2: "O" }] });
    } else if (count === 4) {
      return res
        .status(200)
        .json({ result: false, data:  [{ answer1: "y", answer2: "X" }] });
    } else {
      return res
        .status(200)
        .json({ result: false, data:  [{ answer1: "O", answer2: "O" }] });
    }
  }

  // if (req.method !== "GET")
  //   return res.status(405).json({ message: "Only GET requests allowed" });
}
