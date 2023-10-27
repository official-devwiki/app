import {rest} from 'msw';
import {LOCAL_HOST_API} from '@config/index';
import {Url} from "@services/apis/url";

export const handlers = [
  rest.get(`${LOCAL_HOST_API}${Url.Shorts.findOneShorts}`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          'question': '개발자들이 다크 모드를 쓰는 이유는???',
          'solution': '밝으면 버그(bug)가 꼬여서... :)',
        },
      ]),
    );
  }),
];
