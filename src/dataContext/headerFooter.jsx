import { createContext, useContext } from "react";
import newIcon from "../assets/icons/new-gif-image.gif";
import Logo from "../assets/icons/LogoWeb.png";
const HeaderFooterContext = createContext();

const HeaderFooterProvider = ({ children }) => {

    const headerFooterData = {
        notificationBar: {
            icon: newIcon,
            messages: [
                "Admissions open for 2025–26 academic year. Apply now!",
                "Convocation 2025 will be held on 20th December at the main campus.",
                "University ranked among top 10 in India for research excellence.",
                "New hostel facilities inaugurated for first-year students.",
                "Admissions open for 2025–26 academic year. Apply now!",
                "Convocation 2025 will be held on 20th December at the main campus.",
                "University ranked among top 10 in India for research excellence.",
                "New hostel facilities inaugurated for first-year students.",
            ],
            end: "|",
        },
        logo: Logo,
        navLinks: [
            { name: "Home", path: "/" },

            {
                name: "About",
                path: "/about",
                subLinks: [
                    { name: "History", path: "/about" },
                    { name: "Vision & Mission", path: "/about" },
                    { name: "Authorities", path: "/about" },
                    { name: "Campus Map", path: "/about" },
                    { name: "Vice-Chancellor's Message", path: "/about" },
                    { name: "Registrar", path: "/about" },
                    { name: "Statutes & Ordinances", path: "/about" },
                    { name: "Affiliated Colleges", path: "/about" },
                    { name: "Infrastructure", path: "/about" },
                    { name: "Accreditation (NAAC)", path: "/about" },
                    { name: "Alumni", path: "/about" },
                    { name: "Annual Reports", path: "/about" },
                    { name: "IQAC (Internal Quality Assurance Cell)", path: "/about" },
                    { name: "Tenders & Notices", path: "/about" },
                ],
            },

            {
                name: "Administration",
                path: "/administration",
                subLinks: [
                    { name: "Vice Chancellor", path: "/administration" },
                    { name: "Registrar", path: "/administration" },
                    { name: "Finance Officer", path: "/administration" },
                    { name: "Administrative Staff", path: "/administration" },
                    { name: "Dean of Academic Affairs", path: "/administration" },
                    { name: "Controller of Examinations", path: "/administration" },
                    { name: "Librarian", path: "/administration" },
                    { name: "Chief Proctor", path: "/administration" },
                    { name: "Public Relations Officer (PRO)", path: "/administration" },
                    { name: "Internal Audit Officer", path: "/administration" },
                    { name: "Director of Research", path: "/administration" },
                    { name: "Dean of Students Welfare (DSW)", path: "/administration" },
                    { name: "Executive Council", path: "/administration" },
                    { name: "University Court", path: "/administration" },
                    { name: "Joint Registrar", path: "/administration" },
                ],
            },

            {
                name: "Academics",
                path: "/academics",
                subLinks: [
                    { name: "Departments", path: "/academics" },
                    { name: "Courses Offered", path: "/academics" },
                    { name: "Academic Calendar", path: "/academics" },
                    { name: "Syllabus", path: "/academics" },
                    { name: "Faculty", path: "/academics" },
                    { name: "Research Programs", path: "/academics" },
                    { name: "Admissions", path: "/academics" },
                    { name: "Examinations", path: "/academics" },
                    { name: "E-Resources / Library", path: "/academics" },
                ],
            },

            {
                name: "Students",
                path: "/students",
                subLinks: [
                    { name: "Student Portal", path: "/students" },
                    { name: "Examination", path: "/students" },
                    { name: "Hostel Info", path: "/students" },
                    { name: "Results", path: "/students" },
                    { name: "Scholarships & Financial Aid", path: "/students" },
                    { name: "Career & Placement Cell", path: "/students" },
                    { name: "Anti-Ragging", path: "/students" },
                    { name: "Fee Payment", path: "/students" },
                    { name: "Student Grievance Redressal", path: "/students" },
                    { name: "Student Welfare Services", path: "/students" },
                    { name: "NSS/NCC", path: "/students" },
                    { name: "Clubs & Societies", path: "/students" },
                    { name: "Time Table", path: "/students" },
                    { name: "Downloads & Forms", path: "/students" },
                    { name: "Code of Conduct", path: "/students" },
                ],
            },

            {
                name: "Research",
                path: "/research",
                subLinks: [
                    { name: "Research Centers", path: "/research" },
                    { name: "Publications", path: "/research" },
                    { name: "Projects", path: "/research" },
                    { name: "Innovation Cell", path: "/research" },
                ],
            },

            {
                name: "Facilities",
                path: "/facilities",
                subLinks: [
                    { name: "Library", path: "/facilities" },
                    { name: "Sports", path: "/facilities" },
                    { name: "Hostel", path: "/facilities" },
                    { name: "Health Center", path: "/facilities" },
                ],
            },

            {
                name: "Gallery",
                path: "/gallery",
                subLinks: [
                    { name: "Photo Gallery", path: "/gallery" },
                    { name: "Video Gallery", path: "/gallery" },
                ],
            },

            {
                name: "Alumni",
                path: "/alumni",
                subLinks: [
                    { name: "Alumni Portal", path: "/alumni" },
                    { name: "Meet Events", path: "/alumni" },
                    { name: "Success Stories", path: "/alumni" },
                ],
            },

            {
                name: "Colleges",
                path: "/colleges",
                subLinks: [
                    { name: "Constituent Colleges", path: "/colleges" },
                    { name: "Affiliated Colleges", path: "/colleges" },
                    { name: "List of Recognized Institutions", path: "/colleges" },
                    { name: "Approving Authorities & Bodies", path: "/colleges" },
                    { name: "Nodal Centres", path: "/colleges" },
                    { name: "University Departments", path: "/colleges" },
                    { name: "Research Centres", path: "/colleges" },
                    { name: "Distance Education Centres", path: "/colleges" },
                    { name: "College Login", path: "/colleges" },
                    { name: "Guidelines for Affiliation", path: "/colleges" },
                    { name: "Inspection Reports", path: "/colleges" },
                    { name: "Contact - College Section", path: "/colleges" },
                ],
            },

            { name: "Endowment", path: "/endowment" },
            { name: "IQAC", path: "/iqac" },
            { name: "Newsletter", path: "/newsletter" },

            {
                name: "Convocation",
                path: "/convocation",
                subLinks: [
                    { name: "2025 Convocation", path: "/convocation" },
                    { name: "Previous Convocations", path: "/convocation" },
                ],
            },
        ],
        footerData: {
            contact: {
                name: "University of Allahabad",
                address:
                    "Senate House Campus, University Road, Old Katra, Prayagraj (Allahabad), Uttar Pradesh - 211002",
                phone: "0532-2461083",
            },
            quickLinks1: [
                { text: "Directory", path: "#Directory" },
                { text: "NEP 2020", path: "#" },
                { text: "Sankalpana", path: "#" },
                { text: "Tender", path: "#" },
                { text: "Academic Calendar", path: "#" },
                { text: "Download Forms", path: "#" },
            ],
            quickLinks2: [
                { text: "Pay Fees", path: "#" },
                { text: "Admit Card", path: "#" },
                { text: "Student Feedback Form", path: "#" },
                { text: "Holidays - 2025", path: "#" },
                { text: "Public Self-Disclosure", path: "#" },
                { text: "Study in India", path: "#" },
            ],
            quickLinks3: [
                { text: "Annual Report", path: "#" },
                { text: "Alumni Portal", path: "#" },
                { text: "Contact Us", path: "#" },
                { text: "Web Mail", path: "#" },
                { text: "University Ranking", path: "#" },
                { text: "NCTE, New Delhi", path: "#" },
                { text: "Code of Conduct", path: "#" },
            ],
            copyright: "University of Allahabad. All Rights Reserved.",
            visitors: "10689417",
        },

    };

    return (
        <HeaderFooterContext.Provider value={headerFooterData}>
            {children}
        </HeaderFooterContext.Provider>
    );
};

const useHeaderFooter = () => useContext(HeaderFooterContext);

export { HeaderFooterProvider, useHeaderFooter };
