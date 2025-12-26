import AboutPageWrapper from "./AboutPageWrapper";
import "../../assets/style/about.css";
import { useAboutData } from "../../dataContext/aboutData.jsx";

export default function Iqac() {
  const { pages } = useAboutData();
  const data = pages.Iqac;
  const section = data.section1;

  return (
    <AboutPageWrapper title={data.title} breadcrumb={data.breadcrumb}>
      <section className="Iqac-section ">

        <div className="container Iqac-container mt-4 p-4 rounded">
          <div className="row ">
            <div className="col-3 p-0">
              {section.leftList.map((list, index) => (
                <li key={index} className="Iqac-left-list list-unstyled ">
                  {list}
                </li>
              ))}
            </div>

            <div className="col-9 Iqac-div rounded-2">
              {section.rightSide.content && (
                <>
                  <div className="bg-white p-4 rounded mb-4 shadow-lg">
                    <div className="Iqac-right-side-content ">
                    <h2 className="Iqac-right-side-title mb-2 mt-0">
                      {section.rightSide.content.title}
                    </h2>
                    <p className="Iqac-right-side-description">
                      {section.rightSide.content.description}
                    </p>

                  </div>
                  <div className="">
                    <table className="table table-striped table-bordered border-secondary iqac-table border border-2 border-dark">
                      <thead>
                        <tr>
                          <th colSpan={3} className="iqac-main-header">Internal Quality Assurance Cell (IQAC)</th>
                          <th>Role</th>
                        </tr>
                       

                      </thead>

                      <tbody className="fw-normal">
                        {section.rightSide.table.map((row, index) => (
                          <tr key={index} className="p-0">
                            <td className="p-1">{row.InternalQualityAssuranceCellIQAC[0]}</td>
                            <td className="p-0">{row.InternalQualityAssuranceCellIQAC[1]}</td>
                            <td className="p-0">{row.InternalQualityAssuranceCellIQAC[2]}</td>
                            <td className="p-0">{row.Role}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                  </div>
                  </div>
                </>
              )}

            </div>

          </div>
        </div>
      </section>
    </AboutPageWrapper>
  );
}
