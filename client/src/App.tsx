import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import MyMeals from "./pages/MyMeals";
import ErrorMessage from "./components/ErrorMessage";
import Loading from "./components/Loading";
import { Meal } from "./types/meal";
import { useFetchData } from "./hooks/useFetchData";

function App() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [error, setError] = useState<string | null | undefined>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [mealSearched, setMealSearched] = useState<string>("");

  useFetchData({ setMeals, setError, setLoading });
  return loading ? (
    <Loading />
  ) : (
    <div className="bg-gray-100 min-h-screen">
      <Header mealSearched={mealSearched} setMealSearched={setMealSearched} />
      <main className="p-6">
        {error && <ErrorMessage message={error} />}
        <Routes>
          <Route path="/" element={<Home meals={meals} />} />
          <Route path="/about" element={<About />} />
          <Route path="/myMeals" element={<MyMeals />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
