import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMeal } from "../api/api";
import ErrorMessage from "../components/ErrorMessage";

const MealDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [meal, setMeal] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        if (!id) {
          throw new Error("Invalid meal ID.");
        }
        const mealFound = await getMeal(id);
        setMeal(mealFound.meal[0]);
      } catch (error) {
        setError((error as Error).message || "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchMeal();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorMessage message={error} />;
  if (!meal) return <p>No meal found.</p>;
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{meal.strMeal}</h1>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <p className="text-gray-700">{meal.strInstructions}</p>
    </div>
  );
};

export default MealDetails;
