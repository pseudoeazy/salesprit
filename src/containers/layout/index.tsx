import SiteLayout from "./site-layout";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <SiteLayout>
    <main
      className="relative min-h-screen flex-grow"
      style={{
        minHeight: "-webkit-fill-available",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <div className="relative flex flex-col w-full h-full min-h-screen flex-grow">
        {children}
      </div>
    </main>
  </SiteLayout>
);

export default Layout;
