import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import MyMeals from "./pages/MyMeals";

function App() {
  const [mealSearched, setMealSearched] = useState<string>("");
  return (
    <div>
      <Header mealSearched={mealSearched} setMealSearched={setMealSearched} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mymeals" element={<MyMeals />} />
      </Routes>
    </div>
  );
}
export default App;
