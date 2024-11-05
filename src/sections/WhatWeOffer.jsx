import { offers } from "../constants/index.jsx";
import { Element } from "react-scroll";
import clsx from "clsx";

const WhatWeOffer = () => {
    return (
        <section className="bg-white">
            <Element name="What We Offer">
                <div className="container">
                    <h2 className="mb-6 font-semibold text-5xl text-p4 max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
                        What We Offer
                    </h2>
                    <div className="grid gap-x-16 gap-y-6 grid-cols-2">
                        {offers.map(({ id, image, bgColor, bgTitleColor, title, description, benefits }) => (
                            <div className={clsx("grid  grid-cols-3 mb-1 rounded-xl", bgColor)} key={id}>
                                <div className={clsx("col-span-1 flex rounded-l-xl", bgTitleColor)}>
                                    <span className="font-bold text-2xl text-center m-auto p-3">{title}</span>
                                </div>
                                <div className="col-span-2 pt-4 pb-4 pl-3 pr-2">
                                    <p className="text-p4 text-normal">{description}</p>
                                    <ul className="list-disc pl-8 mt-2">
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
