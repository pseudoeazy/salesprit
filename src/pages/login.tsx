import Head from "next/head";
import Layout from "containers/layout";
import LoginForm from "components/forms/login";
import Account from "containers/sections/account";
import SocialLogin from "components/social-login";

export default function Login() {
  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>Salesprit | Login</title>
      </Head>

      <Account title="Welcome Back!" subtitle="Login to your account">
        <LoginForm />
        <SocialLogin />
      </Account>
    </Layout>
  );
}
