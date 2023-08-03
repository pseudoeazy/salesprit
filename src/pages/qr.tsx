import Head from "next/head";
import Layout from "containers/layout";
import QrCodeScanner from "components/qrcode-scanner";


export default function BarcodeScanner() {
  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>Salesprit | QRcode</title>
      </Head>
    
      <QrCodeScanner />
    </Layout>
  );
}
