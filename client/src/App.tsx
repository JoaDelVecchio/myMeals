//React packages
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

//Components
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import MyMeals from "./pages/MyMeals";

//Types
import { Meal } from "./types/meal";

//Hooks
import { useFetchData } from "./hooks/useFetchData";

//App
function App() {
  //Store data fetched
  const [meals, setMeals] = useState<Meal[]>([]);
  const [error, setError] = useState<string | null | undefined>(null);
  const [loading, setLoading] = useState<boolean>(true);

  //Store meal searched by the user
  const [mealSearched, setMealSearched] = useState<string>("");
  useFetchData({ setMeals, setError, setLoading });

  return loading ? (
    <div>Loading</div>
  ) : (
    <div>
      <Header mealSearched={mealSearched} setMealSearched={setMealSearched} />
      {error && <div>{error}</div>}
      <Routes>
        <Route path="/" element={<Home meals={meals} />} />
        <Route path="/about" element={<About />} />
        <Route path="/mymeals" element={<MyMeals />} />
      </Routes>
    </div>
  );
}
export default App;
