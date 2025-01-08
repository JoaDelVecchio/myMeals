import { useEffect, useState } from "react";
import { getMeal } from "../api/api";

const useFetchMeal = (id: string | undefined) => {
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

  return { meal, error, loading };
};

export default useFetchMeal;
