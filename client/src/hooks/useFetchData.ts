// /hooks/useFetchData.ts
import { useEffect } from "react";
import { getMeals } from "../api/api";
import { Meal } from "../types/meal";

export const useFetchData = ({
  setMeals,
  setError,
  setLoading,
}: {
  setMeals: React.Dispatch<React.SetStateAction<Meal[]>>;
  setError: React.Dispatch<React.SetStateAction<string | null | undefined>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const meals = await getMeals();
        setMeals(meals);
        setError(null); // Clear any previous errors
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, [setMeals, setError, setLoading]);
};
