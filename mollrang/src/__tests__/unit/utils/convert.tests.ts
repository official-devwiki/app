import {responseDataConvert} from "@utils/convert";
import {Quiz, ResponseData} from "@interfaces/quizzes";

const convertTests = jest.fn(responseDataConvert);

describe('Response Data Convert Test', () => {

  test('should return same data - Object', () => {
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
    expect(convertTests(responseDataObject)).toEqual(expectedReturnValueObject);
  });

  test('should return same data - Array<Object>',() => {
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
    expect(convertTests(responseDataArrayObject)).toEqual(expectedReturnValueArray);
  })

});