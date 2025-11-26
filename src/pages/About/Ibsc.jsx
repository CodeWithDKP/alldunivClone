import AboutPageWrapper from "./AboutPageWrapper";
import "../../assets/style/about.css";
import { useAboutData } from "../../dataContext/aboutData.jsx";
export default function CcsRules() {
  const { pages } = useAboutData();
  const data = pages.IBSC;
  function addQuotes(item) {
    return `"${item}"`;
  }

  return (
    <AboutPageWrapper
      title={data.title}
      breadcrumb={data.breadcrumb}
    >
      <section className="ibsc-section ">
        <div className="container py-5">
          <div className="ibsc-content">
            <h4 className="mb-4">{data.contentTitle}</h4>
            {data.contentDescription.map((text, index) => (
              <p style={{
                marginBottom: index === 0 ? "30px" : "0px"
              }} key={index}>{index == 1 ? addQuotes(text) : text}</p>
            ))}
            <p>{addQuotes(data.contentList.title)}</p>
            <ul >
              {data.contentList.list.map((list, index) => (
                <li className="list-unstyled"><span>{index + 1}</span>{list}</li>
              ))}
            </ul>
          </div>
          <div className="ibsc-tables mt-4">
            {data.tableOverview.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
            <b className="mail">Email: {data.mail}</b>

            <table className="table ibsc-table1 table-bordered ">
              <thead>
                <tr>
                  {data.tableHeader.map((head, index) =>
                    <th key={index}>{head.label}</th>
                  )}

                </tr>
              </thead>
              <tbody>
                {data.tableData.map((data, dataIndex) => (
                  <tr key={dataIndex}>
                    <td>{data.SNo}</td>
                    <td>{data.Composition}</td>
                    <td>{data.FullName}</td>
                    <td>{data.CurrentDesignation}</td>
                    <td>{data.PresentAffiliation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="ibsc-process">
            <h4>{data.process.title}</h4>
            <p>
              {data.process.content.map((text, index) => (
                <span style={{
                  display:"block",
                  marginBottom: index === 2 ? "20px" : "0px"
                }}>{text}</span>
              ))}
            </p>
          </div>
        </div>
      </section>


    </AboutPageWrapper>
  );
}
