import AboutPageWrapper from "./AboutPageWrapper";
import "../../assets/style/about.css";
import { useAboutData } from "../../dataContext/aboutData.jsx";
export default function CcsRules() {
  const { pages } = useAboutData();
  const data = pages.IBSC;


  return (
    <AboutPageWrapper
      title={data.title}
      breadcrumb={data.breadcrumb}
    >
      <section className="ibsc-section ">
      <div className="container py-5">

      </div>
      </section>


    </AboutPageWrapper>
  );
}
