import Head from "next/head";
import Link from "next/link";
import Layout from "containers/layout";
import Account from "containers/sections/account";
import Registration from "components/forms/registration";

export default function Register() {
  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>Salesprit | Registration</title>
      </Head>

      <Account title="Registration" subtitle="Create new account">
        <Registration />

        <div className="text-center mt-12">
          Already have an account?
          <span className="text-secondary">
            <Link href="/login">Login</Link>
          </span>
        </div>
      </Account>
    </Layout>
  );
}
