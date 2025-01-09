export interface FormData {
  strMeal: string; // Meal name
  strMealThumb: string; // URL of the meal thumbnail
}

export interface Meal extends FormData {
  idMeal: string; // Unique identifier for the meal
}
