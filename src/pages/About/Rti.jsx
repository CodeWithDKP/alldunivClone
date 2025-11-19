import AboutPageWrapper from "./AboutPageWrapper";
import "../../assets/style/about.css";
import { useAboutData } from "../../dataContext/aboutData.jsx";
import { Link } from "react-router-dom";
export default function CcsRules() {
    const { pages } = useAboutData();
    const data = pages.RTI;


    return (
        <AboutPageWrapper
            title={data.title}
            breadcrumb={data.breadcrumb}
        >
            <section className="rti-vision-section">
                <div className="container py-5">
                    <Link to="/"><button className="rti-top-btn mb-0">Right to Information Act</button></Link>

                    <h2 className="mb-4">{data.sectionTitle}</h2>
                    <hr />
                    <p className="mb-4">{data.description}</p>

                    {data.reports.map((report, index) => (
                        <div key={index} >
                            {/* Details */}
                            <p className="mb-4">{report.details}</p>

                            {/* Period */}
                            <p>{report.period}</p>

                            {/* Table */}
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Nature of Complaints</th>
                                        <th>Opening Balance</th>
                                        <th>Receipt of Applications</th>
                                        <th>Disposal of Applications</th>
                                        <th>Applications Under Progress</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {report.data.map((row, rowIndex) => (
                                        <tr key={rowIndex}>
                                            <td>{rowIndex + 1}</td>
                                            <td>{row.natureOfComplaints}</td>
                                            <td>{row.openingBalance}</td>
                                            <td>{row.receiptOfApplications}</td>
                                            <td>{row.disposalOfApplications}</td>
                                            <td>{row.applicationsUnderProgress}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {report.note && (
                                <p className="rti-table-note"><b>Note: </b>{report.note}</p>
                            )}
                        </div>
                    ))}

                </div>
            </section>



        </AboutPageWrapper>
    );
}
