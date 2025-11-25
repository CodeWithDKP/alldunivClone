import AboutPageWrapper from "./AboutPageWrapper";
import "../../assets/style/about.css";
import { useAboutData } from "../../dataContext/aboutData.jsx";
export default function ActsStatutes() {
  const { pages } = useAboutData();
  const data = pages.IAIP;


  return (
    <AboutPageWrapper
      title={data.title}
      breadcrumb={data.breadcrumb}
    >
      <section className="iaip-section text-center">
       <h2> There is NO data here... </h2>
      </section>


    </AboutPageWrapper>
  );
}
