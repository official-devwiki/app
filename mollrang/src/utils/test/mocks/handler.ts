import { rest } from "msw";
import { LOCAL_HOST_API } from "@config/index";
import { Domain, Url } from "@services/apis/url";

export const handlers = [
  rest.get(
    `${LOCAL_HOST_API}/${Domain.Quiz}/${Url.Quizzes.RandomQuiz}`,
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            success: true,
            result: {
              data: [
                {
                  question: "개발자들이 다크 모드를 쓰는 이유는???",
                  answerLength: 2,
                  prefixWord: "",
                  suffixWord: "꼬여서 :)",
                },
              ],
            },
          },
        ]),
      );
    },
  ),
  rest.get(
    `${LOCAL_HOST_API}/${Domain.Statistics}/${Url.Statistics.myAnswerCorrectRatio}`,
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            success: true,
            result: {
              data: {
                ratio: 30,
              },
            },
          },
        ]),
      );
    },
  ),
  rest.get(
    `${LOCAL_HOST_API}/${Domain.Statistics}/${Url.Statistics.continuousCount}`,
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            success: true,
            result: {
              data: {
                day: 10,
              },
            },
          },
        ]),
      );
    },
  ),
];
