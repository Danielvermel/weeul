import { Element } from "react-scroll";

import { details, reasons, comparisonTable } from "../constants/index.jsx";
import { CheckIcon } from "@heroicons/react/24/solid";

const WhyUs = () => {
    return (
        <section className="pt-12 bg-white">
            <Element name="Why Healix">
                <div className="container">
                    <h2 className="mb-6 font-semibold text-6xl text-p4 max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
                        Why Healix?
                    </h2>

                    <div className="relative flex md:flex-wrap flex-nowrap  rounded-7xl md:overflow-hidden max-md:flex-col feature-after max-md:border-none max-md:rounded-none max-md:gap-5">
                        <div className="max-w-4xl mx-auto p-4 basis-1/2">
                            <div className="grid grid-cols-11 gap-3 mb-3 text-center text-white">
                                <div className="bg-p4 rounded-lg p-4 font-bold col-span-3 opacity-0"></div>
                                <div className="bg-p4 tracking-wider rounded-lg p-4 font-bold col-span-4">Healix</div>
                                <div className="bg-p4 tracking-wider rounded-lg p-4 font-bold col-span-4 ">
                                    Conventional Medicine
                                </div>
                            </div>

                            <div className="grid grid-cols-11 gap-4 rounded-lg">
                                {comparisonTable.map(({ id, feature, healixInfo, conventionMedicineInfo }) => (
                                    <div key={id} className="contents">
                                        {/* Use 'contents' to avoid additional grid layers */}
                                        <div className="p-4 bg-p4 tracking-wide text-white rounded-lg text-sm font-semibold col-span-3">
                                            {feature}
                                        </div>
                                        <div className="p-4 bg-orange-100 text-sm text-gray-700 col-span-4 rounded">
                                            {healixInfo}
                                        </div>
                                        <div className="p-4 bg-white text-sm text-gray-700 col-span-4 rounded">
                                            {conventionMedicineInfo}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="basis-1/2 mt-3">
                            {reasons.map(({ id, title, text }) => (
                                <div
                                    key={id}
                                    className="relative z-2 mb-6 md:px-6 px-5 basis-1/1 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320"
                                >
                                    <h2 className="mb-1 h6 text-p4 max-md:mb-3 max-md:h5">{title}</h2>
                                    <p className="body-3 max-md:mb-8 max-md:body-3">
                                        <CheckIcon className="size-6 text-s6 inline mr-2" />
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    );
};
export default WhyUs;
