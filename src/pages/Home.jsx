import { useHomeData } from "../dataContext/homeData";
import "../assets/style/home.css";
import { useRef, useState, useEffect } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

function Home() {
    const { hero } = useHomeData();
    const { videoSection, announcement, importentLinks, album, portal, usefulLinks } = useHomeData();


    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? hero.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === hero.length - 1 ? 0 : prevIndex + 1
        );
    };
    const [impCurrentIndex, setImpCurrentIndex] = useState(0);
    const totalItems = importentLinks.links.length;

    // Next & Prev Handlers
    const handleImpNext = () => {
        setImpCurrentIndex((prev) => (prev + 1) % totalItems);
    };

    const handleImpPrev = () => {
        setImpCurrentIndex((prev) =>
            prev === 0 ? totalItems - 1 : (prev - 1) % totalItems
        );
    };

    // Auto-slide forward continuously
    useEffect(() => {
        const interval = setInterval(() => {
            setImpCurrentIndex((prev) => (prev + 1) % totalItems);
        }, 3000);

        return () => clearInterval(interval);
    }, [totalItems]);


    const scrollRef = useRef(null);
    const [showArrows, setShowArrows] = useState(false);

    const usefulhandleNext = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };

    const usefulhandlePrev = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };


    return (
        <>
            <section className="hero-home">
                <div className="hero-carousel position-relative overflow-hidden">
                    <div
                        className="carousel-track d-flex"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {hero.map((img, index) => (
                            <div className="carousel-slide" key={index}>
                                <img src={img} alt={`slide-${index}`} className="w-100" />
                            </div>
                        ))}
                    </div>

                    {/* Left & Right Buttons */}
                    <button className="carousel-btn left" onClick={handlePrev}>
                        <i className="bi bi-chevron-left"></i>
                    </button>
                    <button className="carousel-btn right" onClick={handleNext}>
                        <i className="bi bi-chevron-right"></i>
                    </button>
                </div>
            </section>
            {/*video-section*/}
            <section className="video-section py-5">
                <div className="container video-container">
                    {/* ---------- Row 1 ---------- */}
                    <div className="row text-center align-items-center mb-4 home-icons-row">
                        {videoSection.img.map((item, index) => (
                            <div
                                key={index}
                                className={`col-6 col-md-2 d-flex align-items-center justify-content-center home-icon ${index < videoSection.img.length - 1 ? "with-divider" : ""
                                    }`}
                            >
                                <img src={item.img} alt={item.text} className="icon-img me-2" />
                                <p className="icon-text">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* ---------- Row 2 (Video) ---------- */}
                    <div className="row gx-0"> {/* gx-0 removes Bootstrap gutter spacing */}
                        <div className="col-12">
                            <video className="home-video" src={videoSection.video} controls></video>
                        </div>
                    </div>
                </div>
            </section>
            {/* ---------- Announcement Section ---------- */}
            <section className="announcement-section ">
                <div className="container announcement-div">
                    {/* ---------- Row 1 ---------- */}
                    <div className="row align-items-center announcement-title-div">
                        <div className="col-3">
                            <h3 className="announcement-title">{announcement.title}</h3>
                        </div>
                        <div className="col-9">
                            <hr className="announcement-line" />
                        </div>
                    </div>

                    {/* ---------- Row 2 ---------- */}
                    <div className="row align-items-start">
                        {/* Left Column (Image + Text + Button) */}
                        <div className="col-md-5 d-flex flex-column  announcement-left">
                            <img
                                src={announcement.imgData.img}
                                alt="Vice Chancellor"
                                className="announcement-img mb-3"
                            />
                            <p className="announcement-date">{announcement.imgData.date}</p>
                            <p className="announcement-text">{announcement.imgData.text}</p>
                            <button className="announcement-btn">
                                {announcement.imgData.button}
                            </button>
                        </div>

                        {/* Right Column (Scrolling News) */}
                        <div className="col-md-6 announcement-right position-relative">
                            <div className="scroll-container-announcement">
                                <div className="scroll-content-announcement">
                                    {announcement.info.data.map((item, index) => (
                                        <div key={index} className="scroll-item-announcement d-flex align-items-start mb-3">
                                            <div className="me-2">
                                                <p className="scroll-date-announcement mb-1">{item.date}</p>
                                                <p className="scroll-text-announcement mb-0">
                                                    {item.information}
                                                    <img
                                                        src={announcement.info.icon}
                                                        alt="new icon"
                                                        className="scroll-icon-announcement ms-2"
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="text-end">
                                <button className="announcement-right-btn">{announcement.info.button}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*imp links section*/}
            <section className="impLinks-section ">
                <div className="container impContainer">
                    <div className="row align-items-left">
                        {/* Left Column: Links Carousel */}
                        <div className="col-12 col-md-9">
                            <div className="impLinks-carousel d-flex align-items-start justify-content-between">
                                <div className="impLinks-slider w-100 me-3">
                                    <div
                                        className="impLinks-track"
                                        style={{
                                            transform: `translateX(-${impCurrentIndex * 100}%)`,
                                            transition: "transform 0.7s ease-in-out",
                                        }}
                                    >
                                        {importentLinks.links.map((item, index) => (
                                            <div className="impLink-item text-white" key={index}>
                                                <span className="imp-date">{item.date}</span>
                                                <a href="#" className="imp-text">
                                                    {item.text}
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Arrows on Right Side */}
                                <div className="impLinks-arrows d-flex align-items-center">
                                    <button className="imp-arrow me-2" onClick={handleImpPrev}>
                                        <FaLongArrowAltLeft />
                                    </button>
                                    <button className="imp-arrow" onClick={handleImpNext}>
                                        <FaLongArrowAltRight />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Button with Icon */}
                        <div className="col-12 col-md-3 text-center text-md-end mt-3 mt-md-0">
                            <button className="impLinks-btn d-inline-flex align-items-center">
                                <img
                                    src={importentLinks.button.icon}
                                    alt="icon"
                                    className="me-2"
                                />
                                {importentLinks.button.text}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/*album section*/}
            <section className="album-section">
                <div className="container albumContainer">
                    <div className="row g-4">
                        {album.map((person, index) => (
                            <div className="col-12 col-sm-6 col-md-3" key={index}>
                                <div className="album-card text-start">
                                    <div className="album-img-wrapper position-relative">
                                        <img
                                            src={person.img}
                                            alt={person.Name}
                                            className="img-fluid rounded-top"
                                        />
                                        <span className="profession-overlay">
                                            {person.professionName}
                                        </span>
                                    </div>
                                    <div className="album-info py-3">
                                        <h6 className="album-name mb-1">{person.Name}</h6>
                                        <p className="album-role mb-0">{person.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/*Online Portal*/}
            <section className="portalSection">
                <div className="container portalContainer text-center">
                    {/* Section Title */}
                    <h2 className="portal-title mb-4">{portal.title}</h2>

                    {/* Portal Links (flex wrap instead of row/columns) */}
                    <div className="portal-links-wrapper">
                        {portal.data.map((item, index) => (
                            <div key={index} className="portal-card d-flex align-items-center">
                                <div className="portal-icon me-2">
                                    <img src={item.icon} alt={item.text} />
                                </div>
                                <span className="portal-text">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/*useful Links*/}
            <section className="usefulLinks-section py-5">
  <div className="container text-center position-relative">
    <h2 className="usefulLinks-title mb-4">USEFUL LINKS</h2>

    <div
      className="usefulLinks-wrapper"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      {/* Left Arrow */}
      {showArrows && (
        <button className="usefulLinks-arrow left" onClick={usefulhandlePrev}>
          &#10094;
        </button>
      )}

      {/* Scrollable Track */}
      <div className="usefulLinks-track" ref={scrollRef}>
        {usefulLinks.map((img, index) => (
          <div key={index} className="usefulLinks-item">
            <img src={img} alt={`useful-link-${index}`} />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      {showArrows && (
        <button className="usefulLinks-arrow right" onClick={usefulhandleNext}>
          &#10095;
        </button>
      )}
    </div>
  </div>
</section>


        </>
    );
}

export default Home;
