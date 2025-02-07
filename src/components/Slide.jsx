// eslint-disable-next-line react/prop-types
const Slide = ({ img, title, mainTitle, price }) => {
    return (
        <div className="outline-none border-none relative w-full max-w-[1200px] mx-auto">
            {/* Image Wrapper with Dark Overlay */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded">
                {/* Image */}
                <img
                    src={img}
                    alt="banner"
                    className="w-full h-full object-cover"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            {/* Text Content */}
            <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-transparent p-4 sm:p-0 rounded sm:rounded-none">
                <h3 className="text-white text-[24px] lg:text-[28px]">{title}</h3>
                <h2 className="text-white text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">{mainTitle}</h2>
                <h3 className="text-[24px] text-gray-300">
                    Starting at <b className="text-white text-[20px] md:text-[24px] lg:text-[30px]">{price}</b>.00
                </h3>
            </div>
        </div>
    );
};

export default Slide;
