import clsx from "clsx";

const Review = ({ item, containerClassName }) => {
    return (
        <div className={clsx("mt-6", containerClassName)}>
            <blockquote className="text-sm mb-4 text-p4">"{item.comment}"</blockquote>

            <div className="flex items-center max-xl:-mr-8">
                <div className="mr-4 size-14 shrink-0 rounded-half border-2 border-s2 p-1">
                    <img src={item.avatarUrl} alt={item.name} className="size-full object-cover" />
                </div>
                <div>
                    <h4 className="body-2 mb-0.5 text-p4">{item.name}</h4>
                    <p className="small-compact uppercase text-s3">{item.role}</p>
                </div>
            </div>
        </div>
    );
};
export default Review;
