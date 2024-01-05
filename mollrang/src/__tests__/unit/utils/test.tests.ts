/**
 * @description 콜렉터 URL 생성
 * @param {string} baseUrl 기존 api 호출 경로
 * @param {string} unisurvey baseUrl 기준 콜렉터 url로 변경해야하는지
 *  true: unisurvey, false: collector
 *  @param {number} parameterCount 넘기는 파라미터 개수에 따라 콜렉터 url 위치 조정
 */
export const makeApiUrl = (
  baseUrl: string,
  unisurvey: boolean,
  parameterCount: number,
): string => {
  let url = baseUrl;
  if (!unisurvey) {
    const splitUrl: string[] = baseUrl.split("/");
    const addIndex = splitUrl.length - parameterCount; // 맨 마지막에서 앞에
    splitUrl.splice(addIndex, 0, "collector");
    url = splitUrl.join("/");
  }
  return url;
};

describe("URL CONVERT", () => {
  test("유니서베이에서 사용되는 URL을 변환... test 셋업이 안되어있어서 여기서 테스트", () => {
    const SNUM = 6522;
    const baseUrl = `/project/payment/info/${SNUM}`;
    const expectedUrl = `/project/payment/info/collector/${SNUM}`;

    const maker = jest.fn(makeApiUrl);
    expect(maker(baseUrl, false, 1)).toEqual(expectedUrl);
  });
});

const DEFAULT_NUMBER = 1000000;

/**
 * @param {number} SNUM 프로젝트 번호
 * 유니서베이 콜렉터 전용 설문 확인 체크
 * true일 경우 유니서베이 콜렉터 설문
 * false의 경우 metaSurvey 설문
 */
export const collectorSurveyCheck = (SNUM: number): boolean => {
  const collectorNumber = Number(+process.env.COLLECTOR_PROJECT_NUMBER);
  if (process.env.COLLECTOR_PROJECT_NUMBER && !isNaN(collectorNumber))
    return SNUM >= collectorNumber;
  else return SNUM >= DEFAULT_NUMBER;
};

describe("process.env.COLLECTOR_PROJECT_NUMBER CHECK", () => {
  test.skip("process.env.COLLECTOR_PROJECT_NUMBER을 읽을 수 있는지 체크한다.", () => {
    const expectedNumber = 10000000;
    const number = process.env.COLLECTOR_PROJECT_NUMBER;
    expect(number).not.toEqual(expectedNumber);
  });

  test.skip("process.env.COLLECTOR_PROJECT_NUMBER가 숫자형인지 체크한다.", () => {
    const expectedNumber = 10000000;
    const number = +process.env.COLLECTOR_PROJECT_NUMBER;
    expect(typeof number).toEqual(typeof expectedNumber);
  });

  test.skip("process.env.COLLECTOR_PROJECT_NUMBER에 문자열이 들어갔을 때 NaN을 반환하는지 체크한다.", () => {
    const number = +process.env.COLLECTOR_PROJECT_NUMBER;
    expect(Number(number)).toBeNaN();
  });

  test.skip("SNUM을 넘겼을 때 boolean 값을 넘겨 받는지 체크한다.", () => {
    const SNUM = 9999999;
    const collectorCheckFn = jest.fn(collectorSurveyCheck);
    expect(collectorCheckFn(SNUM)).toBeTruthy();
  });

  test.skip("process.env.COLLECTOR_PROJECT_NUMBER 가 NaN 일 때 DEFAULT_NUMBER를 반환하는지 확인", () => {
    const SNUM = 9999999;
    const collectorCheckFn = jest.fn(collectorSurveyCheck);
    expect(collectorCheckFn(SNUM)).toEqual(DEFAULT_NUMBER);
  });

  test.skip("최종 함수 테스트 콜렉터는 true, 메타서베이는 false를 반환해야한다.", () => {
    const SNUM = 1000001; // 유니 설문
    const collectorCheckFn = jest.fn(collectorSurveyCheck);
    expect(collectorCheckFn(SNUM)).toBeTruthy();
  });
});
