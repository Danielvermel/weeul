import { Element } from "react-scroll";
import { aboutUs } from "../constants/index.jsx";
import clsx from "clsx";

const AboutUs = () => {
    return (
        <section id="about-us" className="bg-white">
            <Element name="About Us" className=" pt-20 pb-24 max-lg:pb-24 max-md:py-16">
                <article className="container flex-col flex">
                    <h2 className="font-semibold text-5xl text-p4 mb-6 max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
                        About Us
                    </h2>
                    {aboutUs.map(({ id, title, description, img, bgColor }) => (
                        <div id={id} className={clsx("flex flex-nowrap", bgColor, !!(+id % 2) && "flex-row-reverse")}>
                            <img src={img} className={clsx("basis-3/12 w-96")} />
                            <div className="basis-9/12 my-auto px-12">
                                <h4 className="text-p4 text-2xl font-semibold">{title}</h4>
                                <p>{description}</p>
                            </div>
                        </div>
                    ))}
                </article>
            </Element>
        </section>
    );
};
export default AboutUs;
