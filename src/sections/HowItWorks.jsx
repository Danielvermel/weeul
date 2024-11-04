import { Element } from "react-scroll";
import React, { useState } from "react";
import clsx from "clsx";
import { howItWorks, howItWorksPartners } from "../constants/index.jsx";
import Button from "../components/Button.jsx";
import Modal from "../components/Modal.jsx";
import Newsletter from "../components/Newsletter.jsx";

const HowItWorks = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [type, setType] = useState("client");

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <section>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <Newsletter type={type} />
            </Modal>

            <Element name="How It Works">
                {/* Clients */}
                <div className="container mb-24">
                    <h2 className="font-semibold text-6xl text-p4 max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
                        How it Works
                    </h2>
                    <div className="mt-6 mb-8 text-2xl">
                        <strong>Your Health in Your Hands, Our Mission. </strong>
                        <span className="block">
                            Healix connects you with trusted holistic experts who focus on treating your whole self,
                            offering personalized, science- backed care that fits your lifestyle.
                        </span>

                        <Button
                            icon="/images/zap.svg"
                            containerClassName="bg-s6 w-72 m-6 mx-0"
                            textClassName="tracking-wide"
                            onClick={() => {
                                setType("client");
                                handleOpenModal();
                            }}
                        >
                            Find My Health Partner
                        </Button>
                    </div>
                    <div className="flex flex-row items-start text-center gap-8">
                        {howItWorks.map(({ id, icon, iconColor, textColor, bgColor, title, caption, reasons }) => (
                            <div className="basis-1/4" key={id}>
                                <div className={clsx("p-7 rounded-full mb-4 inline-flex", iconColor)}>
                                    <img
                                        src={"/images/how-it-works/" + icon + ".svg"}
                                        alt="Explore Icon"
                                        className="w-16 h-16 mx-auto"
                                    />
                                </div>
                                <h3 className={clsx("text-lg font-semibold", "text-", textColor)}>{title}</h3>
                                <p className="text-sm text-gray-700 mt-1">{caption}</p>
                                <ul
                                    className={clsx(
                                        "text-gray-600 mt-2 text-left rounded-2xl p-5 h-64  opacity-95",
                                        bgColor
                                    )}
                                >
                                    {reasons.map(({ point, description }) => (
                                        <li key={point + id} className="text-sm mb-2 tracking-wide">
                                            <strong className="">{point}: </strong>
                                            {description}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Partners */}
                <div className="container mb-24">
                    <h2 className="font-semibold text-6xl text-s6 max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
                        How it Works
                    </h2>
                    <div className="mt-6 mb-8 text-2xl">
                        <strong>Your Practice, Our Platform.</strong>
                        <span className="block">
                            Join our mission to bring Holistic Care to everyone. Grow your practice, reach new patients,
                            and offer your services through a secure, streamlined platform.
                        </span>

                        <Button
                            icon="/images/zap.svg"
                            containerClassName="bg-p4 w-72 m-6 mx-0"
                            textClassName="tracking-wide text-white"
                            onClick={() => {
                                setType("partner");
                                handleOpenModal();
                            }}
                        >
                            Become Our Partner
                        </Button>
                    </div>
                    <div className="flex flex-row items-start text-center gap-8">
                        {howItWorksPartners.map(
                            ({ id, icon, iconColor, textColor, bgColor, title, caption, reasons }) => (
                                <div className="basis-1/4" key={id}>
                                    <div className={clsx("p-7 rounded-full mb-4 inline-flex", iconColor)}>
                                        <img
                                            src={"/images/how-it-works/" + icon + ".svg"}
                                            alt="Explore Icon"
                                            className="w-16 h-16 mx-auto"
                                        />
                                    </div>
                                    <h3 className={clsx("text-lg font-semibold", textColor)}>{title}</h3>
                                    <p className="text-sm text-gray-700 mt-1">{caption}</p>
                                    <ul className={clsx("text-gray-600 mt-2 text-left rounded-2xl p-5 h-64 ", bgColor)}>
                                        {reasons.map(({ point, description }) => (
                                            <li key={point + id} className="text-sm mb-2 tracking-wide">
                                                <strong className="">{point}: </strong>
                                                {description}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default HowItWorks;
