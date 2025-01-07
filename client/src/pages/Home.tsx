import { Meal } from "../types/meal";

const Home = ({ meals }: { meals: Meal[] }) => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Available Meals</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {meal.strMeal}
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
