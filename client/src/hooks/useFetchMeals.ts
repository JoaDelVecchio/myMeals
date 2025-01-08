import { useEffect } from "react";
import { getMeals } from "../api/api";
import { Meal } from "../types/meal";

export const useFetchMeals = ({
  setMeals,
  setError,
  setLoading,
}: {
  setMeals: React.Dispatch<React.SetStateAction<Meal[]>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const fetchedMeals = await getMeals();
        setMeals(fetchedMeals);
        setError(null); // Clear any previous errors
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, [setMeals, setError, setLoading]); // Add setters as dependencies
};
