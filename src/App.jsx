import { Suspense, lazy } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderFooterProvider } from "./dataContext/headerFooter";
import { HomeDataProvider } from "./dataContext/homeData";
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

function App() {
  return (
    <Router>
      <HeaderFooterProvider>
        <Suspense fallback={
          <div className="loading-spinner-container">
            <div className="loading-spinner"></div>
          </div>
        }>

          <HomeDataProvider>
            <ErrorBoundary>
              <NotificationBar />
              <Logo />
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
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
              </Routes>
              <Footer />
            </ErrorBoundary>
          </HomeDataProvider>

        </Suspense>
      </HeaderFooterProvider>
    </Router>
  );
}

export default App;
