import Link from "next/link";

const Logo = () => {
  return (
    <div className="md:h-[7.3rem] flex items-center justify-center ">
      <Link href="/">
        <h1 className="font-bold leading-normal">
          <span className="text-secondary">Sale</span>
          <span>sprit</span>
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
