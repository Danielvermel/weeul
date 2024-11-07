import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Cause from "./sections/Cause.jsx";
import WhyUs from "./sections/WhyUs.jsx";
import HowItWorks from "./sections/HowItWorks.jsx";
import WhatWeOffer from "./sections/WhatWeOffer.jsx";
import AboutUs from "./sections/AboutUs.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
    return (
        <main className="overflow-hidden">
            <Header />
            <Hero />
            <Cause />
            <WhyUs />
            <HowItWorks />
            <WhatWeOffer />
            <AboutUs />
            {/* <Newsletter type="client" />
            <Newsletter type="partner" /> */}
            {/* <Footer /> */}
        </main>
    );
};

export default App;
