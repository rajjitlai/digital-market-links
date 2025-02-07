import { navOther } from "../constants";

// eslint-disable-next-line react/prop-types
const Navbar = ({ setFilter }) => {
  return (
    <div className="hidden lg:block mt-16">
      <div className="container px-16">
        <div className="flex w-fit gap-10 mx-auto font-medium text-lg py-4 text-black items-center">
          {/* Category Buttons */}
          <button
            onClick={() => setFilter("All")}
            className="hover:text-primary hover:underline uppercase"
          >
            All
          </button>
          <button
            onClick={() => setFilter("Hot")}
            className="hover:text-primary hover:underline uppercase"
          >
            Hot
          </button>
          <button
            onClick={() => setFilter("Health")}
            className="hover:text-primary hover:underline uppercase"
          >
            Health
          </button>
          <button
            onClick={() => setFilter("Pets")}
            className="hover:text-primary hover:underline uppercase"
          >
            Pets
          </button>
          <button
            onClick={() => setFilter("Men")}
            className="hover:text-primary hover:underline uppercase"
          >
            Men
          </button>
          <button
            onClick={() => setFilter("Women")}
            className="hover:text-primary hover:underline uppercase"
          >
            Women
          </button>

          {/* navOther Buttons */}
          {navOther.map((other) => (
            <button
              key={other.label}
              onClick={() => setFilter(other.label)}
              className="uppercase px-4 p-2 bg-primary text-white hover:bg-secondary hover:text-gray-200"
            >
              {other.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
