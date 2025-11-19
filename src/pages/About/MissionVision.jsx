import AboutPageWrapper from "./AboutPageWrapper";
import "../../assets/style/about.css";
import { useAboutData } from "../../dataContext/aboutData.jsx";
export default function MissionVision() {
  const { pages } = useAboutData();
  const data = pages.MissionVision;


  return (
    <AboutPageWrapper
      title={data.title}
      breadcrumb={data.breadcrumb}
    >
      <section className="mission-vision-section">
        <div className="container py-5">
          {data.section1.map((section, index)=>(
            <div key={index} className="mission-vision-div">
            <p className="heading">{section.heading}</p>
            <h2 className="title">{section.title}</h2>
            <p className="content">{section.data}</p> 
            </div>
          ))};
       </div> 
      </section>


    </AboutPageWrapper>
  );
}
