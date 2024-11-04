import { Element } from "react-scroll";

const AboutUs = () => {
    return (
        <section className="bg-white">
            <Element name="About Us" className="pb-32 pt-24 max-lg:pb-24 max-md:py-16">
                <div className="container ">
                    {/* Yellow-bordered image as the containing element */}
                    <div className="relative inline-block rounded-2xl">
                        <img src="/images/about-us/papper-wall.png" className="rounded-2xl w-full" />

                        {/* Centered Image */}
                        <img
                            src="/images/about-us/about-us.png"
                            className="absolute top-5 left-1/2 transform -translate-x-1/2 "
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
                </div>
            </Element>
        </section>
    );
};
export default AboutUs;
