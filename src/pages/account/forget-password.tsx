import Head from "next/head";
import Layout from "containers/layout";
import Account from "containers/sections/account";
import ForgetPassword from "components/forms/forget-password";
import SocialLogin from "components/social-login";

export default function Forgot() {
  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>Salesprit | Forget Password</title>
      </Head>

      <Account title="Forget Password" subtitle="Forget your password">
        <ForgetPassword />
        <SocialLogin
          text="Remembered your password? "
          url="/login"
          urlTitle="Login"
        />
      </Account>
    </Layout>
  );
}
