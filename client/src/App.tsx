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
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [mealSearched, setMealSearched] = useState<string>("");

  // Pass states to the hook to fetch meals
  useFetchMeals({ setMeals, setError, setLoading });

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header mealSearched={mealSearched} setMealSearched={setMealSearched} />
      <main className="p-6">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                mealSearched={mealSearched}
                meals={meals}
                error={error}
                loading={loading}
              />
            }
          />
          <Route path="/mealDetails/:id" element={<MealDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/myMeals" element={<MyMeals />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
