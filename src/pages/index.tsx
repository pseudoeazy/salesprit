import Head from "next/head";
import Layout from "containers/layout";
import NavBar from "containers/navbar";
import MainContent from "containers/main-content";
import RightSidebar from "containers/right-sidebar";

export default function Home() {
  //content w-[43.3825rem]
  //RightSidebar w-[26.88rem]
  //nav w-[14.9375rem]
  //container  w-max-[85.375rem]
  // nav left-[58.7625rem]

  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>Salesprit | Food POS theme for all devices</title>
      </Head>
      <div className="relative flex mx-auto w-[85.375rem] overflow-x-hidden">
        <NavBar />
        <MainContent />
        <RightSidebar />
      </div>
    </Layout>
  );
}
