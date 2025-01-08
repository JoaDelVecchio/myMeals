import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import MyMeals from "./pages/MyMeals";
import MealDetails from "./pages/MealDetails";

function App() {
  const [mealSearched, setMealSearched] = useState<string>("");

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header mealSearched={mealSearched} setMealSearched={setMealSearched} />
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home mealSearched={mealSearched} />} />
          <Route path="/mealDetails/:id" element={<MealDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/myMeals" element={<MyMeals />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
