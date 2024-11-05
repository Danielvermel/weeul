import { Element } from "react-scroll";
import Button from "../components/Button.jsx";

const AboutUs = () => {
    return (
        <section className="bg-white">
            <Element name="About Us" className="pt-24 max-lg:pb-24 max-md:py-16">
                <div>
                    {/* Yellow-bordered image as the containing element */}
                    <div className="relative inline-block rounded-2xl">
                        <img src="/images/about-us/papper-wall.png" className="bg-cover  h-lvh" />
                        <div className="container">
                            {/* Centered Image */}
                            <img
                                src="/images/about-us/about-us.png"
                                className="absolute top-32 left-1/2 transform -translate-x-1/2"
                            />

                            {/* Bottom Flexed Section */}
                            <div className="absolute top-1/3">
                                <div className="flex justify-center items-center">
                                    <div className="basis-1/3">
                                        <img src="/images/about-us/our-mission.png" className="mt-5" />
                                    </div>
                                    <div className="basis-1/3">
                                        <img src="/images/about-us/our-community.png" className="scale-90" />
                                    </div>
                                    <div className="basis-1/3">
                                        <img src="/images/about-us/looking-ahead.png" className="scale-90" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Buttons */}
                        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
                            <div className="flex items-center justify-center flex-row gap-10">
                                <Button
                                    containerClassName="bg-s6 w-96 basis-1/2 opacity-75 h-16"
                                    textClassName="tracking-wide  text-2xl font-semibold"
                                    onClick={() => {
                                        setType("client");
                                        handleOpenModal();
                                    }}
                                >
                                    Find My Health Partner
                                </Button>

                                <Button
                                    containerClassName="bg-p4 w-96 basis-1/2 opacity-75 h-16"
                                    textClassName="text-white tracking-wide text-2xl font-semibold"
                                    onClick={() => {
                                        setType("partner");
                                        handleOpenModal();
                                    }}
                                >
                                    Become Our Partner
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    );
};
export default AboutUs;
