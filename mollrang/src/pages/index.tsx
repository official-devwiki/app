import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import {ReactElement} from "react";
import {HomeContainer} from "@containers/home";

const HomePage: NextPage<InferGetServerSidePropsType<GetServerSideProps>> = (): ReactElement => {
  return <HomeContainer/>;
};

export default HomePage;
