import { Element, Link as LinkScroll } from "react-scroll";
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
        <section className="relative pt-48 pb-40 mb-16 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <Newsletter type={type} />
            </Modal>
            <Element name="hero">
                <div className="container">
                    <div className="relative z-2 max-w-440 mr-12 max-lg:max-w-388">
                        {/* <div className="caption small-2 uppercase text-p3">Video Editing</div> */}
                        <h2 className="mb-6 font-semibold text-7xl text-p4 max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
                            Your health is in your hands
                        </h2>
                        <p className="max-w-440 mb-14 body-1 max-md:mb-10">
                            Connecting you with certified professionals to treat the whole you, finding the root cause
                            and guiding you to take back control of your health.
                        </p>
                        <LinkScroll to="features" offset={-100} spy smooth>
                            <Button
                                icon="/images/zap.svg"
                                containerClassName="block mb-6 bg-s6 w-72"
                                textClassName="tracking-wide text-xl"
                                onClick={() => {
                                    setType("client");
                                    handleOpenModal();
                                }}
                            >
                                Find My Health Partner
                            </Button>
                        </LinkScroll>
                        <LinkScroll to="features" offset={-100} spy smooth>
                            <Button
                                icon="/images/zap.svg"
                                containerClassName="bg-p4 w-72"
                                textClassName="text-white tracking-wide"
                                onClick={() => {
                                    setType("partner");
                                    handleOpenModal();
                                }}
                            >
                                Become Our Partner
                            </Button>
                        </LinkScroll>
                    </div>

                    <div className="absolute top-48 pt-2 left-[calc(50%-40px)] pointer-events-none hero-img_res max-w-550">
                        <img src="/images/hero.png" className="size-max max-lg:h-auto rounded-2xl" alt="hero" />
                        <div className="flex flex-row">
                            {reviews.map((review) => (
                                <div className="basis-1/2 mx-2" key={review.id}>
                                    <Review
                                        item={review}
                                        containerClassName="last:after:hidden last:after:max-md:block"
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
