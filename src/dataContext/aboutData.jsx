import { createContext, useContext, useState } from "react";
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
                tableHeading: "List of Balance Sheets",
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
            Iqac: {
                title: "Internal Quality Assurance Cell (IQAC)",
                breadcrumb: ["Home", "Pages", "Internal Quality Assurance Cell (IQAC)"],
                section1: {
                    leftList: ["IQAC Home",
                        "Anual Quality Assurance Report",
                        "Feedback",
                        "SSR",
                        "NAAC 2024",
                        "AQAR",
                        "NAAC Team",
                        "Minutes of IQAC Meeting",
                        "Minutes for NAAC Report Prepartion Committee Meeting",
                        "Feedback Analysis Reports",
                        "ASAR Form (Download)",
                        "Activites",
                        "Student Satisfaction Survey",
                        "Code Of Conduct",
                        "Institutional Perspective Plan"
                    ],
                    rightSide: {
                        content: {
                            title: "About Us",
                            description: "In pursuance of the National Action Plan of the National Assessment and Accreditation Council (NAAC), Bangalore, for performance evaluation, assessment and accreditation and quality up-gradation of institutions of higher education, the NAAC proposes that every accredited institution establish an Internal Quality Assurance Cell (IQAC) as a post-accreditation quality sustenance measure. Since quality enhancement is a continuous process, the IQAC will become a part of an institution's system and work towards realizing the goals of quality enhancement and sustenance. The prime task of the IQAC is to develop a system for conscious, consistent and catalytic improvement in the performance of institutions. The IQAC will make a significant and meaningful contribution in the post-accreditation phase of institutions. During the post-accreditation period, the IQAC will channelize the efforts and measures of an institution towards academic excellence."
                        },
                        table: [
                            {
                                InternalQualityAssuranceCellIQAC: [
                                    "1",
                                    "Prof. Sangita Srivastava, Vice Chancellor",
                                    "Chairperson"
                                ],
                                Role: "Head of the Institution"
                            },
                            {
                                InternalQualityAssuranceCellIQAC: [
                                    "2",
                                    "Dean, Faculty of Science",
                                    "Member"
                                ],
                                Role: "Teacher of the University"
                            },
                            {
                                InternalQualityAssuranceCellIQAC: [
                                    "3",
                                    "Dean, Faculty of Arts",
                                    "Member"
                                ],
                                Role: "Teacher of the University"
                            },
                            {
                                InternalQualityAssuranceCellIQAC: [
                                    "4",
                                    "Dean, Faculty of Commerce",
                                    "Member"
                                ],
                                Role: "Teacher of the University"
                            },
                            {
                                InternalQualityAssuranceCellIQAC: [
                                    "5",
                                    "Dean, Research & Development",
                                    "Member"
                                ],
                                Role: "Teacher of the University"
                            },
                            {
                                InternalQualityAssuranceCellIQAC: [
                                    "6",
                                    "Dean, College Development",
                                    "Member"
                                ],
                                Role: "Teacher of the University"
                            },
                            {
                                InternalQualityAssuranceCellIQAC: [
                                    "7",
                                    "Dean, Student Welfare",
                                    "Member"
                                ],
                                Role: "Teacher of the University"
                            },
                            {
                                InternalQualityAssuranceCellIQAC: [
                                    "8",
                                    "Prof. Ashish Khare, Department of Electronics and Communication",
                                    "Member"
                                ],
                                Role: "Teacher of the University"
                            },
                            {
                                InternalQualityAssuranceCellIQAC: [
                                    "9",
                                    "Prof. Jaya Kapoor, Department of English and Modern European Languages",
                                    "Member"
                                ],
                                Role: "Teacher of the University"
                            },
                            {
                                InternalQualityAssuranceCellIQAC: [
                                    "10",
                                    "Prof. S. I. Rizvi",
                                    "Member"
                                ],
                                Role: "Management Representative (EC member)"
                            },
                            {
                                InternalQualityAssuranceCellIQAC: [
                                    "11",
                                    "Registrar, Senior administrative officers",
                                    "Member"
                                ],
                                Role: "Senior Administrative Officers"
                            },
                            {
                                InternalQualityAssuranceCellIQAC: [
                                    "12",
                                    "Proctor, Senior administrative officers",
                                    "Member"
                                ],
                                Role: "Senior Administrative Officers"
                            },
                            {
                                InternalQualityAssuranceCellIQAC: [
                                    "13",
                                    "Director, MNNIT, Prayagraj",
                                    "Member"
                                ],
                                Role: "Alumni and Employers Nominee"
                            },
                            {
                                InternalQualityAssuranceCellIQAC: [
                                    "14",
                                    "Shri Sandeep Kumar, Sr. Director, Infinera, Bangalore",
                                    "Member"
                                ],
                                Role: "Industrialists Nominee"
                            },
                            {
                                InternalQualityAssuranceCellIQAC: [
                                    "15",
                                    "Brig. Atul Kumar, Army Head Quarters, New Delhi",
                                    "Member"
                                ],
                                Role: "Society Nominee"
                            },
                            {
                                InternalQualityAssuranceCellIQAC: [
                                    "16",
                                    "Ms. Itee Ojha, Research Scholar, Dept. of Family & Comm. Science",
                                    "Member"
                                ],
                                Role: "Student Nominee"
                            },
                            {
                                InternalQualityAssuranceCellIQAC: [
                                    "17",
                                    "Prof. Manoj Kumar, Department of English & MEL",
                                    "Member Secretary / Coordinator IQAC"
                                ],
                                Role: "Senior Teacher of the University"
                            }

                        ]
                    }
                }
            },
            IAIP: {
                title: "Instutional Academic Integrity Panel (IAIP)",
                breadcrumb: ["Home", "page", "IAIP"]
            },
            IERB: {
                title: "Institution Ethics Review Board",
                breadcrumb: ["Home", "page", "Institution Ethics Review Board"],
                IERB_Overview: {
                    Name: "The Institutional Ethics Review Board (IERB), University of Allahabad (UoA)",
                    Established: ["The Institutional Ethics Review Board (IERB) of the University of Allahabad was established in March 2013 with the primary responsibility of upholding the ethical integrity of research involving human participants. Its essential role is to ensure a thorough and competent review of all ethical aspects of research proposals, and to approve and oversee studies—spanning biomedical, behavioral, social science, and epidemiological research—to safeguard the dignity, rights, safety, and well-being of all human participants.", "The IERB convenes regularly (at least once per semester) to review research proposals submitted by faculty members, research scholars, and postgraduate students from various Departments, Institutes, Centres, and Constituent Colleges of the University. These reviews are conducted to ensure strict adherence to the ethical standards established by the University of Allahabad, based on the guidelines of the Indian Council of Medical Research (ICMR), the World Health Organization (WHO), and the Declaration of Helsinki (2024) developed by the World Medical Association (WMA). The IERB is also responsible for formulating and periodically updating the University’s ethical guidelines in alignment with the latest revisions issued by the ICMR, WHO, and other internationally recognized ethical frameworks. "],
                    Policy_Statement: "ETHICAL CLEARANCE FROM THE IERB IS MANDATORY FOR ALL RESEARCH INVOLVING HUMAN PARTICIPANTS, AND PRIOR APPROVAL MUST BE OBTAINED BEFORE INITIATING THE STUDY."
                },
                IERB_Contact: {
                    heading: "Contact Info IERB, UoA",
                    Name: "Prof. Ram Manohar Yadav",
                    Role: "Convenor, IERB",
                    Department: "Department of Physics, UoA",
                    Email: "ierb@allduniv.ac.in"
                },
                IERB_Constitution: [
                    {
                        SNo: 1,
                        Composition: "Chairperson",
                        FullName: "Hon'ble Vice-Chancellor or her nominee Prof. Ashish Khare (Hon'ble VC Nominee)",
                        Designation: "Professor of Computer Science & Registrar UoA",
                        Affiliation: "Office of the Registrar University of Allahabad Prayagraj-211002"
                    },
                    {
                        SNo: 2,
                        Composition: "Convenor",
                        FullName: "Prof. Ram Manohar Yadav",
                        Designation: "Professor",
                        Affiliation: "Department of Physics, University of Allahabad Prayagraj-211002"
                    },
                    {
                        SNo: 3,
                        Composition: "Member",
                        FullName: "Prof. Dhananjai Yadav",
                        Designation: "Professor",
                        Affiliation: "Department of Education, University of Allahabad, Prayagraj-211002"
                    },
                    {
                        SNo: 4,
                        Composition: "Member",
                        FullName: "Prof. Bhoomika Rastogi Kar",
                        Designation: "Professor",
                        Affiliation: "Centre of Behavioural & Cognitive Science, University of Allahabad, Prayagraj-211002"
                    },
                    {
                        SNo: 5,
                        Composition: "Invited Member",
                        FullName: "Prof. Chandranshu Sinha",
                        Designation: "Professor",
                        Affiliation: "Department of Psychology, University of Allahabad, Prayagraj-211002"
                    },
                    {
                        SNo: 6,
                        Composition: "Member",
                        FullName: "Dr. Niti Kant",
                        Designation: "Associate Professor",
                        Affiliation: "Department of Physics, University of Allahabad, Prayagraj-211002"
                    }
                ],
                Proposal_Submission_Details: {
                    title: "Submission of Proposals for Ethical Approval",
                    mail: "ierb@allduniv.ac.in",
                    contentBefore: "All proposals seeking IERB approval must be submitted to the Convenor, IERB,UoA in two hard copies, along with one soft copy emailed to",
                    contentAfter: "(with the subject line: Proposal for IERB Approval). The soft copy should be a single PDF file containing the completed IERB form and all requisite documents, duly signed by the Principal Investigator (PI), Supervisor and forwarded by the respective Head/Coordinator. Proposals from constituent colleges are required to be forwarded through the Head of the respective University Department. Only proposals submitted in the prescribed format, along with all required annexures and attachments, will be considered for ethical review. The Participant Information Document (PID) and the Consent Form must be provided in English, along with a Hindi translation, and in any other relevant languages as needed.",
                },
                Important_Links: [
                    {
                        SNo: 1,
                        Title: "Ethics Review Application Form, UoA",
                        Link: "Ethics Review Application Form, UoA"
                    },
                    {
                        SNo: 2,
                        Title: "National Ethical Guidelines for Biomedical and Health Research Involving Human Participants",
                        Source: "Indian Council of Medical Research 2017",
                        Link: "https://ethics.ncdirindia.org/asset/pdf/ICMR_National_Ethical_Guidelines.pdf"
                    },
                    {
                        SNo: 3,
                        Title: "Ethical Requirements For Systematic Review & Meta-Analysis Proposals: \"An Addendum to ICMR National Ethical Guidelines for Biomedical and Health Research Involving Human Participants, 2017\"",
                        Source: "Indian Council of Medical Research, February 2024",
                        Link: "https://www.icmr.gov.in/icmrobject/uploads/Guidelines/1724842157_ethical_requirements_for_systematic_review_metaanalysis_proposals_an_addendum.pdf"
                    },
                    {
                        SNo: 4,
                        Title: "Standards and Operational Guidance for Ethics Review of Health-Related Research with Human Participants",
                        Source: "World Health Organization (WHO) 2011",
                        Link: "https://www.who.int/publications/i/item/97892415029488"
                    },
                    {
                        SNo: 5,
                        Title: "International Ethical Guidelines for Health-related Research Involving Humans",
                        Source: "Council for International Organizations of Medical Sciences (CIOMS)/ World Health Organization (WHO) 2016",
                        Link: "https://cioms.ch/wp-content/uploads/2017/01/WEB-CIOMS-EthicalGuidelines.pdf"
                    },
                    {
                        SNo: 6,
                        Title: "Declaration of Helsinki - Ethical Principles for Medical Research Involving Human Participants",
                        Source: "World Medical Association 2024",
                        Link: "https://www.wma.net/policies-post/wma-declaration-of-helsinki/"
                    }
                ]
            },
            IBSC: {
                title: "The Institutional Biosafety Committee (IBSC)",
                breadcrumb: ["Home", "page", "The Institutional Biosafety Committee (IBSC)"],
                contentTitle: "The Institutional Biosafety Committee (IBSC): ",
                contentDescription: ["The Institutional Biosafety Committee (IBSC), University of Allahabad is the nodal body set up by the University as per the national biosafety regulatory framework and registered and monitored by DBT/RCGM (Review Committee on Genetic Manipulation) on 19/12/2024 as per approval letter No. BT/IBKP/885/2024 of Department of Biotechnology, Govt. of India. ", "As per the Biosafety Regulatory Framework, all activities related to Genetically Engineered organisms (GE organisms) or cells and non-GE hazardous microorganisms and products thereof are regulated as per the Rules for the Manufacture, Use, Import, Export and Storage of Hazardous Microorganisms/Genetically Engineered Organisms or Cells 1989 (known as 'Rules, 1989') notified by the Ministry of Environment, Forest and Climate Change (MoEF&CC), Government of India, under the Environment (Protection) Act, 1986 (EPA 1986)"],
                contentList: {
                    title: "The Institutional Biosafety Committee (IBSC)† is solely responsible ",
                    list: [" To implement and respond to institutional biosafety & biosecurity at the institution level and ", " Evaluation of applications/ reports related to rDNA technology work involving the GE organisms and non-GE hazardous microorganisms in an organisation."]
                },
                tableOverview: ["Handbook for Institutional Biosafety Committees, DBT, September 2020.", "Constitution IBSC, UoA Office Contact: ", "Member Secretary, Centre of Biotechnology, UoA"],
                mail: "ibsc.uoa@allduniv.ac.in ",
                tableHeader: [
                    { label: "S.No" },
                    { label: "Composition" },
                    { label: "Full Name" },
                    { label: "CurrentDesignation" },
                    { label: "PresentAffiliation" }
                ],
                tableData: [
                    {
                        SNo: 1,
                        Composition: "Chairman",
                        FullName: "Prof. S. I. Rizvi",
                        CurrentDesignation: "Professor & Dean (R & D)",
                        PresentAffiliation: "Department of Biochemistry, University of Allahabad"
                    },
                    {
                        SNo: 2,
                        Composition: "Member Secretary",
                        FullName: "Dr. Awadh Bihari Yadav",
                        CurrentDesignation: "Assistant Professor",
                        PresentAffiliation: "Centre of Biotechnology, IIDS, University of Allahabad"
                    },
                    {
                        SNo: 3,
                        Composition: "DBT Nominee",
                        FullName: "Dr. Beenu Kumar",
                        CurrentDesignation: "Head & Professor",
                        PresentAffiliation: "Professor Department of Biochemistry, MLN Medical College, Prayagraj"
                    },
                    {
                        SNo: 4,
                        Composition: "Biosafety Officer",
                        FullName: "Dr. Vishwajeet Kr Srivastava",
                        CurrentDesignation: "Medical Officer",
                        PresentAffiliation: "Health Centre, University of Allahabad"
                    },
                    {
                        SNo: 5,
                        Composition: "Outside Expert",
                        FullName: "Dr. Sintu Kumar Samanta",
                        CurrentDesignation: "Assistant Professor",
                        PresentAffiliation: "IIIT Prayagraj"
                    },
                    {
                        SNo: 6,
                        Composition: "Internal Member",
                        FullName: "Dr. Neetu Mishra",
                        CurrentDesignation: "Professor",
                        PresentAffiliation: "Family and Community Science, University of Allahabad, Prayagraj"
                    },
                    {
                        SNo: 7,
                        Composition: "Internal Member",
                        FullName: "Dr. Dinesh Kumar Yadav",
                        CurrentDesignation: "Assistant Professor",
                        PresentAffiliation: "Department of Botany, University of Allahabad, Prayagraj"
                    },
                    {
                        SNo: 8,
                        Composition: "Internal Member",
                        FullName: "Dr. Rajesh Kumari",
                        CurrentDesignation: "Assistant Professor",
                        PresentAffiliation: "Department of Zoology, University of Allahabad, Prayagraj"
                    },
                    {
                        SNo: 9,
                        Composition: "Internal Member",
                        FullName: "Dr. Shanthy Sundram",
                        CurrentDesignation: "Professor",
                        PresentAffiliation: "Centre of Biotechnology, University of Allahabad, Prayagraj"
                    }
                ],
                process: {
                    title: "Process",
                    content: [
                        "All applications have to be generated via the IBKP online portal (https://ibkp.dbtindia.gov.in/Login/Login) and submitted to the IBSC for consideration. The IBSC will meet at least twice in a year, or more if required, to review all the received applications. Based on the comments for clarifications/revisions, and accordingly, the applicants must submit a revised application for approval. Applicants are expected to be available during the meeting for clarification /discussion, if required by the IBSC.",
                        "Only the application providing the complete details along with all the required documents as per the IBSC guidelines in a single PDF file submitted to ibsc.uoa@allduniv.ac.in will be considered in the meeting.",
                        "Detailed guidelines for preparation of project for submission and implementation, investigators must consult the DBT Handbook for Institutional Biosafety Committees (IBSCs), Third Revised Edition, September 2020. ",
                        "A detailed overview along with instructions and demo for filling and submitting the application was given in the recent workshops conducted by the IBSC UoA and the DBT-RCGM. A quick SOP for the Application Submission Guidelines and approval process is given below. You are requested to prepare and submit the application accordingly."
                    ]
                },
                Submission_of_IBSC_Application: {
                    start:"Submission of IBSC Application",
                    Process: "All the IBSC applications are to be generated online via I B K P portal.",
                    IBKP_Portal_URL: " (https://ibkp.dbtindia.gov.in/Login/Login)",
                    Credentials_Request: {
                        mail:" ibsc.uoa@allduniv.ac.in ",
                        Initial_Action: "USER Login at IBKP Portal First time users need to request to IBSC office at to obtain the credentials.",
                        Email_Subject: "Request for Login credentials at IBKP portal",
                        Required_Details: [
                            "Full name",
                            "School/Centre name",
                            "E-mail ID (official mail)"
                        ],
                        Credential_Handling: "Once registered by the IBSC, the credentials are sent directly to the user at the registered e-mail ID. Keep the credentials safe and confidential. Login password can be changed by the user. The credentials will be required for each login to the IBSC portal, tracking your application, reply to any queries raised by the IBSC/RCGM. Same credentials are to be used for submission of future applications."
                    },
                    Application_Steps_Online: [
                        "Select a suitable category (Agriculture Biotechnology or Medical Biotechnology) from the drop down menu at the center of the webpage.",
                        "Click on the suitable application link as per the requirement for which IBSC approval is sought. For example, for R & D projects click on the \"To carryout Research & Development\" link.",
                        "The form should be complete in all respects and all fields/sections should be filled adequately avoiding \"NA\" until totally irreverent to the proposed work.",
                        "ONLY the regular UoA faculty can be an applicant in the IBSC applications. All the IBSC applications MUST be verified and submitted by the UoA Faculty only.",
                        "While filling keep saving the form at regular intervals. After filling the form click VERIFY and the completely filled application will be displayed.",
                        "DOWNLOAD the filled form in PDF format. DO NOT SUBMIT the form at this stage."
                    ],
                    Submission_Steps_Offline: [
                        "Insert your signature and stamp at the designated place.",
                        "Make a single PDF file of the IBSC application and all the requisite documents (attachments/annexures including sequence/vector accession numbers/details etc. or any other appropriate information).",
                        "Only the complete and readable applications strictly in the proper format along with all the annexures/attachments (as per instructions/guidelines given by RCGM, IBSC webpage and/or sent from time to time) will be taken up in all future meetings.",
                        "Send the complete IBSC application in a single PDF file via e-mail to ibsc.uoa@allduniv.ac.in for consideration by the IBSC (Subject line: Application for New IBSC Proposal)."
                    ],
                    IBSC_RCGM_Important_Links: {
                        Secretariat_Links: [
                            {
                                Title: "DBT Indian Biosafety Knowledge Portal (IBKP)",
                                Link: "https://ibkp.dbtindia.gov.in/Login/Login"
                            },
                            {
                                Title: "IBSC Rules, Acts & Guidelines",
                                Link: "https://ibkp.dbtindia.gov.in/Content/Rules"
                            },
                            {
                                Title: "IBSC related application formats",
                                Link: "https://ibkp.dbtindia.gov.in/Content/ApplicationFormats"
                            }
                        ],
                        Secretariat_Queries_Emails: [
                            {
                                Type: "IBSC Related Queries",
                                Email: "ibkp2019@dbt.nic.in"
                            },
                            {
                                Type: "RCGM Related Queries",
                                Email: "rcgm.dbt@nic.in"
                            }
                        ],
                        Guidelines_Handbooks: [
                            {
                                Title: "Handbook for Institutional Biosafety Committees (IBSCs), Third Revised Edition, September 2020",
                                Download: "Download (Link not provided, implied)"
                            },
                            {
                                Title: "Guidelines for the Establishment of Containment Facilities: BSL2 and BSL3 and Certification of BSL3 facility 2020",
                                Download: "Download (Link not provided, implied)"
                            },
                            {
                                Title: "Revised Simplified Procedures/ Guidelines on Import, Export and Exchange of GE organisms and products thereof for R&D purpose, 2020",
                                Download: "Download (Link not provided, implied)"
                            },
                            {
                                Title: "Regulations & Guidelines for Recombinant DNA Research and Biocontainment, 2017",
                                Download: "Download (Link not provided, implied)"
                            },
                            {
                                Title: "Guidelines for the Environmental Risk Assessment of Genetically Engineered Plants, 2016",
                                Download: "Download (Link not provided, implied)"
                            }
                        ]
                    }
                }
            },
            AnnualReport: {
                button: "Download Annual Report Format",
                SAR: {
                    title: "SAR & Annual Account",
                    header: {
                        rows: [
                            [
                                { label: "Years", rowSpan: 2 },
                                { label: "Particulars / Description", rowSpan: 2 },
                                { label: "PDF Format", colSpan: 2 }
                            ],
                            [
                                { label: "English" },
                                { label: "Hindi" }
                            ]
                        ]
                    },
                    data: [

                        {
                            Years: "2013-14",
                            Discription: "SAR & Annual Account Report",
                            English: "View",
                            Hindi: "View"
                        },
                        {
                            Years: "2014-15",
                            Discription: "SAR & Annual Account Report",
                            English: "View",
                            Hindi: "View"
                        },
                        {
                            Years: "2015-16",
                            Discription: "SAR & Annual Account Report",
                            English: "View",
                            Hindi: "View"
                        },
                        {
                            Years: "2016-17",
                            Discription: "SAR & Annual Account Report",
                            English: "View",
                            Hindi: "View"
                        },
                        {
                            Years: "2017-18",
                            Discription: "SAR & Annual Account Report",
                            English: "View",
                            Hindi: "View"
                        },
                        {
                            Years: "2018-19",
                            Discription: "SAR & Annual Account Report",
                            English: "View",
                            Hindi: "View"
                        },
                        {
                            Years: "2019-20",
                            Discription: "SAR & Annual Account Report",
                            English: "View",
                            Hindi: "View"
                        },
                        {
                            Years: "2020-21",
                            Discription: "SAR & Annual Account Report",
                            English: "View",
                            Hindi: "View"
                        },
                        {
                            Years: "2021-22",
                            Discription: "SAR & Annual Account Report",
                            English: "View",
                            Hindi: "View"
                        },
                        {
                            Years: "2022-23",
                            Discription: "SAR & Annual Account Report",
                            English: "View",
                            Hindi: "View"
                        },
                        {
                            Years: "2023-24",
                            Discription: "SAR & Annual Account Report",
                            English: "View",
                            Hindi: "View"
                        }

                    ]
                },
                AnnualReports: {
                    title: "Annual Reports",
                    header: {
                        rows: [
                            [
                                { label: "Years", rowSpan: 2 },
                                { label: "Particulars / Description", rowSpan: 2 },
                                { label: "PDF Format", colSpan: 2 }
                            ],
                            [
                                { label: "English" },
                                { label: "Hindi" }
                            ]
                        ]
                    },
                    data: [
                        {
                            Years: "2012-13",
                            Discription: "Annual Report",
                            English: "View",
                            Hindi: ""
                        },
                        {
                            Years: "2013-14",
                            Discription: "Annual Report",
                            English: "View",
                            Hindi: ""
                        },
                        {
                            Years: "2014-15",
                            Discription: "X Annual Report",
                            English: "View",
                            Hindi: ""
                        },
                        {
                            Years: "2015-16",
                            Discription: "XI Annual Report",
                            English: "View",
                            Hindi: ""
                        },
                        {
                            Years: "2016-17",
                            Discription: "XII Annual Report",
                            English: "View",
                            Hindi: "View"
                        },
                        {
                            Years: "2017-18",
                            Discription: "XIII Annual Report",
                            English: "View",
                            Hindi: "View"
                        },
                        {
                            Years: "2018-19",
                            Discription: "XIV Annual Report",
                            English: "View",
                            Hindi: ""
                        },
                        {
                            Years: "2019-20",
                            Discription: "XV Annual Report",
                            English: "View",
                            Hindi: ""
                        },
                        {
                            Years: "2020-21",
                            Discription: "XVI Annual Report",
                            English: "View",
                            Hindi: "View"
                        },
                        {
                            Years: "2021-22",
                            Discription: "XVII Annual Report",
                            English: "View",
                            Hindi: "View"
                        },
                        {
                            Years: "2022-23",
                            Discription: "XVIII Annual Report",
                            English: "View",
                            Hindi: "View"
                        },
                        {
                            Years: "2023-24",
                            Discription: "XIX Annual Report",
                            English: "View",
                            Hindi: "View"
                        }
                    ]
                }

            }

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