import AboutPageWrapper from "./AboutPageWrapper";
import "../../assets/style/about.css";
import { useAboutData } from "../../dataContext/aboutData.jsx";
import { Link } from "react-router-dom";
export default function CcsRules() {
    const { pages } = useAboutData();
    const data = pages.RTI;
    const cpio = data.CPIOs;


    return (
        <AboutPageWrapper
            title={data.title}
            breadcrumb={data.breadcrumb}
        >
            <section className="rti-section">
                <div className="container">
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
            <section className="rti-section">
                <div className="container mt-4">

                    {/* CPIO Table */}
                    <h3 className="cpioTitle">{cpio.title}</h3>

                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Faculty/College</th>
                                <th>Name, Designation</th>
                                <th>Contact Number</th>
                                <th>Department</th>
                            </tr>
                        </thead>

                        <tbody className="rti-text-body">
                            {cpio.cpioList.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td className="cpioList" >{item.facultyOrCollege}</td>
                                    <td className="cpioList" >{item.nameAndDesignation}</td>
                                    <td className="cpioList" >{item.contactNumber}</td>
                                    <td className="cpioList " >{item.department}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* First Appellate Authority */}
                    <div className="first-appellate-authority mb-5">
                        <h3>{cpio.firstAppellateAuthority.title}</h3>
                        <p><strong>Register</strong> {cpio.firstAppellateAuthority.authority}{cpio.firstAppellateAuthority.address}{cpio.firstAppellateAuthority.contactNo}</p>
    
                    </div>

                </div>
            </section>

        </AboutPageWrapper>
    );
}
