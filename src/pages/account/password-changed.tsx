import Head from "next/head";
import Layout from "containers/layout";
import Account from "containers/sections/account";
import PasswordChange from "components/forms/password-change";

export default function Forgot() {
  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>Salesprit | Password Changed</title>
      </Head>

      <Account
        title="Password Changed"
        subtitle="Password changed successfully"
      >
        <PasswordChange />
      </Account>
    </Layout>
  );
}
