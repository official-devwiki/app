import {responseDataConvert} from "@utils/convert";
import {Quiz, ResponseData} from "@interfaces/quizzes";

const responseDataObject: ResponseData<Quiz> = {
  success: true,
  result: {
    data: {
      answerLength: 0,
      prefixWord: '',
      suffixWord: '',
      question: '',
    }
  }
}
const expectedReturnValueObject = {
  answerLength: 0,
  prefixWord: '',
  suffixWord: '',
  question: '',
};
const expectedReturnValueArray = [{
  answerLength: 0,
  prefixWord: '',
  suffixWord: '',
  question: '',
}];
const responseDataArrayObject: ResponseData<Quiz[]> = {
  success: true,
  result: {
    data: [{
      answerLength: 0,
      prefixWord: '',
      suffixWord: '',
      question: '',
    }]
  }
}

describe('Response Data Convert Test', () => {
  test('data 타입이 Object 일 경우', () => {
    const convertTests = jest.fn(responseDataConvert<Quiz>);
    expect(convertTests(responseDataObject)).toEqual(expectedReturnValueObject);
  });

  test('data 타입이 Array 일 경우',() => {
    const convertTests = jest.fn(responseDataConvert<Quiz[]>);
    expect(convertTests(responseDataArrayObject)).toEqual(expectedReturnValueArray);
  })

  test('타입과 일치하지 않은 데이터를 넣을 경우', () => {
    const convertTests = jest.fn(responseDataConvert<Quiz[]>);
    expect(convertTests(responseDataArrayObject)).not.toEqual(expectedReturnValueObject)
  })
});