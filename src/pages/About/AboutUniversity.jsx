import AboutPageWrapper from "./AboutPageWrapper";
import "../../assets/style/about.css";
import { useAboutData } from "../../dataContext/aboutData.jsx";
export default function AboutUniversity() {
  const { pages } = useAboutData();
  const data = pages.AboutUniversity;
  console.log("pages data" + pages);

  const sections = [
    data.div1,
    data.div2,
    data.div3,
    data.div4,
    data.div5,
    data.div6,
  ];

  return (
    <AboutPageWrapper
      title={data.title}
      breadcrumb={data.breadcrumb}
    >
      <section className="history-section">
        <div className="container py-5">
          {sections.map((section, index) => {
            const hasImg = !!section.img;


            const imgPosition = index === 2 ? "right" : "left";

            return (
              <div
                key={index}
                className={`history-div mb-5 row align-items-center`}
              >
         
                {hasImg && imgPosition === "left" && (
                  <div className="history-img mb-3 text-left col-md-5">
                    <img
                      src={section.img}
                      alt={`History ${index + 1}`}
                      className="img-fluid  img-left"
                    />
                  </div>
                )}

                <div className={`${hasImg ? "col-md-7" : "col-12"} history-text`}>
                  <p>{index === 0 && <strong>{section.highlight} </strong>}
                    {section.data}</p>
                </div>

                  {hasImg && imgPosition === "right" && (
                  <div className="history-img mb-3 text-center col-md-4">
                    <img
                      src={section.img}
                      alt={`History ${index + 1}`}
                      className="img-fluid rounded"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>


    </AboutPageWrapper>
  );
}
