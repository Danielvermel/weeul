import { Element } from "react-scroll";
import { causes } from "../constants/index.jsx";
import Button from "../components/Button.jsx";

const Cause = () => {
    return (
        <section className="bg-white ">
            <Element name="About Us" className="pt-24 max-lg:pb-24 max-md:py-16 container">
                <div className="flex flex-col">
                    <h1 className="text-center mx-auto text-p4 h4">{causes.title}</h1>
                    <p className="text-center mx-48 font-light mt-6 text-lg leading-8"> {causes.description}</p>

                    <div className="mt-12 flex-row flex flex-wrap justify-center mx-32">
                        {causes.points.map(({ id, icon, text }) => (
                            <div key={`cause_` + id} className="items-center basis-1/2  flex flex-row gap-3 my-4">
                                <img src={`/images/causes/${icon}`} alt={text} className="w-12 h-12" />
                                <p className="text-p4 font-semibold">{text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center mt-14 gap-4">
                        <Button
                            containerClassName="bg-p4 w-1/3 tracking-wide justify-center h-12"
                            textClassName="text-white"
                        >
                            {causes.buttonText}
                        </Button>
                        <img src="/images/causes/arrow-down.svg" />
                    </div>
                </div>
            </Element>
        </section>
    );
};
export default Cause;
