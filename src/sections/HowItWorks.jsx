import { Element } from "react-scroll";
import React, { useState } from "react";
import clsx from "clsx";
import { howItWorks, howItWorksPartners, howItWorksTest } from "../constants/index.jsx";
import Button from "../components/Button.jsx";
import Modal from "../components/Modal.jsx";
import Newsletter from "../components/Newsletter.jsx";

const HowItWorks = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [type, setType] = useState("client");

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <section className="bg-white pt-32 pb-12">
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <Newsletter type={type} />
            </Modal>

            <Element name="How It Works">
                {howItWorksTest.map(
                    ({
                        pageTitle,
                        pageTitleColor,
                        subTitle,
                        mainDescription,
                        buttonAction,
                        buttonTitle,
                        buttonColor,
                        steps,
                        stepsColor,
                        sideImage,
                    }) => (
                        <div className="container mb-24">
                            <h2
                                className={clsx(
                                    "font-semibold text-5xl text-p4 max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12",
                                    pageTitleColor
                                )}
                            >
                                {pageTitle}
                            </h2>
                            <div className="text-xl flex flex-row justify-end -mt-6">
                                <div className="basis-1/2 text-right">
                                    <strong>{subTitle}</strong>
                                    <span className="block">{mainDescription}</span>

                                    <Button
                                        containerClassName={clsx(" w-72 mt-6 mx-0 h-12", buttonColor)}
                                        textClassName="tracking-wide font-semibold text-xl"
                                        onClick={() => {
                                            setType(buttonAction);
                                            handleOpenModal();
                                        }}
                                    >
                                        {buttonTitle}
                                    </Button>
                                </div>
                            </div>
                            <div className="flex flex-row items-start text-center gap-8 -mt-12">
                                {steps.map(({ id, icon, iconColor, textColor, bgColor, title, caption, reasons }) => (
                                    <div className="basis-1/4" key={`steps_` + id}>
                                        <div className={clsx("rounded-full  inline-flex")}>
                                            <img
                                                src={"/images/how-it-works/" + icon + ".svg"}
                                                alt="Explore Icon"
                                                className="w-36 h-36 mx-auto"
                                            />
                                        </div>
                                        <div className="relative">
                                            <div
                                                className={clsx(
                                                    stepsColor,
                                                    "py-4",
                                                    id === "0" && "arrow-end",
                                                    id === "1" && "-mx-8",
                                                    id === "2" && "arrow-start "
                                                )}
                                            >
                                                <h3 className={clsx("text-lg font-semibold")}>{title}</h3>
                                                <p className="text-sm text-gray-700 mt-1 italic">{caption}</p>
                                            </div>
                                        </div>

                                        <ul className="text-gray-600 mt-4 text-left rounded-2xl pl-8 pt-7 pb-4 pr-4 h-64 list-disc opacity-95 bg-gray-100">
                                            {reasons.map(({ point, description }) => (
                                                <li key={point + id} className="text-sm mb-6 tracking-wide">
                                                    <strong className="tracking-wider">{point}: </strong>
                                                    {description}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                                <div className="basis-1/4 mt-auto justify-center flex">
                                    <img src={sideImage} />
                                </div>
                            </div>
                        </div>
                    )
                )}
            </Element>
        </section>
    );
};

export default HowItWorks;
