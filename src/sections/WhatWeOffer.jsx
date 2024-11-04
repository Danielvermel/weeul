import { offers } from "../constants/index.jsx";
import { Element } from "react-scroll";
import clsx from "clsx";

const WhatWeOffer = () => {
    return (
        <section className="mb-24">
            <Element name="What We Offer">
                <div className="container">
                    <h2 className="mb-6 font-semibold text-6xl text-p4 max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
                        What We Offer
                    </h2>
                    <div className="grid gap-4 grid-cols-2">
                        {offers.map(({ id, image, bgColor, title, description, benefits }) => (
                            <div
                                className={clsx("grid gap-4 grid-cols-3 mb-1 rounded-xl pt-4 pb-2 px-3", bgColor)}
                                key={id}
                            >
                                <div className="col-span-1 flex">
                                    <img src={image + ".png"} alt={title} className="w-full my-auto" />
                                </div>
                                <div className="col-span-2">
                                    <span className="text-p4 text-lg">{title}</span>
                                    <p>{description}</p>
                                    <ul className="list-disc pl-5">
                                        {benefits.map(({ id: beneId, description }) => (
                                            <li key={beneId}>{description}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default WhatWeOffer;
