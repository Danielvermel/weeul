import { Element } from "react-scroll";
import Button from "../components/Button.jsx";
import React, { useState } from "react";
import Review from "../components/Review.jsx";
import { reviews } from "../constants/index.jsx";
import Modal from "../components/Modal.jsx";
import Newsletter from "../components/Newsletter.jsx";

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [type, setType] = useState("client");

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <section className="relative h-lvh pt-48 pb-40 mb-16 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <Newsletter type={type} />
            </Modal>
            <Element name="hero">
                <div className="container">
                    <div className="relative z-2 max-w-440 mr-12 max-lg:max-w-388 ">
                        {/* <div className="caption small-2 uppercase text-p3">Video Editing</div> */}
                        <h2 className="mb-10 font-semibold text-6xl text-p4 max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
                            Your health is in your hands
                        </h2>
                        <p className="max-w-440 mb-20 body-1 max-md:mb-10">
                            Connecting you with certified professionals to treat the whole you, finding the root cause
                            and guiding you to take back control of your health.
                        </p>

                        <div className="flex items-center justify-center flex-col gap-10">
                            <Button
                                containerClassName="bg-s6 w-96 h-12"
                                textClassName="tracking-wide text-2xl font-semibold"
                                onClick={() => {
                                    setType("client");
                                    handleOpenModal();
                                }}
                            >
                                Find My Health Partner
                            </Button>

                            <Button
                                containerClassName="bg-p4 w-96 h-12"
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

                    <div className="absolute top-48 pt-2 left-[calc(50%-0px)] pointer-events-none hero-img_res max-w-550">
                        <img src="/images/hero.png" className="size-max max-lg:h-auto rounded-2xl" alt="hero" />
                        <div className="flex flex-row">
                            {reviews.map((review) => (
                                <div className="basis-1/2 mx-2" key={review.id}>
                                    <Review
                                        item={review}
                                        containerClassName="last:after:hidden last:after:max-md:block italic"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Hero;
