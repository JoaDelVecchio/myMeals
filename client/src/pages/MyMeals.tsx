import { Meal as MealType } from "../types/meal";

import Meal from "../components/Meal";

const MyMeals = ({
  myMeals,
  handleAddToMyMeals,
}: {
  myMeals: MealType[];
  handleAddToMyMeals: (id: string) => void;
}) => {
  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-900 text-center">
        My Meals
      </h2>
      {myMeals.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {myMeals.map((meal) => (
            <Meal
              myMeals={myMeals}
              handleAddToMyMeals={handleAddToMyMeals}
              key={meal.idMeal}
              meal={meal}
            />
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          You haven't added meals to your plan yet.
        </p>
      )}
    </div>
  );
};

export default MyMeals;
