import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";
import Cookies from "cookies";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookies = new Cookies(req, res);
  const userId = cookies.get("user");
  console.log(userId);

  if (req.method === "GET") {
    const data = fs.readFileSync("public/mock-data/quizzes.json", {
      encoding: "utf-8",
    });

    const dataToJson = JSON.parse(data);
    return res.status(200).json(dataToJson);
  }

  if (req.method === "POST") {
    return res
      .status(200)
      .json({ result: false, data: { first: { answer1: "O", answer2: "X" } } });
  }

  // if (req.method !== "GET")
  //   return res.status(405).json({ message: "Only GET requests allowed" });
}
