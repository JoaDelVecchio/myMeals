import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Header = ({
  mealSearched,
  setMealSearched,
}: {
  mealSearched: string;
  setMealSearched: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleMealSearched = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setMealSearched(e.target.value);
  };

  return (
    <header className="flex justify-between items-center bg-gray-100 text-gray-800 p-4 md:p-6">
      <Link to="/" className="flex items-center space-x-3">
        <img src={Logo} alt="ProteinPlates Logo" className="w-10 h-10" />
        <h1 className="text-2xl font-bold">ProteinPlates</h1>
      </Link>

      {/* Search Input */}
      <div className="relative w-64">
        <input
          type="text"
          name="mealSearched"
          placeholder="What do you want to eat?"
          value={mealSearched}
          onChange={(e) => handleMealSearched(e)}
          className="w-full p-2 pl-10 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16l-4 4m0 0l4-4m-4 4h16M8 8l4-4m0 0l-4 4m4-4H4"
          />
        </svg>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-blue-400 ${
                  isActive ? "text-blue-500 font-semibold" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-blue-400 ${
                  isActive ? "text-blue-500 font-semibold" : ""
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myMeals"
              className={({ isActive }) =>
                `hover:text-blue-400 ${
                  isActive ? "text-blue-500 font-semibold" : ""
                }`
              }
            >
              My Meals
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
