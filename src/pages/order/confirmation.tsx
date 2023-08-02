import Head from "next/head";
import Layout from "containers/layout";
import NavBar from "containers/navbar";
import Button from "components/button";

export default function OrderConfirmation() {
  const containerStyle = {
    backgroundImage: `url(/images/thank-you.png)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "42rem",
    height: "32rem",
  };
  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>Salesprit | Order Confirmation</title>
      </Head>

      <div className="relative flex mx-auto w-[85.375rem] overflow-x-hidden">
        <NavBar />

        <div className="flex-1  min-h-screen pt-15">
          <div
            className="relative   mx-auto "
            style={containerStyle}
          >
            <div className="absolute left-[8rem] top-[14rem] w-[18.6rem] h-[14.6rem] capitalize text-center">
              <div className="flex flex-col items-center space-y-1 text-center ">
              <span className="font-bold">you order is confirmed</span>
              <span>Thanks for your order </span>
              <Button size="small" className="w-[7.8rem] rounded-xl mt-5 bg-secondary text-white">Done</Button>
              </div>
            </div>
          </div>
          <div className="text-center py-20">
            <h2>Your Order Placed Successfully !</h2>
            <p className="text-secondary ">
              Please wait for 5-10 Minute for your order
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
