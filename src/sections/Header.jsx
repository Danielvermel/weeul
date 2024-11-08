import { Link as LinkScroll } from "react-scroll";
import { menus } from "../constants/index.jsx";
import { useEffect, useState } from "react";
import Button from "../components/Button.jsx";
import clsx from "clsx";

const Header = () => {
    const [progress, setProgress] = useState(0);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolling, setScrolling] = useState(false);

    // Update the Progress Bar based on scroll position
    useEffect(() => {
        let timeoutId;

        const handleScroll = () => {
            setScrolling(true); // User is scrolling

            // Clear the timeout if it's already set
            clearTimeout(timeoutId);

            // Set timeout to detect when user stops scrolling
            timeoutId = setTimeout(() => {
                setScrolling(false); // Mark as stopped after 200ms
            }, 200);

            setHasScrolled(window.scrollY > 32);

            const section = document.querySelector("#about-us");
            const scrolled = (window.scrollY / section.offsetTop) * 100;

            setProgress(Math.min(scrolled, 100));
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const NavLink = ({ title }) => (
        <LinkScroll
            onClick={() => setIsOpen(false)}
            to={title}
            offset={-100}
            spy
            smooth
            activeClass="nav-active"
            className="base-bold text-p4 transition-colors duration-500 cursor-pointer hover:text-s6 max-lg:my-4 max-lg:h5"
        >
            {title}
        </LinkScroll>
    );

    return (
        <header
            className={clsx(
                "fixed bg-s1 top-0 left-0 z-20 w-full py-10 transition-all duration-500 max-lg:py-4",
                hasScrolled && "py-2 backdrop-blur-[24px] shadow-box"
            )}
        >
            <div className="container flex h-14 items-center max-lg:px-5">
                <a className="lg:hidden flex-1 cursor-pointer z-2">
                    <img src="/images/xora.svg" width={115} height={55} alt="logo" />
                </a>

                <div
                    className={clsx(
                        "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
                        isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
                    )}
                >
                    <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
                        <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
                            <ul className="flex max-lg:block max-lg:px-12">
                                <li className="nav-logo">
                                    <LinkScroll
                                        to="hero"
                                        offset={-250}
                                        spy
                                        smooth
                                        className={clsx(
                                            "max-lg:hidden transition-transform duration-500 cursor-pointer"
                                        )}
                                    >
                                        <img src="/images/healix.svg" width={160} height={55} alt="logo" />
                                    </LinkScroll>
                                </li>
                                {menus.map(({ id, title }) => (
                                    <>
                                        <li className="nav-li" key={`menu_` + id}>
                                            <NavLink title={title} />
                                        </li>
                                    </>
                                ))}

                                <li className="nav-li">
                                    <Button
                                        containerClassName="bg-s6  m-6 mx-0"
                                        textClassName="tracking-wide font-bold"
                                        onClick={() => {
                                            setType("client");
                                            handleOpenModal();
                                        }}
                                    >
                                        Join Us
                                    </Button>
                                </li>
                            </ul>
                        </nav>

                        <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
                            <img
                                src="/images/bg-outlines.svg"
                                width={960}
                                height={380}
                                alt="outline"
                                className="relative z-2"
                            />
                            <img
                                src="/images/bg-outlines-fill.png"
                                width={960}
                                height={380}
                                alt="outline"
                                className="absolute inset-0 mix-blend-soft-light opacity-5"
                            />
                        </div>
                    </div>
                </div>

                <button
                    className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
                    onClick={() => setIsOpen((prevState) => !prevState)}
                >
                    <img
                        src={"/images/" + isOpen ? "close" : "magic" + ".svg"}
                        alt="magic"
                        className="size-1/2 object-contain"
                    />
                </button>
            </div>
            <div Name="relative">
                <div className="bg-s6 h-1 absolute mt-2" id="progressBar" style={{ width: `${progress}%` }}></div>
            </div>
        </header>
    );
};

export default Header;
