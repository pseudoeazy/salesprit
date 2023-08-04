import Link from "next/link";
const Logo = () => {
  return (
    <div className="flex items-center justify-center md:border-b md:border-b-mygray md:py-6">
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
