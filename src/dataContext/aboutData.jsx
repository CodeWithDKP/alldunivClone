import { createContext, useContext } from "react";
import history1 from "../assets/about/history1.png";
import history2 from "../assets/about/history2.png";
import history3 from "../assets/about/history3.png";
import MissionVision from "../pages/About/MissionVision";
import { data } from "react-router-dom";
const AboutDataContext = createContext();

const AboutDataProvider = ({ children }) => {
    const aboutData = {
        pages: {
            AboutUniversity: {
                title: "History",
                breadcrumb: ["Home", "page", "History"],
                div1: {
                    img: history1,
                    highlight: "University of Allahabad",
                    data: "has always occupied an esteemed place among the Universities of India for over a century. Established on 23rd September 1887, it is the fourth oldest University of India after Calcutta, Bombay and Madras University. The credit for conceiving a large Central College in Allahabad (now named as Prayagraj), eventually to develop into a University, goes to Sir William Muir, Lt. Governor of United Provinces. As a result of his initiative the foundation stone of the Muir Central College (named after him) was laid on Dec. 9 1873 by His Excellency Lord Northbrook. Sir William Muir said on the occasion; The establishment of a central college at Allahabad(now named as Prayagraj) has been my earnest desire ever since I assumed my present office. Shortly after coming here I found that a strong wish prevailed among the chief people of the place for a better means of education at Allahabad (now named as Prayagraj); and being myself deeply impressed with the same conviction, I took occasion at the first Darbar which I held here to urge upon those present the necessity of showing that they were sincere and in earnest, by contributing to the work."
                },

                div2: {
                    data: "The appeal was widely and liberally met, a considerable sum was subscribed and address was presented to me in 1869, praying for the establishment of the college here. On September 23, 1887 Act XVIII was passed which established the University of Allahabad. Like the Universities of Calcutta, Bombay and Madras, the University of Allahabad also started as a degree conferring institution. Its first entrance examination was held in March 1889. In 1904 the Indian Universities Act was passed which limited the territorial jurisdiction of University of Allahabad to the United Provinces of Agra and Awadh, the Central Provinces including Berar, Ajmer, Mewar and most of the states of Rajputana and Central Indian Agencies. Between 1887 and 1927 at least thirty-eight different institutions and colleges of this area were affiliated to University of Allahabad. With the promulgation of the University of Allahabad Act in 1921, the Muir Central College lost its independent existence. Between 1922-27 the University had its internal and external wings which were subsequently separated from the University to give the latter a purely unitary, and residential character. In fact the University of Allahabad was started with a preliminary loan of Rs. 5240/- from the government to meet its expenses. The loans were repaid in two years. Henceforth, its main source of its income was from the examination fees and sale of Prospectus & Calendar. Being an examining body it met its incidental expenses easily."
                },

                div3: {
                    img: history2,
                    data: "In 1892-93 the University began to invest some capital in the Government Securities. In 1899-1900 its reserve fund amounted to Rs. 34,000. The University was thus now in a position to construct its own buildings. In 1909 the present site was selected for the Library, the Senate House and the Law college. These buildings, which now house the Registrar's Office, Senate Hall and the English Department, were designed by Sir Swinton Jacob and their construction was approved in 1910. The foundation of the Senate House was laid on 17th January 1910 by Sir John Havett, the Chancellor. The construction of the Senate Hall, the Law College and the former Library building was commenced in 1910 and they were completed in 1915 at the cost of Rs. 11,67,275."
                },
                div4: {

                    data: "In 1923 the Government decided to acquire the property of the Indian Press for the University at the cost of about seven lakh rupees. This property comprised the present buildings of the Philosophy Department, the department of Med./Mod. History and the spacious buildings in which there was formerly the Proctor's Office, Post Office, and some rooms which are shared by the Political Science, Med./Mod. History, Ancient History and Hindi Departments. A few years ago this spacious building was demolished. The Indian Press property also included a tiled roofed building behind the dramatic hall and a similar type of building near the Political Science department and another building near the English Department. Of these the first two exist in present, the third was demolished recently. Since 1911 many new buildings have sprung up in the Senate House Campus and in the Chathem Lines campus. In the senate House Campus the Union Hall, the old Guest House, the building of the Commerce Department, the N.S.S. building, the buildings of the Ancient History Culture and Archaeology Department, Political Science Department, Department of Oriental Languages, Hindi Bhawan, Psychology department, Education department, Geography Department the New Library building are comparatively new constructions. Likewise in the Muir College Campus several alterations and additions have been made from time to time. Among the new buildings, the buildings of the J.K. Institute of Applied Physics, the new Gymnastic Hall, the new Mathematics Department are some additions. As the years rolled on, the two campuses began to look small. Consequently, the University obtained land from the Cantonment Board to house the department of Business Administration, Law Faculty and Gandhi Bhawan, Recently the bungalow of the late Dr. Bani Prasad has been purchased."
                },
                div5: {
                    img: history3,
                    data: "From the beginning the University has been concerned about women's education. It purchased houses for a women's Hostel and College at the cost of Rs. 66,286 and other buildings adjoining the College. While classes for girls were started in the old building, Sarojini Naidu and later Priyadarshini Girls Hostel was constructed for the boarders and recently the Shatabdi Girls Hostel has been constructed to accommodate many more boarders. Ever since the inception of the Muir Central College in 1873, efforts were constantly made to accommodate students coming from distant places. Formerly there were two boarding houses, one situated in the barrack in Malaka near the jail, where the Swarup Rani Hospital now stands. Later this boarding house was shifted to the tiled outhouse of the Lowther Castle, where the classes of the College were held. Finally it was shifted to a large thatched bungalow near the Bhardwaj Ashram."
                },
                div6: {

                    data: "In 1910-11 the Muir Hostel(Now Amar Nath Jha Hostel) was constructed; the Law Hostel (Now Sir Sunder Lal Hostel) was completed on 1914-15; Pandit Ganga Nath Jha Hostel (initially called New Hostel) was completed on 1928; the Hindu Boarding House (Now popularly called Hindu Hostel), which was formerly a straight building between 1902-22 without two wings was also constructed. About the same time the Oxford and Cambridge courts of the present Holland Hall came into existence. Subsequently, the P. C. Banerji Hostel, the K. P. University College and the Diamond Jubilee Hostels were constructed. A few years back the Tara Chand Hostel was constructed. The Muslim Boarding House (popularly called Muslim Hostel) is the oldest of all these hostels for it was constructed in 1896-97. In this millenium year, the University of Allahabad completes more than a hundred and thirteen years."
                },

            },
            MissionVision: {
                title: "Mission & Vision",
                breadcrumb: ["Home", "page", "Mission & Vision"],
                section1: [
                    { heading: "University of Allahabad" },
                    { title: "Mission", data: "To disseminate and advance knowledge by providing instructional and research facilities in the branches of learning; to make provisions for integrated courses in the humanities, the social sciences, the basic and applied science and technology in the educational programmes of the University; to take appropriate measures for promoting innovations in teaching-learning process, interdisciplinary and professional studies and research, removal of gender disparities and the digital divide, and the application of knowledge to social advancement, national progress and human welfare; and to educate and train human resource for the development of the country. " },
                    { title: "Vision", data: "The University of Allahabad envisions itself as a global hub of knowledge and academic excellence. Embodied in the emblem of the Banyan tree, the motto “Quot Rami Tot Arbores” or “यावत्य: शाखास्तवंतोवृक्षा:” translates as “as many branches, so many trees.” The motto inspires us to cultivate diverse academic disciplines, symbolized by the branches, contributing to a vast forest of wisdom. It shapes the young minds to become nation builders of the future. With a steadfast commitment to quality education, research, and cultural richness, the university aims to ascend to the ranks of the world's top-class institutions, fostering innovation and producing leaders who shape the future world, creating an environment where the frontiers of knowledge are explored and reaching out in commitment to enriching the lives of the people" }
                ]
            },
            ActsStatutes: {
                title: "Acts And Statutes",
                breadcrumb: ["Home", "page", "Acts & Statutes"]
            },
            Ordinance: {
                title: "Ordinance",
                breadcrumb: ["Home", "page", "Ordinance"]
            },
            CcsRules: {
                title: "CCS Rules",
                breadcrumb: ["Home", "page", "CCSRules"]
            },
            Mou: {
                title: "Memorandum of Understanding",
                breadcrumb: ["Home", "page", "Memorandum"],
                twinningArrangements: [
                    {
                        unitOfTheUniversity: "University of Allahabad, Prayagraj, U.P.",
                        institutionName: "Guru Ghasidas Vishwavidyalaya, Bilaspur (C.G.)",
                        date: "18-10-2024",
                        link: "MoU"
                    },
                    {
                        unitOfTheUniversity: "University of Allahabad, Prayagraj, U.P.",
                        institutionName: "Mizoram University, Aizawl, Mizoram",
                        date: "01-09-2024",
                        link: "MoU"
                    },
                    {
                        unitOfTheUniversity: "University of Allahabad, Prayagraj, U.P.",
                        institutionName: "CSIR-Institute of Genomics and Integrative Biology, New Delhi",
                        date: "22-08-2024",
                        link: "MoU"
                    },
                    {
                        unitOfTheUniversity: "University of Allahabad, Prayagraj, U.P.",
                        institutionName: "Motilal Nehru Medical College Allahabad Prayagraj",
                        date: "20-06-2024",
                        link: "MoU"
                    },
                    {
                        unitOfTheUniversity: "University of Allahabad, Prayagraj, U.P.",
                        institutionName: "Delhi Teachers University, Delhi",
                        date: "16-08-2024",
                        link: "MoU"
                    },
                    {
                        unitOfTheUniversity: "University of Allahabad Uttar Pradesh",
                        institutionName: "Indian Institute of Public Administration, New Delhi",
                        date: "14-08-2024",
                        link: "MoU"
                    },
                    {
                        unitOfTheUniversity: "University of Allahabad, Prayagraj, UP",
                        institutionName: "Inter University Centre for Teacher Education, BHU, Varanasi, UP",
                        date: "01-08-2024",
                        link: "MoU"
                    },
                    {
                        unitOfTheUniversity: "Navkalpana Innovation and Entrepreneurship Foundation, Incubation Centre, University of Allahabad",
                        institutionName: "Innovation and Incubation Hub MNNIT Foundation, MNNIT, Prayagraj",
                        date: "11-07-2024",
                        link: "MoU"
                    },
                    {
                        unitOfTheUniversity: "Department of Education, University of Allahabad",
                        institutionName: "Central University of South Bihar, Gaya, Bihar",
                        date: "01-07-2024",
                        link: "MoU"
                    },
                    {
                        unitOfTheUniversity: "Department of Ancient History, Culture and Archaeology, University of Allahabad",
                        institutionName: "DST- Birbal Sahni Institute of Palaeosciences (BSIP), Lucknow",
                        date: "13-06-2024",
                        link: "MoU"
                    },
                    {
                        unitOfTheUniversity: "Centre of Behavioural and Cognitive Science, University of Allahabad",
                        institutionName: "UNESCO Mahatma Gandhi Institute of Education for Peace and Sustainable Development, New Delhi",
                        date: "11-12-2023",
                        link: "MoU"
                    },
                    {
                        unitOfTheUniversity: "K. Banerjee Centre of Atmospheric and Ocean Studies, University of Allahabad, Allahabad",
                        institutionName: "National Institute of Technology (NITD)-Delhi",
                        date: "06-01-2023",
                        link: "MoU"
                    },
                    {
                        unitOfTheUniversity: "University of Allahabad",
                        institutionName: "Heartfulness Eduation Trust (HET)- Vijayawada, A.P.",
                        date: "27-11-2022",
                        link: "MoU"
                    },
                    {
                        unitOfTheUniversity: "K. Banerjee Centre of Atmospheric and Ocean Studies, University of Allahabad, Prayagraj",
                        institutionName: "National Institute of Technology (NITD)-Delhi",
                        date: "12-01-2018",
                        link: "MoU"
                    },
                    {
                        unitOfTheUniversity: "Center of Biotechnology, University of Allahabad, Prayagraj",
                        institutionName: "CSIR-Central Drug Research Institute, Sitapur Road Lucknow",
                        date: "11-04-2017",
                        link: "MoU"
                    },
                    {
                        unitOfTheUniversity: "University of Allahabad, Prayagraj",
                        institutionName: "World Food Preservation Centre LLC P.O. Box - 1629, Shepherdstown, WV 25443, USA",
                        date: "01-09-2015",
                        link: "MoU"
                    },
                    {
                        unitOfTheUniversity: "University of Allahabad, Prayagraj",
                        institutionName: "India Meteorological Department, Ministry of Earth Sciences, Government of India, Mausam Bhavan, Lodhi Road, New Delhi - 110003",
                        date: "08-08-2015",
                        link: "MoU"
                    },
                    {
                        unitOfTheUniversity: "K. Banerjee Centre of Atmospheric and Ocean Studies, University of Allahabad, Prayagraj",
                        institutionName: "The National Centre for Medium Range Weather Forecasting (NCMRWF), Earth System Sciences Organization, Ministry of Earth Sciences, A-50, Sector-62, NOIDA, UP 201309, India",
                        date: "16-04-2014",
                        link: "MoU"
                    },
                    {
                        unitOfTheUniversity: "Centre of Behavioural and Cognitive Science, University of Allahabad",
                        institutionName: "Centre of Biomedical Magnetic Resonance, Lucknow",
                        date: "20-07-2012",
                        link: "MoU"
                    }
                ]
            },
            RTI: {
                title: "RTI Status",
                breadcrumb: ["Home", "page", "RTI Status"],
                sectionTitle: "RTI Status",
                description: "Monthly Returns to Central Information Commission (Under Section 25 of Right to Information Act)",
                reports: [
                    {
                        period: "(Period: 01/01/2020 to 31/03/2020)",
                        details: "The details of applications received under RTI, First Appeals",
                        data: [
                            {
                                natureOfComplaints: "RTI",
                                openingBalance: 97,
                                receiptOfApplications: 130,
                                disposalOfApplications: 124,
                                applicationsUnderProgress: 103
                            },
                            {
                                natureOfComplaints: "First Appeal",
                                openingBalance: 33,
                                receiptOfApplications: 0,
                                disposalOfApplications: 0,
                                applicationsUnderProgress: 33
                            }
                        ]
                    },
                    {
                        period: "(Period: 01/10/2019 to 31/12/2019)",
                        details: "The details of applications received under RTI, First Appeals",
                        data: [
                            {
                                natureOfComplaints: "RTI",
                                openingBalance: 76,
                                receiptOfApplications: 280,
                                disposalOfApplications: 259,
                                applicationsUnderProgress: 97
                            },
                            {
                                natureOfComplaints: "First Appeal",
                                openingBalance: 33,
                                receiptOfApplications: 0,
                                disposalOfApplications: 0,
                                applicationsUnderProgress: 33
                            }
                        ]
                    },
                    {
                        period: "(Period: 01/07/2019 to 30/09/2019)",
                        details: "The details of applications received under RTI, First Appeals",
                        data: [
                            {
                                natureOfComplaints: "RTI",
                                openingBalance: 55,
                                receiptOfApplications: 125,
                                disposalOfApplications: 104,
                                applicationsUnderProgress: 76
                            },
                            {
                                natureOfComplaints: "First Appeal",
                                openingBalance: 15,
                                receiptOfApplications: 8,
                                disposalOfApplications: 8,
                                applicationsUnderProgress: 15
                            }
                        ]
                    },
                    {
                        period: "(Period: 01/04/2019 to 30/06/2019)",
                        details: "The details of applications received under RTI, First Appeals",
                        data: [
                            {
                                natureOfComplaints: "RTI",
                                openingBalance: 50,
                                receiptOfApplications: 150,
                                disposalOfApplications: 125,
                                applicationsUnderProgress: 75
                            },
                            {
                                natureOfComplaints: "First Appeal",
                                openingBalance: 10,
                                receiptOfApplications: 5,
                                disposalOfApplications: 5,
                                applicationsUnderProgress: 10
                            }
                        ]
                    },
                    {
                        period: "(Period: 01/01/2019 to 31/03/2019)",
                        details: "The details of applications received under RTI, First Appeals",
                        data: [
                            {
                                natureOfComplaints: "RTI",
                                openingBalance: 60,
                                receiptOfApplications: 95,
                                disposalOfApplications: 105,
                                applicationsUnderProgress: 50
                            },
                            {
                                natureOfComplaints: "First Appeal",
                                openingBalance: 5,
                                receiptOfApplications: 0,
                                disposalOfApplications: 0,
                                applicationsUnderProgress: 5
                            }
                        ]
                    },
                    {
                        period: "(Period: 01/10/2018 to 31/12/2018)",
                        details: "The details of applications received under RTI, First Appeals",
                        data: [
                            {
                                natureOfComplaints: "RTI",
                                openingBalance: 45,
                                receiptOfApplications: 110,
                                disposalOfApplications: 95,
                                applicationsUnderProgress: 60
                            },
                            {
                                natureOfComplaints: "First Appeal",
                                openingBalance: 0,
                                receiptOfApplications: 10,
                                disposalOfApplications: 10,
                                applicationsUnderProgress: 0
                            }
                        ]
                    },
                    {
                        period: "(Period: 01/07/2018 to 30/09/2018)",
                        details: "The details of applications received under RTI, First Appeals",
                        data: [
                            {
                                natureOfComplaints: "RTI",
                                openingBalance: 30,
                                receiptOfApplications: 120,
                                disposalOfApplications: 105,
                                applicationsUnderProgress: 45
                            },
                            {
                                natureOfComplaints: "First Appeal",
                                openingBalance: 0,
                                receiptOfApplications: 0,
                                disposalOfApplications: 0,
                                applicationsUnderProgress: 0
                            }
                        ]
                    },
                    {
                        period: "(Period: 01/04/2018 to 30/06/2018)",
                        details: "The details of applications received under RTI, First Appeals",
                        data: [
                            {
                                natureOfComplaints: "RTI",
                                openingBalance: 35,
                                receiptOfApplications: 80,
                                disposalOfApplications: 85,
                                applicationsUnderProgress: 30
                            },
                            {
                                natureOfComplaints: "First Appeal",
                                openingBalance: 5,
                                receiptOfApplications: 5,
                                disposalOfApplications: 5,
                                applicationsUnderProgress: 5
                            }
                        ]
                    },
                    {
                        period: "(Period: 01/01/2018 to 31/03/2018)",
                        details: "The details of applications received under RTI, First Appeals",
                        data: [
                            {
                                natureOfComplaints: "RTI",
                                openingBalance: 20,
                                receiptOfApplications: 90,
                                disposalOfApplications: 75,
                                applicationsUnderProgress: 35
                            },
                            {
                                natureOfComplaints: "First Appeal",
                                openingBalance: 10,
                                receiptOfApplications: 0,
                                disposalOfApplications: 0,
                                applicationsUnderProgress: 10
                            }
                        ]
                    },
                    {
                        period: "(Period: 01/10/2017 to 31/12/2017)",
                        details: "The details of applications received under RTI, First Appeals",
                        data: [
                            {
                                natureOfComplaints: "RTI",
                                openingBalance: 15,
                                receiptOfApplications: 100,
                                disposalOfApplications: 95,
                                applicationsUnderProgress: 20
                            },
                            {
                                natureOfComplaints: "First Appeal",
                                openingBalance: 5,
                                receiptOfApplications: 5,
                                disposalOfApplications: 5,
                                applicationsUnderProgress: 5
                            }
                        ]
                    },
                    {
                        period: "(Period: 01/07/2017 to 30/09/2017)",
                        details: "The details of applications received under RTI, First Appeals",
                        data: [
                            {
                                natureOfComplaints: "RTI",
                                openingBalance: 10,
                                receiptOfApplications: 110,
                                disposalOfApplications: 105,
                                applicationsUnderProgress: 15
                            },
                            {
                                natureOfComplaints: "First Appeal",
                                openingBalance: 0,
                                receiptOfApplications: 5,
                                disposalOfApplications: 5,
                                applicationsUnderProgress: 0
                            }
                        ]
                    },
                    {
                        period: "(Period: 01/04/2017 to 30/06/2017)",
                        details: "The details of applications received under RTI, First Appeals",
                        data: [
                            {
                                natureOfComplaints: "RTI",
                                openingBalance: 5,
                                receiptOfApplications: 150,
                                disposalOfApplications: 145,
                                applicationsUnderProgress: 10
                            },
                            {
                                natureOfComplaints: "First Appeal",
                                openingBalance: 0,
                                receiptOfApplications: 0,
                                disposalOfApplications: 0,
                                applicationsUnderProgress: 0
                            }
                        ]
                    },
                    {
                        period: "(Period: 01/01/2017 to 31/03/2017)",
                        details: "The details of applications received under RTI, First Appeals",
                        data: [
                            {
                                natureOfComplaints: "RTI",
                                openingBalance: 15,
                                receiptOfApplications: 90,
                                disposalOfApplications: 80,
                                applicationsUnderProgress: 25
                            },
                            {
                                natureOfComplaints: "First Appeal",
                                openingBalance: 5,
                                receiptOfApplications: 5,
                                disposalOfApplications: 0,
                                applicationsUnderProgress: 10
                            }
                        ]
                    },
                    {
                        period: "(Period: 01/10/2016 to 31/12/2016)",
                        details: "The details of applications received under RTI, First Appeals",
                        data: [
                            {
                                natureOfComplaints: "RTI",
                                openingBalance: 20,
                                receiptOfApplications: 130,
                                disposalOfApplications: 120,
                                applicationsUnderProgress: 30
                            },
                            {
                                natureOfComplaints: "First Appeal",
                                openingBalance: 0,
                                receiptOfApplications: 10,
                                disposalOfApplications: 5,
                                applicationsUnderProgress: 5
                            }
                        ]
                    },
                    {
                        period: "(Period: 01/07/2016 to 30/09/2016)",
                        details: "The details of applications received under RTI, First Appeals",
                        data: [
                            {
                                natureOfComplaints: "RTI",
                                openingBalance: 30,
                                receiptOfApplications: 100,
                                disposalOfApplications: 90,
                                applicationsUnderProgress: 40
                            },
                            {
                                natureOfComplaints: "First Appeal",
                                openingBalance: 5,
                                receiptOfApplications: 0,
                                disposalOfApplications: 0,
                                applicationsUnderProgress: 5
                            }
                        ]
                    },
                    // Reports 16 and 17 include Second Appeal and a Note
                    {
                        period: "(Period: 01/02/2016 to 29/02/2016)",
                        details: "The details of applications received under RTI, First and Second Appeals",
                        data: [
                            {
                                natureOfComplaints: "RTI",
                                openingBalance: 337,
                                receiptOfApplications: 42,
                                disposalOfApplications: 77,
                                applicationsUnderProgress: 102
                            },
                            {
                                natureOfComplaints: "First Appeal",
                                openingBalance: "-",
                                receiptOfApplications: 7,
                                disposalOfApplications: 7,
                                applicationsUnderProgress: "-"
                            },
                            {
                                natureOfComplaints: "Second Appeal",
                                openingBalance: "-",
                                receiptOfApplications: 3,
                                disposalOfApplications: 3,
                                applicationsUnderProgress: "-"
                            }
                        ],
                        note: "A total of 1287 New RTI application as received in First 10 month of the Financial Year 2015-2016 out of them 878 cases are disposed."
                    },
                    {
                        period: "(Period: 01/01/2016 to 31/01/2016)",
                        details: "The details of applications received under RTI, First and Second Appeals",
                        data: [
                            {
                                natureOfComplaints: "RTI",
                                openingBalance: 400,
                                receiptOfApplications: 50,
                                disposalOfApplications: 85,
                                applicationsUnderProgress: 150
                            },
                            {
                                natureOfComplaints: "First Appeal",
                                openingBalance: 5,
                                receiptOfApplications: 10,
                                disposalOfApplications: 10,
                                applicationsUnderProgress: 5
                            },
                            {
                                natureOfComplaints: "Second Appeal",
                                openingBalance: "-",
                                receiptOfApplications: 5,
                                disposalOfApplications: 5,
                                applicationsUnderProgress: "-"
                            }
                        ],
                        note: "The overall disposal rate for RTI applications has improved by 5% in this period compared to the previous financial year."
                    }
                ],
                CPIOs: {
                    title: "C.P.I.O's of Our University and Colleges",
                    cpioList: [
                        {
                            facultyOrCollege: "C.P.I.O.",
                            nameAndDesignation: "Dr. Haribansh Singh",
                            contactNumber: "9450546908",
                            department: "Law"
                        },
                        {
                            facultyOrCollege: "Examinations",
                            nameAndDesignation: "Maj. Harsh Kumar, Joint Registrar",
                            contactNumber: "9415140481",
                            department: "Examinations"
                        },
                        {
                            facultyOrCollege: "Accounts & Finance",
                            nameAndDesignation: "Mr. A. K. Kanojia, Joint Registrar",
                            contactNumber: "9454934924",
                            department: "Accounts & Finance"
                        },
                        {
                            facultyOrCollege: "Faculty of Arts",
                            nameAndDesignation: "Prof. Mustaq Ali, Professor",
                            contactNumber: "9453089608",
                            department: "Department of Hindi"
                        },
                        {
                            facultyOrCollege: "Faculty of Law",
                            nameAndDesignation: "Dr. J. P. Mishra, Associate Professor",
                            contactNumber: "9450614875",
                            department: "Department of Law"
                        },
                        {
                            facultyOrCollege: "Faculty of Science",
                            nameAndDesignation: "Dr. K. P. Singh, Associate Professor",
                            contactNumber: "9415309681",
                            department: "Department of Zoology"
                        },
                        {
                            facultyOrCollege: "Faculty of Commerce",
                            nameAndDesignation: "Dr. R. K. Singh, Associate Professor",
                            contactNumber: "9415214657",
                            department: "Department of Commerce"
                        },
                        {
                            facultyOrCollege: "Allahabad Degree College",
                            nameAndDesignation: "Dr. S. K. Tripathi, Associate Professor",
                            contactNumber: "9450590013",
                            department: "Department of Geography"
                        },
                        {
                            facultyOrCollege: "Arya Kanya Degree College",
                            nameAndDesignation: "Dr. (Mrs.) Madhurima Varma, Associate Professor",
                            contactNumber: "0532-2413069",
                            department: "Department of Education"
                        },
                        {
                            facultyOrCollege: "CMP Degree College",
                            nameAndDesignation: "Dr. S. K. Jha, Associate Professor",
                            contactNumber: "9415310910",
                            department: "Department of Commerce"
                        },
                        {
                            facultyOrCollege: "Ewing Christian College",
                            nameAndDesignation: "Dr. Alec D. M. David, Associate Professor",
                            contactNumber: "9450593198",
                            department: "Department of Chemistry"
                        },
                        {
                            facultyOrCollege: "Hamidia Girls' Degree College",
                            nameAndDesignation: "Dr. (Mrs.) Amna Farooqui, Associate Professor",
                            contactNumber: "9415306308",
                            department: "Department of Geography"
                        },
                        {
                            facultyOrCollege: "Ishwar Sharan Degree College",
                            nameAndDesignation: "Dr. Ajay Kumar Srivastava, Associate Professor",
                            contactNumber: "9415316780",
                            department: "Department of Economics"
                        },
                        {
                            facultyOrCollege: "Jagat Taran Girls' Degree College",
                            nameAndDesignation: "Dr. Deepshikha Banerji, Associate Professor",
                            contactNumber: "9415029542",
                            department: "Department of Philosophy"
                        },
                        {
                            facultyOrCollege: "K P Training Collge",
                            nameAndDesignation: "Smt. Sharad Srivastava, Associate Professor",
                            contactNumber: "9415029542",
                            department: "B.Ed."
                        },
                        {
                            facultyOrCollege: "Rajarshi Tandon Girls' Degree College",
                            nameAndDesignation: "Dr. (Smt.) Neelima Singh, Associate Professor",
                            contactNumber: "9450586884",
                            department: "Department of Political Science"
                        },
                        {
                            facultyOrCollege: "S S Khanna Girls' Degree College",
                            nameAndDesignation: "Dr. (Smt.) Lalima Singh, Associate Professor",
                            contactNumber: "9415644674",
                            department: "Department of Sociology"
                        },
                        {
                            facultyOrCollege: "S P M Government Degree College",
                            nameAndDesignation: "Dr. Ashok Verma, Associate Professor",
                            contactNumber: "9415267824",
                            department: "Department of Zoology"
                        }
                    ],
                    firstAppellateAuthority: {
                        title: "First Appellate Authority",
                        authority: ", University of Allahabad",
                        address: "Prayagraj - 211 002",
                        contactNo: "0532-2461083"
                    }
                },

            },
            Budget: {
                title: "Budget Information",
                breadcrumb: ["Home", "Pages", "Budget Information"],
                tableHeading:"List of Balance Sheets",
                balanceSheets: [
                    {
                        description: "Balance Sheet FY 2022-23",
                        action: "Download",
                        link: "/documents/balance-sheet-2022-2023.pdf"
                    },
                    {
                        description: "Balance Sheet FY 2021-22",
                        action: "Download",
                        link: "/documents/balance-sheet-2021-2022.pdf"
                    },
                    {
                        description: "Balance Sheet FY 2020-21",
                        action: "Download",
                        link: "/documents/balance-sheet-2020-2021.pdf"
                    },
                    {
                        description: "Balance Sheet FY 2019-20",
                        action: "Download",
                        link: "/documents/balance-sheet-2019-2020.pdf"
                    },
                    {
                        description: "Balance Sheet FY 2017-18",
                        action: "Download",
                        link: "/documents/balance-sheet-2017-2018.pdf"
                    },
                    {
                        description: "Balance Sheet FY 2016-17",
                        action: "Download",
                        link: "/documents/balance-sheet-2016-2017.pdf"
                    },
                    {
                        description: "Balance Sheet FY 2015-16",
                        action: "Download",
                        link: "/documents/balance-sheet-2015-2016.pdf"
                    }
                ]
            },
        }

    };
    return (
        <AboutDataContext.Provider value={aboutData} >
            {children}
        </AboutDataContext.Provider >
    );
}
const useAboutData = () => useContext(AboutDataContext);

export { AboutDataProvider, useAboutData };