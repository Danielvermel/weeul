import clsx from "clsx";
import { Marker } from "./Marker.jsx";

const Button = ({ icon, children, href, containerClassName, textClassName, onClick, markerFill }) => {
    const Inner = () => (
        <>
            <span
                className={clsx(
                    "relative flex justify-center items-center min-h-[42px] px-4 rounded-2xl",
                    textClassName
                )}
            >
                <span className={clsx("relative z-2", textClassName)}>{children}</span>
            </span>
        </>
    );
    return href ? (
        <a className={clsx("relative rounded-2xl", containerClassName)} href={href}>
            <Inner />
        </a>
    ) : (
        <button className={clsx("relative rounded-2xl", containerClassName)} onClick={onClick}>
            <Inner />
        </button>
    );
};
export default Button;
