import {GetServerSideProps, GetServerSidePropsContext} from 'next';
import {isInstanceOfApiError} from './error/errorHandler';

export default function withGetServerSideProps(
  getServerSideProps: GetServerSideProps,
): GetServerSideProps {
  return async (context: GetServerSidePropsContext) => {
    try {
      return await getServerSideProps(context);
    } catch (error) {
      // apiError라면
      if (isInstanceOfApiError(error)) {
        const {redirectUrl, notFound} = error;
        // 404로 보내거나
        if (notFound) {
          return {
            notFound: true,
          };
        }
        return {
          redirect: {
            destination: redirectUrl,
            permanent: false,
          },
        };
      }
      throw error;
    }
  };
}
