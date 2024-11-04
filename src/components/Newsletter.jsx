import React, { useState } from "react";
import Button from "../components/Button.jsx";
import { clientNewsletter, partnerNewsletter } from "../constants/index.jsx";
import { CheckIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

const Newsletter = ({ type, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subscribe: false,
    });

    const data = type === "client" ? clientNewsletter : partnerNewsletter;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log("Form Data:", formData);
    };

    return (
        <div className={clsx("container relative py-6 px-6 gap-6 inset-0 my-20", data.bgColor)}>
            <button
                className="absolute top-3 right-5 text-gray-500 hover:text-gray-700 z-50 text-2xl"
                onClick={onClose}
            >
                ✕
            </button>
            <div className="flex">
                <div className="basis-1/2">
                    <h2 className="h3">{data.title}</h2>
                    <p className="text-xl mt-4">{data.description}</p>
                    <form onSubmit={handleSubmit} className="bg-peach-300 p-6 pb-0 rounded-md space-y-4">
                        <div className="flex items-center gap-2  w-3/4">
                            <label htmlFor="name" className="text-black font-medium w-1/4">
                                Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 rounded-lg bg-white text-black"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="flex items-center gap-2  w-3/4">
                            <label htmlFor="email" className="text-black font-medium w-1/4">
                                E-mail:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 rounded-lg bg-white text-black"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="subscribe"
                                name="subscribe"
                                checked={formData.subscribe}
                                onChange={handleChange}
                                className="custom-checkbox"
                            />
                            <label htmlFor="subscribe" className="text-black text-sm">
                                {data.tick}
                            </label>
                        </div>
                    </form>

                    <div className="flex mb-4">
                        <Button
                            icon=""
                            containerClassName="bg-p4 w-72 m-6 mx-auto justify-center"
                            textClassName="tracking-wide text-white"
                        >
                            Get Early Access
                        </Button>
                    </div>

                    <div>
                        <h6 className="font-semibold">What You Get:</h6>
                        <ul className="pl-0">
                            {data.get.map(({ id, desc }) => (
                                <li key={id}>
                                    <CheckIcon className="size-7 font-bold inline mr-2" />
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="basis-1/2">
                    <img src="/images/newsletter/people.png" />

                    <div className="flex flex-row mt-8 justify-end">
                        <img src="/images/social/instagram.svg" className="ml-8 max-h-8" />
                        <img src="/images/social/facebook.svg" className="ml-8 max-h-8" />
                        <img src="/images/social/twitter.svg" className="ml-8 max-h-8" />
                        <img src="/images/social/email.svg" className="ml-8 mr-20 max-h-8" />
                    </div>

                    <div className="mt-12 flex justify-end mr-20">
                        <img src="/images/newsletter/logo-icon.png" className="inline mr-3 max-h-20" />
                        <img src="/images/healix.svg" className="inline max-h-20" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
