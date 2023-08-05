import Head from "next/head";
import dynamic from "next/dynamic";
import Layout from "containers/layout";
import MainContent from "containers/main-content";
import { getProducts } from "services/products";
import { Product } from "types/product";

const NavBar = dynamic(() => import("containers/navbar"));
const RightSidebar = dynamic(() => import("containers/right-sidebar"));

interface Props {
  products: Product[];
}

export default function Home({ products }: Props) {
  console.log({ products });
  return (
    <Layout hasSidebar>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="Keywords"
          content="Next.js, TailwindCSS, CSS, HTML, JavaScript, How to, Programming, Web Development, Training, Learning, Examples, Learn to code, Source code, Demos, Website"
        />
        <meta
          name="Description"
          content="Well organized and easy to understand Next.js Starter Template."
        />
        <meta property="og:image" content="/public/favicon.ico" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="436" />
        <meta property="og:image:height" content="228" />
        <meta
          property="og:description"
          content="W3Schools offers free online tutorials, references and exercises in all the major languages of the web. Covering popular subjects like HTML, CSS, JavaScript, Python, SQL, Java, and many, many more."
        ></meta>
        <title>Salesprit | Food POS theme for all devices</title>
      </Head>

      <NavBar />
      <MainContent />
      <RightSidebar />
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const products = await getProducts();

    return {
      props: {
        products,
      },
    };
  } catch (e) {
    //@ts-ignore
    console.log({ err: e.message });

    return {
      props: {
        products: [],
      },
    };
  }
}
