import SiteLayout from "./site-layout";

interface Props {
  children: React.ReactNode;
  hasSidebar?: boolean;
}

const Layout: React.FC<Props> = ({ children, hasSidebar }) => (
  <SiteLayout>
    <main
      className="relative min-h-screen flex-grow"
      style={{
        minHeight: "-webkit-fill-available",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <div className="relative flex flex-col w-full h-full min-h-screen flex-grow">
        {hasSidebar ? (
          <div className="relative w-full flex mx-auto max-w-[85.375rem] overflow-x-hidden">
            {children}
          </div>
        ) : (
          children
        )}
      </div>
    </main>
  </SiteLayout>
);

Layout.defaultProps = {
  hasSidebar: false,
};

export default Layout;
