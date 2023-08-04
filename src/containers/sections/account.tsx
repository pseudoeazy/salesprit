import { ReactNode } from "react";
import BioMetric from "assets/icons/bio-metric";
import Layout from "containers/layout";
import VectorOne from "assets/icons/vector-one";
import VectorTwo from "assets/icons/vector-two";

interface Props {
  children: ReactNode;
  title: string;
  subtitle: string;
}

const styles = {
  container: `flex flex-col lg:flex-row py-[8rem] `,
  imageSection: `flex-1 hidden lg:flex justify-center items-center`,
  formSection: `flex-1 flex justify-center items-center `,
  innerFormSection: `lg:border-dashed lg:border-l-4 border-stroke px-[48px] lg:px-[96px]`,
};

export default function Account({ children, title, subtitle }: Props) {
  return (
    <Layout>
      <div>
        <div className={styles.container}>
          <section className={styles.imageSection}>
            <div>
              <BioMetric />
            </div>
          </section>
          <section className={styles.formSection}>
            <div className={styles.innerFormSection}>
              <div className="text-grey text-xl">{subtitle}</div>
              <h2 className="text-[2.75rem] text-black">{title}</h2>
              {children}
            </div>
          </section>
        </div>
        <div className="absolute left-0 top-0  ">
          <VectorOne />
        </div>
        <div className="absolute  lg:left-[19rem] top-0 right-0 ">
          <VectorTwo />
        </div>
      </div>
    </Layout>
  );
}
