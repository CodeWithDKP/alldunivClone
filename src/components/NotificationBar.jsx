import { Link } from "react-router-dom";
import { useHeaderFooter } from "../dataContext/headerFooter";
import "../components/components.css";

function NotificationBar() {
  const { notificationBar } = useHeaderFooter();
  const { icon, messages, end } = notificationBar;

  return (
    <div className="notification-bar">
      <div className="scroll-wrapper">
        <div className="scroll-content">
          {messages.map((msg, index) => (
            <span key={index} className="notification-item">
              <img src={icon} alt="new" className="notification-icon" />
              <Link to="/" className="notification-link">
                {msg}
              </Link>
              <span className="notification-end">{end}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NotificationBar;
