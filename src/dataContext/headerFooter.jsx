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
                path: "#",
                subLinks: [
                    { name: "About University", path: "/about/university" },
                    { name: "Mission & Vision", path: "/about/mission-vision" },
                    { name: "Acts and Statues", path: "/about/acts-statues" },
                    { name: "Ordinance", path: "/about/ordinance" },
                    { name: "CCS (Conduct) Rules", path: "/about/ccs-rules" },
                    { name: "University MoU's", path: "/about/mou" },
                    { name: "RTI", path: "/about/rti" },
                    { name: "Budget Information", path: "/about/budget" },
                    { name: "Internal Quality Assurance Cell", path: "/about/iqac" },
                    { name: "Institutional Academic Integrity Panel (IAIP)", path: "/about/iaip" },
                    { name: "Institutional Ethics Review Board (IERB)", path: "/about/ierb" },
                    { name: "The Institutional Biosafety Committee (IBSC)", path: "/about/ibsc" },
                    {
                        name: "University Report", path: "#",
                        subLinks: [
                            { name: "Annual Report", path: "/about/archives/annual-report" },
                            { name: "Annual Quality Assurance Report (AQAR)", path: "/about/archives/aqar" },
                            { name: "AISHE", path: "/about/archives/aishe" },
                            { name: "NIRF at University Report", path: "/about/archives/nirf" },]
                    },

                    {
                        name: "Archives",
                        path: "#",
                        subLinks: [
                            { name: "Archived News & Updates", path: "/about/archives/news-updates" },
                            { name: "Result", path: "/about/archives/result" },
                            { name: "Recruitment", path: "/about/archives/recruitment" },
                            { name: "Tender", path: "/about/archives/tender" },
                        ],
                    },
                ]

            },

            {
                name: "Administration",
                path: "#",
                subLinks: [
                    { name: "Visitor", path: "/administration/visitor" },
                    { name: "Chief Rector", path: "/administration/chief-rector" },
                    { name: "Chancellor", path: "/administration/chancellor" },
                    { name: "Vice Chancellor", path: "/administration/vice-chancellor" },
                    { name: "Deans", path: "/administration/deans" },
                    { name: "Registrar", path: "/administration/registrar" },
                    { name: "Finance Officer", path: "/administration/finance-officer" },
                    { name: "PRO", path: "/administration/pro" },
                    { name: "Legal Cell", path: "/administration/legal-cell" },
                    {
                        name: "Statutory Bodies",
                        path: "#",
                        subLinks: [
                            { name: "The Court", path: "/administration/statutory-bodies/court" },
                            {
                                name: "Executive Council",
                                path: "/administration/statutory-bodies/executive-council",
                                subLinks: [
                                    { name: "Minutes of Previous Executive Council Meetings", path: "/administration/statutory-bodies/executive-council/minutes" },
                                    { name: "Executive Council", path: "/administration/statutory-bodies/executive-council/members" }, // Assuming this refers to the list of members
                                ]
                            },
                            {
                                name: "Academic Council",
                                path: "/administration/statutory-bodies/academic-council",
                                subLinks: [
                                    { name: "Minutes of Previous Academic Council Meetings", path: "/administration/statutory-bodies/academic-council/minutes" },
                                    { name: "List of Academic Council Members", path: "/administration/statutory-bodies/academic-council/members" },
                                ]
                            },
                            { name: "Finance Committee", path: "/administration/statutory-bodies/finance-committee" },
                            { name: "Others", path: "#",
                                subLinks:[{name:"International Students Advisor",path: "/administration/statutory-bodies/others/advisor"}]
                             },
                        ]
                    },
                    { name: "Head of Departments", path: "/administration/hod" },
                    { name: "Proctor", path: "/administration/proctor" },
                    { name: "Librarian", path: "/administration/librarian" },
                    { name: "Controller of Examinations", path: "/administration/controller-of-examinations" },
                    { name: "Directors/Coordinators", path: "/administration/directors-coordinators" },
                    { name: "Telephone Directory", path: "/administration/telephone-directory" },
                    { name: "Rajbhasha Cell", path: "/administration/rajbhasha-cell" },
                    { name: "Purchase and Store Department", path: "/administration/purchase-store" },
                    { name: "Former Chancellors", path: "/administration/former-chancellors" },
                    { name: "Former Vice Chancellors", path: "/administration/former-vice-chancellors" },
                ]
            },

            {
                name: "Academics",
                path: "#",
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
                path: "#",
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
                path: "#",
                subLinks: [
                    { name: "Research Centers", path: "/research" },
                    { name: "Publications", path: "/research" },
                    { name: "Projects", path: "/research" },
                    { name: "Innovation Cell", path: "/research" },
                ],
            },

            {
                name: "Facilities",
                path: "#",
                subLinks: [
                    { name: "Library", path: "/facilities" },
                    { name: "Sports", path: "/facilities" },
                    { name: "Hostel", path: "/facilities" },
                    { name: "Health Center", path: "/facilities" },
                ],
            },

            {
                name: "Gallery",
                path: "#",
                subLinks: [
                    { name: "Photo Gallery", path: "/gallery" },
                    { name: "Video Gallery", path: "/gallery" },
                ],
            },

            {
                name: "Alumni",
                path: "#",
                subLinks: [
                    { name: "Alumni Portal", path: "/alumni" },
                    { name: "Meet Events", path: "/alumni" },
                    { name: "Success Stories", path: "/alumni" },
                ],
            },

            {
                name: "Colleges",
                path: "#",
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
                path: "#",
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
