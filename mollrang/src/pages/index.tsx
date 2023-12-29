import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { ReactElement } from "react";
import { HomeContainer } from "@containers/home";
import { dehydrate } from "@tanstack/react-query";
import withGetServerSideProps from "@utils/withGetServerSideProps";
import Cookies from "cookies";
import { queryClient } from "@libs/Tanstack";

const HomePage: NextPage<InferGetServerSidePropsType<GetServerSideProps>> = ({
  userId,
}): ReactElement => {
  return <HomeContainer userId={userId} />;
};

export const getServerSideProps: GetServerSideProps = withGetServerSideProps(
  async (ctx: GetServerSidePropsContext) => {
    try {
      const { req, res } = ctx;
      const cookies = new Cookies(req, res);
      const userId = cookies.get("user");
      let key = null;
      if (userId) key = userId;

      return {
        props: {
          dehydratedState: dehydrate(queryClient),
          userId: key,
        },
      };
    } catch (e) {
      return {
        props: {},
      };
    }
  },
);

export default HomePage;
