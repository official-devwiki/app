import {rest} from 'msw';
import {LOCAL_HOST_API} from '@config/index';
import {Url} from "@services/apis/url";

export const handlers = [
  rest.get(`${LOCAL_HOST_API}/${Url.Quizzes.RandomQuiz}`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          'success': true,
          'result': {
            'data': [
              {
                "question": "개발자들이 다크 모드를 쓰는 이유는???",
                "answerLength": 2,
                "prefixWord": "",
                "suffixWord": "꼬여서 :)"
              }
            ]
          }
        },
      ]),
    );
  }),
];
