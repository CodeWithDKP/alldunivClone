import { Link } from "react-router-dom";
import { useHeaderFooter } from "../dataContext/headerFooter";
import "../components/components.css";
function Logo() {
    const { logo } = useHeaderFooter();

    return (
        <div className="logo-container text-center bg-white">
            <Link to="/" className="logo-link">
                <img src={logo} alt="logo" />
            </Link>
        </div>
    );
}
export default Logo;