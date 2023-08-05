import Head from "next/head";
import dynamic from "next/dynamic";
import Layout from "containers/layout";
import MainContent from "containers/main-content";
import { Product } from "types/product";
import products from "data/products";

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
          content="Next.js, TailwindCSS, CSS, HTML, JavaScript, Programming, Web Development, Website, Ecommerce, Template"
        />
        <meta
          name="Description"
          content="Well organized and easy to understand Next.js Starter Ecommerce Template. Salesprit is a Next.js Food theme template for all devices. "
        />
        <meta property="og:image" content="/salesprit.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="436" />
        <meta property="og:image:height" content="228" />
        <meta
          property="og:description"
          content="Well organized and easy to understand Next.js Starter Ecommerce Template. Salesprit is a Next.js Food theme template for all devices. "
        ></meta>
        <title>Salesprit | Food POS theme for all devices</title>
      </Head>

      <NavBar />
      <MainContent products={products} />
      <RightSidebar />
    </Layout>
  );
}

export async function getStaticProps() {
  try {
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
