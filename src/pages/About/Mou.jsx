import AboutPageWrapper from "./AboutPageWrapper";
import "../../assets/style/about.css";
import { useAboutData } from "../../dataContext/aboutData.jsx";
export default function Mou() {
    const { pages } = useAboutData();
    const data = pages.Mou;


    return (
        <AboutPageWrapper
            title={data.title}
            breadcrumb={data.breadcrumb}
        >
            <section className="Mou-vision-section">
                <div className="container py-5">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Unit of the University</th>
                                <th>Institution Name</th>
                                <th>Date</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody className="mou-text-body">
                            {data.twinningArrangements.map((item, index) => (
                                <tr key={index}>
                                    <td class="text-wrap" style={{ maxWidth: "150px" }}>{item.unitOfTheUniversity}</td>
                                    <td class="text-wrap" style={{ maxWidth: "150px" }}>{item.institutionName}</td>
                                    <td class="text-wrap" style={{ maxWidth: "150px" }}>{item.date}</td>
                                    <td>
                                        <a href={item.link} target="_blank" rel="noreferrer" className="text-decoration-none mouLink">
                                            {item.link}
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>


        </AboutPageWrapper>
    );
}
