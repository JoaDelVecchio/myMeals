import { Link } from "react-router-dom";
import { Meal as MealInterface } from "../types/meal";

const Meal = ({
  meal,
  handleAddToMyMeals,
  myMeals,
}: {
  meal: MealInterface;
  myMeals: MealInterface[];
  handleAddToMyMeals: (id: string) => void;
}) => {
  const isMyMeal = myMeals.some((elem) => elem.idMeal === meal.idMeal);
  return (
    <li className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl hover:bg-gray-50 transform hover:scale-105 transition-transform duration-300">
      <div>
        <Link
          to={`/mealDetails/${meal.idMeal}`}
          className="text-gray-800 hover:text-blue-400"
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
        </Link>
        <div className="p-4">
          <button
            onClick={() => handleAddToMyMeals(meal.idMeal)}
            className="bg-blue-500 text-white px-2 py-1 rounded-md shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            {isMyMeal ? "Remove from my meals" : "Add to my meals"}
          </button>
        </div>
      </div>
    </li>
  );
};

export default Meal;
