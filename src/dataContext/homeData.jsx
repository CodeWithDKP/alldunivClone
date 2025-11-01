import { createContext, useContext } from "react";
import hero1 from "../assets/homeImages/heroimg1.png";
import hero2 from "../assets/homeImages/hero3.jpg";
import hero3 from "../assets/homeImages/heroimg3.jpg";
import seminar from "../assets/homeImages/lecture.png";
import admission from "../assets/homeImages/admission.png";
import book from "../assets/homeImages/book.png";
import recruitment from "../assets/homeImages/recruitment.png";
import Samarth from "../assets/homeImages/Samarth.png";
import homevideo from "../assets/homeImages/home-video.mp4";
import newIcon from '../assets/icons/new-gif-image.gif';
import viceCha from '../assets/homeImages/vice-Chancellor.jpg';
import impLinkIcon from '../assets/icons/impLinksIcon.png';
import visitor from '../assets/homeImages/visitor.jpg';
import chiefrector from '../assets/homeImages/chiefrector.png';
import chancellor from '../assets/homeImages/chancellor.png';
import vicechancellor from '../assets/homeImages/vicechancellor.jpg';
import portaladmission from '../assets/homeImages/portaladmission.png';
import portalwebmail from '../assets/homeImages/portalwebmail.png';
import portaluoa from '../assets/homeImages/portaluoa.png';
import portalsamarth from '../assets/homeImages/portalsamarth.png';
import portalcarporate from '../assets/homeImages/portalcorporate.png';
import portalendowment from '../assets/homeImages/portalendowment.png';
import img1 from '../assets/homeImages/uselink1.png';
import img2 from '../assets/homeImages/uselink2.png';
import img3 from '../assets/homeImages/uselink3.png';
import img4 from '../assets/homeImages/uselink4.png';
import img5 from '../assets/homeImages/uselink5.png';
import img6 from '../assets/homeImages/uselink6.png';
import img7 from '../assets/homeImages/uselink7.jpg';
import img8 from '../assets/homeImages/uselink8.png';
const HomeDataContext = createContext();

const HomeDataProvider = ({ children }) => {
    const homeData = {
        hero: [hero1, hero2, hero3],
        videoSection: {
            img: [
                { img: seminar, text: "Seminar" },
                { img: admission, text: "Admission" },
                { img: book, text: "Courses" },
                { img: recruitment, text: "Career" },
                { img: Samarth, text: "Samarth" },
            ],
            video: homevideo,
        },
        announcement: {

            title: "ANNOUNCEMENT",
            info: {
                data: [
                    {
                        date: "31 Oct 2025",
                        information:
                            "Winter Training on Space Science and Technology 2025 (A skill training and internship program)"
                    },
                    {
                        date: "29 Oct 2025",
                        information:
                            "बी.ए. भाग-2 मुख्‍य परीक्षा एवं द्वितीय परीक्षा से उत्‍तीर्ण छात्र/छात्राओं को सूचित किया जाता है कि सत्र 2025-26 बी.ए. भाग-3 में शुल्‍क जमा करके विषय प्रपत्र भरकर दिनांक 18-11-2025 तक अधिष्‍ठाता, कला संकाय कार्यालय में जमा करें"
                    },
                    {
                        date: "28 Oct 2025",
                        information: "Registration of Selection & Trials for Hockey, Sports Board"
                    },
                    {
                        date: "28 Oct 2025",
                        information: '"Fit India Freedom Run for 01 KM", Sports Board'
                    },
                    {
                        date: "28 Oct 2025",
                        information: "प्रवेश संबंधी सूचना : सरोजिनी नायडू महिला छात्रावास"
                    },
                    {
                        date: "28 Oct 2025",
                        information:
                            'Admission Open : Three Months Certificate Course on "Understanding Gender", Centre of Women\'s Studies'
                    },
                    {
                        date: "27 Oct 2025",
                        information:
                            "Registration of Selection and Trials of Tennis (M&W) and Basketball Men"
                    },
                    {
                        date: "22 Oct 2025",
                        information:
                            "Ph. D. Admission 2025-26 (Last Date Extended up to 27th October 2025)"
                    },
                    {
                        date: "20 Oct 2025",
                        information:
                            "Post Graduate Hostel (Female) Allotment List (Session 2025-26) MDVGH"
                    }
                ],
                icon: newIcon,
                button: "Read All News"
            },


            imgData: {
                img: viceCha,
                date: "Jan 07, 2024",
                text: "New Year Greeting from Hon'ble Vice-Chancellor",
                button: "View Detail",
            }
        },
        importentLinks: {
            button: {
                icon: impLinkIcon,
                text: "More important links",
            },
            links: [
                { date: "31 Oct 2025", text: "Ph.D. Admissions – Apply Now" },
                { date: "29 Oct 2025", text: "Winter Internship on Data Science" },
                { date: "25 Oct 2025", text: "Sports Trial Registration Open" },
                { date: "22 Oct 2025", text: "Results Declared – 2025 Batch" },
                { date: "18 Oct 2025", text: "Workshop on Generative AI – Join Today" },
                { date: "31 Oct 2025", text: "Ph.D. Admissions – Apply Now" },
                { date: "29 Oct 2025", text: "Winter Internship on Data Science" },
                { date: "25 Oct 2025", text: "Sports Trial Registration Open" },
                { date: "22 Oct 2025", text: "Results Declared – 2025 Batch" },
                { date: "18 Oct 2025", text: "Workshop on Generative AI – Join Today" },
            ],
        },
        album : [
            {
                img:visitor,
                professionName:"Visitor",
                Name:"Smt. Droupadi Murmu",
                role:"PRESIDENT OF INDIA"
            },
            {
                img:chiefrector,
                professionName:"Chief Rector",
                Name:"Smt. Anandiben Patel",
                role:"GOVERNOR OF UTTAR PRADESH"
            },
            {
                img:chancellor,
                professionName:"Chancellor",
                Name:"Shri Ashish Kumar Chauhan",
                role:"CHANCELLOR (UNIVERSITY OF ALLAHABAD)"
            },
            {
                img:vicechancellor,
                professionName:"Vice-Chancellor",
                Name:"Prof. Sangita Srivastava",
                role:"VICE-CHANCELLOR (UNIVERSITY OF ALLAHABAD)"
            },
        ],
        portal:{
            title:"ONLINE PORTAL",
          data:  [
            {icon:portaladmission,text:"Addmission"},
            {icon:portalwebmail,text:"Web Mail"},
            {icon:portaluoa,text:"UoA E-Office"},
            {icon:portalsamarth,text:"Samarth Portal"},
            {icon:portalcarporate,text:"Corporate Social Responsibility (CSR)"},
            {icon:portalendowment,text:"Endowment Scholarship"},
        ]
        },
        usefulLinks:[img1,img2,img3,img4,img5,img6,img7,img8]

    };
    return (
        <HomeDataContext.Provider value={homeData}>
            {children}
        </HomeDataContext.Provider>
    );
};

const useHomeData = () => useContext(HomeDataContext);

export { HomeDataProvider, useHomeData };
