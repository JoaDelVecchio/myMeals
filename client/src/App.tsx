import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import MyMeals from "./pages/MyMeals";
import MealDetails from "./pages/MealDetails";
import { useFetchMeals } from "./hooks/useFetchMeals";
import { Meal } from "./types/meal";

function App() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [myMeals, setMyMeals] = useState<Meal[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [mealSearched, setMealSearched] = useState<string>("");

  // Pass states to the hook to fetch meals
  useFetchMeals({ setMeals, setError, setLoading });

  const handleAddToMyMeals = (id: string): void => {
    const myMeal = meals.find((meal) => meal.idMeal === id);

    if (!myMeal) {
      console.error(`Meal with id ${id} does not exist`);
      setError(`Error adding meal, try again later!`);
      return;
    }

    const isMyMeal = myMeals.some((meal) => meal.idMeal === myMeal.idMeal);
    setMyMeals((prevMeals) =>
      isMyMeal
        ? prevMeals.filter((meal) => meal !== myMeal)
        : [...prevMeals, myMeal]
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header mealSearched={mealSearched} setMealSearched={setMealSearched} />
      <main className="p-6">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                myMeals={myMeals}
                mealSearched={mealSearched}
                meals={meals}
                error={error}
                loading={loading}
                handleAddToMyMeals={handleAddToMyMeals}
              />
            }
          />
          <Route path="/mealDetails/:id" element={<MealDetails />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/myMeals"
            element={
              <MyMeals
                handleAddToMyMeals={handleAddToMyMeals}
                myMeals={myMeals}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
