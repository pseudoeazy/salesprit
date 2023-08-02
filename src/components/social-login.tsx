import Link from "next/link";
import Google from "assets/icons/google";
import Facebook from "assets/icons/facebook";
import Button from "components/button";

const styles = {
  social: `flex flex-col md:flex-row items-center justify-center space-y-[1.25rem] md:space-y-0  md:space-x-[1.25rem] mb-[2.5rem]`,
  socialButton: `w-[11.875rem] bg-white flex items-center justify-center border rounded-sm px-[2.75rem] py-1 hover:bg-white hover:shadow-xl`,
};

interface Props {
  text: string;
  url: string;
  urlTitle: string;
}

const SocialLogin = ({ text, url, urlTitle }: Props) => {
  return (
    <>
      <div className="flex items-center my-[3.12rem]">
        <span className="border-b border-gray-300 flex-1"></span>
        <span> Or </span>
        <span className="border-b border-gray-300 flex-1"></span>
      </div>

      <div className={styles.social}>
        <Button className={styles.socialButton}>
          <Google /> <span className="text-black"> Google</span>
        </Button>
        <Button className={styles.socialButton}>
          <Facebook /> <span className="text-black">Facebook</span>
        </Button>
      </div>

      <div className="text-center">
        {text}{" "}
        <span className="text-secondary">
          <Link href={url}>{urlTitle}</Link>
        </span>
      </div>
    </>
  );
};

SocialLogin.defaultProps = {
  text: "Don't have an account? ",
  url: "/register",
  urlTitle: "Sign Up",
};

export default SocialLogin;
