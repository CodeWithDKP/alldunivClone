import AboutPageWrapper from "./AboutPageWrapper";
import "../../assets/style/about.css";
import { useAboutData } from "../../dataContext/aboutData.jsx";
export default function ActsStatutes() {
    const { pages } = useAboutData();
    const data = pages.IERB;
    let establishedParagraphs = "";
    for (const paragraph of data.IERB_Overview.Established) {
        establishedParagraphs += paragraph;

    }

    return (
        <AboutPageWrapper
            title={data.title}
            breadcrumb={data.breadcrumb}
        >
            <section className="ierb-section">
                <div className="container py-5">
                    {data.IERB_Overview && (
                        <div className="ireb-content">
                            <dt className="mb-4">{data.IERB_Overview.Name}</dt>

                            {data.IERB_Overview.Established.map((line, i) => (
                                <p className="m-0" key={i}>
                                    {line}
                                </p>
                            ))}
                            <blockquote class="blockquote text-center mt-4 ">
                                <p className="m-1 fw-semibold Policy_Statement">&ldquo;{data.IERB_Overview.Policy_Statement}&rdquo;</p>

                            </blockquote>
                            <div className="ierb-contact-info row g-0 p-0 m-0">
                                <div className="col-2 p-0 m-0">
                                    <p>
                                        <strong>{data.IERB_Contact.heading} :</strong>
                                    </p>
                                </div>

                                <div className="col p-0 m-0">
                                    <p>{data.IERB_Contact.Name}</p>
                                    <p>{data.IERB_Contact.Role}</p>
                                    <p>{data.IERB_Contact.Department}</p>
                                    <p>
                                        E-mail:
                                        <a className="ierb-contact-info-mail" href={`mailto:${data.IERB_Contact.Email}`}>
                                            {data.IERB_Contact.Email}
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="table-responsive mt-4">
                                <table className="table table-bordered table-striped">
                                    <thead >
                                        <tr>
                                            <th colSpan={5} className="text-center bg-light">Constitution of IERB, UoA</th>
                                        </tr>
                                        <tr>

                                            <th style={{ width: "60px" }}>S.No</th>
                                            <th>Composition</th>
                                            <th>Full Name</th>
                                            <th>Designation</th>
                                            <th>Affiliation</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {data.IERB_Constitution.map((item) => (
                                            <tr key={item.SNo}>
                                                <td>{item.SNo}</td>
                                                <td>{item.Composition}</td>
                                                <td>{item.FullName}</td>
                                                <td>{item.Designation}</td>
                                                <td>{item.Affiliation}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="ierb-proposal">
                                <h4 className="fw-bold">{data.Proposal_Submission_Details.title}</h4>
                                <p>
                                    {data.Proposal_Submission_Details.contentBefore}
                                    <span > <a href="#" style={{ color: "#800000" }} className="text-decoration-none">{data.Proposal_Submission_Details.mail}</a> </span>
                                    {data.Proposal_Submission_Details.contentAfter}
                                </p>

                                <h4 className="fw-smi-bold ">Important Link</h4>

                                {data.Important_Links.map((link, index) =>
                                    <div key={index} className="mb-3 ">
                                        <p className="p-0 m-0 fs-6 fw-normal lh-sm"> {link.SNo}  {link.Title}</p>
                                        <p className="p-0 m-0 fs-6 fw-normal lh-sm"><a style={{ color: "#800000" }} href="#" className="text-decoration-none">{link.Link}</a></p>
                                    </div>
                                )}

                            </div>

                        </div>
                    )}

                </div>
            </section>


        </AboutPageWrapper>
    );
}
