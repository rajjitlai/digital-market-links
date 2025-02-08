const Services = () => {
    return (
        <div className="container px-8 lg:px-16 pt-16 mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center">Services</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                    <h4 className="text-xl font-semibold mb-2">Service 1</h4>
                    <p className="text-gray-600">Description of the service goes here.</p>
                </div>

                <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                    <h4 className="text-xl font-semibold mb-2">Service 2</h4>
                    <p className="text-gray-600">Description of the service goes here.</p>
                </div>

                <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                    <h4 className="text-xl font-semibold mb-2">Service 3</h4>
                    <p className="text-gray-600">Description of the service goes here.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
