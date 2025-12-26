import AboutPageWrapper from "./AboutPageWrapper";
import "../../assets/style/about.css";
import { useAboutData } from "../../dataContext/aboutData.jsx";

export default function Budget() {
  const { pages } = useAboutData();
  const data = pages.Budget;

  return (
    <AboutPageWrapper title={data.title} breadcrumb={data.breadcrumb}>
      <section className="budget-section">
        <div className="container py-5">

          <div className="row">
            <div className="col-md-4">
              <h4>{data.tableHeading}</h4>
              <table className="table budget-table table-bordered table-striped table-sm budget-table">
                <thead>
                  <tr>
                    <th className="budget-th">Description</th>
                    <th className="budget-th">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {data.balanceSheets.map((item, index) => (
                    <tr key={index}>
                      <td className="budget-td">{item.description}</td>

                      <td className="budget-td-action">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="budget-link"
                        >
                          {item.action}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
          </div>

        </div>
      </section>
    </AboutPageWrapper>
  );
}
