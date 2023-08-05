import Link from "next/link";
import { useRouter } from "next/router";
import useHover from "hooks/use-hover";

type Props = {
  isHovered: boolean;
};

type WithProps = {
  path: string;
  title: string;
};

const styles = {
  container: `w-full inline-block capitalize text-sm  font-semibold  p-4 rounded-lg hover:bg-mygray hover:text-primary cursor-pointer`,
};

const withHover = (WrappedComponent: React.FC<Props>) => {
  function WithHover(props: WithProps) {
    const { path, title } = props;
    const router = useRouter();
    const pageUrl = router.pathname;
    const { ref, isHovered } = useHover(pageUrl === path);

    return (
      <span
        ref={ref}
        className={`${
          pageUrl === path ? "bg-mygray text-primary" : "text-primary"
        } ${styles.container} `}
      >
        <Link
          href={path}
          title={title}
          className="flex flex-row items-center space-x-4"
        >
          <WrappedComponent isHovered={isHovered || pageUrl === path} />{" "}
          <span className="inline-block">{title}</span>
        </Link>
      </span>
    );
  }

  WithHover.defaultProps = {
    path: "/#",
    title: "",
  };
  return WithHover;
};
export default withHover;
