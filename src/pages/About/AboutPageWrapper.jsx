import { Link } from "react-router-dom";
import "../../assets/style/about.css";
export default function AboutPageWrapper({ title, breadcrumb, children }) {
  return (
    <div className="about-page-wrapper ">

      {/* Top Section */}
      <section className="about-top-section">
        <div className=" d-flex justify-content-between align-items-center container py-4">
          <h3 className="page-title text-white">{title}</h3>

          <ul className=" mb-0 d-flex list-unstyled breadcrumb gap-3">
            {breadcrumb.map((item, index) => (
              <li key={index} className="list-items-wrapper">
                {index === 0 ? (
                  <Link to="/" className="breadcrumb-link">
                    {item}
                  </Link>
                ) : (
                  <Link to="#" className="breadcrumb-link">
                    {item}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>


      {/* Page Content */}
      <div className="page-content">
        {children}
      </div>
    </div>
  );
}
