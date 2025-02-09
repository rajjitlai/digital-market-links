/* eslint-disable react/prop-types */
const Slide = ({ img }) => {
    return (
        <div className="outline-none border-none relative w-full">
            <div className="relative w-full overflow-hidden rounded">
                <img
                    src={img}
                    alt="banner"
                    className="w-full h-auto object-contain sm:object-cover md:object-cover"
                />
            </div>
        </div>
    );
};

export default Slide;
