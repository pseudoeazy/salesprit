import Head from "next/head";
import Layout from "containers/layout";
import Account from "containers/sections/account";
import PasswordReset from "components/forms/password-reset";
import SocialLogin from "components/social-login";

export default function Forgot() {
  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>Salesprit | Reset Password</title>
      </Head>

      <Account title="Reset Password" subtitle="Create new password">
        <PasswordReset />
        <SocialLogin
          text="Remembered your password?"
          url="/login"
          urlTitle="Login"
        />
      </Account>
    </Layout>
  );
}
