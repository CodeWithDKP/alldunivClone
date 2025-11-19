import { Suspense, lazy } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderFooterProvider } from "./dataContext/headerFooter";
import { HomeDataProvider } from "./dataContext/homeData";
import { AboutDataProvider } from "./dataContext/aboutData";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotificationBar from "./components/NotificationBar";
import Logo from "./components/Logo";
import './App.css';

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Administration = lazy(() => import("./pages/Administration"));
const Academics = lazy(() => import("./pages/Academics"));
const Students = lazy(() => import("./pages/Student"));
const Research = lazy(() => import("./pages/Research"));
const Facilities = lazy(() => import("./pages/Facilities"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Alumni = lazy(() => import("./pages/Alumni"));
const Colleges = lazy(() => import("./pages/Colleges"));
const Endowment = lazy(() => import("./pages/Endowment"));
const IQAC = lazy(() => import("./pages/IQAC"));
const Newsletter = lazy(() => import("./pages/Newsletter"));
const Convocation = lazy(() => import("./pages/Convocation"));


// Main About Pages
const AboutUniversity = lazy(() => import("./pages/About/AboutUniversity"));
const MissionVision = lazy(() => import("./pages/About/MissionVision"));
const ActsStatutes = lazy(() => import("./pages/About/ActsStatutes"));
const Ordinance = lazy(() => import("./pages/About/Ordinance"));
const CcsRules = lazy(() => import("./pages/About/CcsRules"));
const Mou = lazy(() => import("./pages/About/Mou"));
const Rti = lazy(() => import("./pages/About/Rti"));
const Budget = lazy(() => import("./pages/About/Budget"));
const Iqac = lazy(() => import("./pages/About/Iqac"));
const Iaip = lazy(() => import("./pages/About/Iaip"));
const Ierb = lazy(() => import("./pages/About/Ierb"));
const Ibsc = lazy(() => import("./pages/About/Ibsc"));

// University Report (Nested)
const AnnualReport = lazy(() =>
  import("./pages/About/UniversityReport/AnnualReport")
);
const Aqar = lazy(() =>
  import("./pages/About/UniversityReport/Aqar")
);
const Aishe = lazy(() =>
  import("./pages/About/UniversityReport/Aishe")
);
const Nirf = lazy(() =>
  import("./pages/About/UniversityReport/Nirf")
);

// Archives (Nested)
const NewsUpdates = lazy(() =>
  import("./pages/About/Archives/NewsUpdates")
);
const Result = lazy(() =>
  import("./pages/About/Archives/Result")
);
const Recruitment = lazy(() =>
  import("./pages/About/Archives/Recruitment")
);
const Tender = lazy(() =>
  import("./pages/About/Archives/Tender")
);



// Administration main pages
const Visitor = lazy(() => import("./pages/Administration/Visitor"));
const ChiefRector = lazy(() => import("./pages/Administration/ChiefRector"));
const Chancellor = lazy(() => import("./pages/Administration/Chancellor"));
const ViceChancellor = lazy(() => import("./pages/Administration/ViceChancellor"));
const Deans = lazy(() => import("./pages/Administration/Deans"));
const Registrar = lazy(() => import("./pages/Administration/Registrar"));
const FinanceOfficer = lazy(() => import("./pages/Administration/FinanceOfficer"));
const Pro = lazy(() => import("./pages/Administration/Pro"));
const LegalCell = lazy(() => import("./pages/Administration/LegalCell"));
const Hod = lazy(() => import("./pages/Administration/Hod"));
const Proctor = lazy(() => import("./pages/Administration/Proctor"));
const Librarian = lazy(() => import("./pages/Administration/Librarian"));
const ControllerExaminations = lazy(() =>
  import("./pages/Administration/ControllerExaminations")
);
const DirectorsCoordinators = lazy(() =>
  import("./pages/Administration/DirectorsCoordinators")
);
const TelephoneDirectory = lazy(() =>
  import("./pages/Administration/TelephoneDirectory")
);
const RajbhashaCell = lazy(() =>
  import("./pages/Administration/RajbhashaCell")
);
const PurchaseStore = lazy(() =>
  import("./pages/Administration/PurchaseStore")
);
const FormerChancellors = lazy(() =>
  import("./pages/Administration/FormerChancellors")
);
const FormerViceChancellors = lazy(() =>
  import("./pages/Administration/FormerViceChancellors")
);

const AcademicCouncil = lazy(() =>
  import("./pages/Administration/StatutoryBodies/AcademicCouncil"));
const ExecutiveCouncil = lazy(() =>
  import("./pages/Administration/StatutoryBodies/ExecutiveCouncil"));

// Statutory Bodies
const Court = lazy(() =>
  import("./pages/Administration/StatutoryBodies/Court")
);
const FinanceCommittee = lazy(() =>
  import("./pages/Administration/StatutoryBodies/FinanceCommittee")
);

// Executive Council nested
const ExecutiveCouncilMinutes = lazy(() =>
  import(
    "./pages/Administration/StatutoryBodies/ExecutiveCouncil/ExecutiveCouncilMinutes"
  )
);
const ExecutiveCouncilMembers = lazy(() =>
  import(
    "./pages/Administration/StatutoryBodies/ExecutiveCouncil/ExecutiveCouncilMembers"
  )
);

// Academic Council nested
const AcademicCouncilMinutes = lazy(() =>
  import(
    "./pages/Administration/StatutoryBodies/AcademicCouncil/AcademicCouncilMinutes"
  )
);
const AcademicCouncilMembers = lazy(() =>
  import(
    "./pages/Administration/StatutoryBodies/AcademicCouncil/AcademicCouncilMembers"
  )
);

// Others -> Advisor
const Advisor = lazy(() =>
  import("./pages/Administration/StatutoryBodies/Others/Advisor")
);

function App() {
  return (
    <Router>
      <HeaderFooterProvider>
        <Suspense fallback={
          <div className="loading-spinner-container">
            <div className="loading-spinner"></div>
          </div>
        }>
          {/**<HomeDataProvider> */}
          <AboutDataProvider>

            <ErrorBoundary>
              <NotificationBar />
              <Logo />
              <Header />
              <Routes>
                {/** <Route path="/" element={<Home />} />*/}
                <Route
                  path="/"
                  element={
                    <HomeDataProvider>
                      <Home />
                    </HomeDataProvider>
                  }
                />

                <Route path="/about" element={<AboutDataProvider>
                  <About />
                </AboutDataProvider>} />
                <Route path="/administration" element={<Administration />} />
                <Route path="/academics" element={<Academics />} />
                <Route path="/students" element={<Students />} />
                <Route path="/research" element={<Research />} />
                <Route path="/facilities" element={<Facilities />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/alumni" element={<Alumni />} />
                <Route path="/colleges" element={<Colleges />} />
                <Route path="/endowment" element={<Endowment />} />
                <Route path="/iqac" element={<IQAC />} />
                <Route path="/newsletter" element={<Newsletter />} />
                <Route path="/convocation" element={<Convocation />} />

                {/* Main About Pages */}
                <Route path="/about/university" element={

                  <AboutUniversity />
                } />
                <Route path="/about/mission-vision" element={<MissionVision />} />
                <Route path="/about/acts-statues" element={<ActsStatutes />} />
                <Route path="/about/ordinance" element={<Ordinance />} />
                <Route path="/about/ccs-rules" element={<CcsRules />} />
                <Route path="/about/mou" element={<Mou />} />
                <Route path="/about/rti" element={<Rti />} />
                <Route path="/about/budget" element={<Budget />} />
                <Route path="/about/iqac" element={<Iqac />} />
                <Route path="/about/iaip" element={<Iaip />} />
                <Route path="/about/ierb" element={<Ierb />} />
                <Route path="/about/ibsc" element={<Ibsc />} />

                {/* University Report */}
                <Route path="/about/archives/annual-report" element={<AnnualReport />} />
                <Route path="/about/archives/aqar" element={<Aqar />} />
                <Route path="/about/archives/aishe" element={<Aishe />} />
                <Route path="/about/archives/nirf" element={<Nirf />} />

                {/* Archives */}
                <Route path="/about/archives/news-updates" element={<NewsUpdates />} />
                <Route path="/about/archives/result" element={<Result />} />
                <Route path="/about/archives/recruitment" element={<Recruitment />} />
                <Route path="/about/archives/tender" element={<Tender />} />

                {/* Administration */}
                <Route path="/administration/visitor" element={<Visitor />} />
                <Route path="/administration/chief-rector" element={<ChiefRector />} />
                <Route path="/administration/chancellor" element={<Chancellor />} />
                <Route path="/administration/vice-chancellor" element={<ViceChancellor />} />
                <Route path="/administration/deans" element={<Deans />} />
                <Route path="/administration/registrar" element={<Registrar />} />
                <Route path="/administration/finance-officer" element={<FinanceOfficer />} />
                <Route path="/administration/pro" element={<Pro />} />
                <Route path="/administration/legal-cell" element={<LegalCell />} />
                <Route path="/administration/hod" element={<Hod />} />
                <Route path="/administration/proctor" element={<Proctor />} />
                <Route path="/administration/librarian" element={<Librarian />} />
                <Route path="/administration/controller-of-examinations" element={<ControllerExaminations />} />
                <Route path="/administration/directors-coordinators" element={<DirectorsCoordinators />} />
                <Route path="/administration/telephone-directory" element={<TelephoneDirectory />} />
                <Route path="/administration/rajbhasha-cell" element={<RajbhashaCell />} />
                <Route path="/administration/purchase-store" element={<PurchaseStore />} />
                <Route path="/administration/former-chancellors" element={<FormerChancellors />} />
                <Route path="/administration/former-vice-chancellors" element={<FormerViceChancellors />} />

                {/* Statutory Bodies */}
                <Route path="/administration/statutory-bodies/court" element={<Court />} />
                <Route path="/administration/statutory-bodies/finance-committee" element={<FinanceCommittee />} />
                <Route path="/administration/statutory-bodies/executive-council" element={<ExecutiveCouncil />} />
                <Route path="/administration/statutory-bodies/academic-council" element={<AcademicCouncil />} />
                {/* Executive Council Nested */}
                <Route path="/administration/statutory-bodies/executive-council/minutes" element={<ExecutiveCouncilMinutes />} />
                <Route path="/administration/statutory-bodies/executive-council/members" element={<ExecutiveCouncilMembers />} />

                {/* Academic Council Nested */}
                <Route path="/administration/statutory-bodies/academic-council/minutes" element={<AcademicCouncilMinutes />} />
                <Route path="/administration/statutory-bodies/academic-council/members" element={<AcademicCouncilMembers />} />

                {/* Others -> Advisor */}
                <Route path="/administration/statutory-bodies/others/advisor" element={<Advisor />} />
              </Routes>
              <Footer />
            </ErrorBoundary>

            {/** </HomeDataProvider>*/}
          </AboutDataProvider>
        </Suspense>
      </HeaderFooterProvider>
    </Router>
  );
}

export default App;
