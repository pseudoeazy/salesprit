import Head from "next/head";
import dynamic from "next/dynamic";
import Layout from "containers/layout";
import MainContent from "containers/main-content";

const NavBar = dynamic(() => import("containers/navbar"));
const RightSidebar = dynamic(() => import("containers/right-sidebar"));

export default function Home() {
  return (
    <Layout hasSidebar>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>Salesprit | Food POS theme for all devices</title>
      </Head>

      <NavBar />
      <MainContent />
      <RightSidebar />
    </Layout>
  );
}
