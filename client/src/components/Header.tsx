import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import CustomMealForm from "./CustomMealForm";
import { Meal } from "../types/meal";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import { createMeal } from "../api/api";

const Header = ({
  mealSearched,
  setMealSearched,
  setMeals,
}: {
  setMeals: React.Dispatch<React.SetStateAction<Meal[]>>;
  mealSearched: string;
  setMealSearched: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    strMeal: "",
    strMealThumb: "",
  });

  const handleMealSearched = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setMealSearched(e.target.value);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const newMeal = await createMeal(formData);
      console.log(newMeal);
      setMeals((prevMeals: Meal[]) => [...prevMeals, newMeal]);
      alert("Meal created successfully!");
      setFormData({ strMeal: "", strMealThumb: "" });
      setIsFormOpen(false);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <header className="bg-gray-100 text-gray-800 p-4 md:p-6">
      {/* Top Row: Logo, Search Input, and Navigation */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-3">
          <img src={Logo} alt="ProteinPlates Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold">ProteinPlates</h1>
        </NavLink>

        {/* Search Input */}
        <div className="flex-grow flex justify-center my-4 md:my-0 md:ml-8">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              name="mealSearched"
              placeholder="What do you want to eat?"
              value={mealSearched}
              onChange={(e) => handleMealSearched(e)}
              className="w-full p-2 pl-10 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
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
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-4">
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
      </div>

      {/* Bottom Row: Create My Meal Button */}
      <div className="flex justify-center items-center mt-4 max-w-6xl mx-auto">
        <button
          onClick={() => setIsFormOpen(true)}
          className="w-48 bg-blue-500 text-white px-4 py-2 rounded-md transform hover:scale-105 duration-300 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Create My Meal
        </button>
      </div>

      {/* Modal Form */}
      {isFormOpen && (
        <CustomMealForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
          setIsFormOpen={setIsFormOpen}
        />
      )}
    </header>
  );
};

export default Header;
