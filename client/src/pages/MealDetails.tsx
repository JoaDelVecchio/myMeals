import { useParams } from "react-router-dom";
import useFetchMeal from "../hooks/useFetchMeal";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";

const MealDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { meal, error, loading } = useFetchMeal(id);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!meal) return <ErrorMessage message="No meal found" />;

  // Extract ingredients and measures
  const ingredients = Array.from({ length: 20 }, (_, i) => ({
    ingredient: meal[`strIngredient${i + 1}`],
    measure: meal[`strMeasure${i + 1}`],
  })).filter((item) => item.ingredient && item.ingredient.trim() !== "");

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6">
        {/* Meal Title */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
          {meal.strMeal}
        </h1>

        {/* Meal Image */}
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-80 object-cover rounded-lg shadow-md mb-6"
        />

        {/* Meal Information */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-700 font-semibold">
            <span className="text-gray-900">Category:</span> {meal.strCategory}
          </p>
          <p className="text-gray-700 font-semibold">
            <span className="text-gray-900">Area:</span> {meal.strArea}
          </p>
        </div>

        {/* Ingredients Section */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredients</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {ingredients.map((item, index) => (
            <li
              key={index}
              className="flex items-center bg-gray-100 p-3 rounded-lg shadow-sm"
            >
              <span className="font-semibold text-gray-900">
                {item.measure}:
              </span>
              <span className="ml-2 text-gray-700">{item.ingredient}</span>
            </li>
          ))}
        </ul>

        {/* Instructions Section */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Instructions</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          {meal.strInstructions}
        </p>

        {/* External Links */}
        <div className="flex justify-between">
          {meal.strYoutube && (
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
            >
              Watch on YouTube
            </a>
          )}
          {meal.strSource && (
            <a
              href={meal.strSource}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
            >
              View Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
