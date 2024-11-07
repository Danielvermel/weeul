import { Element } from "react-scroll";

import { details, reasons, comparisonTable } from "../constants/index.jsx";
import { CheckIcon } from "@heroicons/react/24/solid";

const WhyUs = () => {
    return (
        <section className="py-16 bg-p6">
            <Element name="Why Healix">
                <div className="container">
                    <h2 className="font-semibold text-5xl text-p4 max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
                        Why Healix?
                    </h2>

                    <div className="flex gap-24 md:flex-nowrap sm:flex-wrap md:overflow-hidden max-md:flex-col max-md:border-none max-md:rounded-none max-md:gap-5">
                        {/* Points */}
                        <div className="basis-1/2 mt-14 mb-3">
                            {reasons.map(({ id, title, text }) => (
                                <div
                                    key={id}
                                    className="relative z-2 mb-6  basis-1/1 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320"
                                >
                                    <h2 className="mb-1 text-xl font-semibold text-p4 max-md:mb-3 max-md:h5">
                                        {title}
                                    </h2>
                                    <p className="body-3 max-md:mb-8 max-md:body-3">
                                        <CheckIcon className="size-6 text-s6 inline mr-1" />
                                        {text}
                                    </p>
                                </div>
                            ))}

                            <img src="../images/why-us/doctor-conventional.png" className="rounded-xl" />
                        </div>

                        {/* Table */}
                        <div className="max-w-4xl mx-auto p-4 basis-1/2 mt-auto">
                            <h3 className="text-p4 font-semibold text-3xl mb-10">How HealGuid Stands Apart</h3>
                            <div className="grid grid-cols-11 gap-3 mb-3 text-center text-white">
                                <div className="bg-p4 rounded-lg p-4 font-bold col-span-3 opacity-0"></div>
                                <div className="bg-p4 tracking-wider rounded-lg p-4 font-bold col-span-4 flex items-center">
                                    <span className="m-auto">Healix</span>
                                </div>
                                <div className="bg-p4 tracking-wider rounded-lg p-4 font-bold col-span-4 flex">
                                    <span className="m-auto">Conventional Medicine</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-11 gap-4 rounded-lg">
                                {comparisonTable.map(({ id, feature, healixInfo, conventionMedicineInfo }) => (
                                    <div key={id} className="contents">
                                        {/* Use 'contents' to avoid additional grid layers */}
                                        <div className="p-4 bg-p4 tracking-wide text-white rounded-lg text-sm font-semibold col-span-3 flex">
                                            <span className="m-auto">{feature}</span>
                                        </div>
                                        <div className="p-4 bg-orange-100 text-sm text-center text-gray-700 col-span-4 rounded flex">
                                            <span className="m-auto">{healixInfo}</span>
                                        </div>
                                        <div className="p-4 bg-s1 text-sm text-gray-700 text-center col-span-4 rounded flex">
                                            <span className="m-auto">{conventionMedicineInfo}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    );
};
export default WhyUs;
