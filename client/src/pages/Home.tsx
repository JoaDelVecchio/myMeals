import { Meal } from "../types/meal";
const Home = ({ meals }: { meals: Meal[] }) => {
  return (
    <div>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <p>{meal.strMeal}</p>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
