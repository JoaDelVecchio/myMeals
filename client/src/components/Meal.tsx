import { NavLink } from "react-router-dom";
import { Meal as MealType } from "../types/meal";

const Meal = ({ meal }: { meal: MealType }) => {
  return (
    <li
      className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl hover:bg-gray-50 transform
      hover:scale-105
      transition-transform
      duration-300 "
    >
      <NavLink
        to="idMeal"
        className={({ isActive }) =>
          `text-gray-800 hover:text-blue-400 ${
            isActive ? "hover:text-blue-500" : ""
          }`
        }
      >
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold truncate">{meal.strMeal}</h3>
          <p>Click to see how to make it</p>
        </div>
      </NavLink>
    </li>
  );
};

export default Meal;
