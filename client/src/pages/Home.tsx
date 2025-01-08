import { Meal as MealType } from "../types/meal";
import Meal from "../components/Meal";
import { useFetchData } from "../hooks/useFetchData";
import ErrorMessage from "../components/ErrorMessage";
import { useState } from "react";
import Loading from "../components/Loading";

const Home = ({ mealSearched }: { mealSearched: string }) => {
  const [meals, setMeals] = useState<MealType[]>([]);
  const [error, setError] = useState<string | null | undefined>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useFetchData({ setMeals, setError, setLoading });

  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(mealSearched.toLowerCase())
  );

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-900 text-center">
        Available Meals
      </h2>
      {filteredMeals.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredMeals.map((meal) => (
            <Meal key={meal.idMeal} meal={meal} />
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          No meals found. Try searching for something else!
        </p>
      )}
    </div>
  );
};

export default Home;
