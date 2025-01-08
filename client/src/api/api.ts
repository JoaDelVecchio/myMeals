// /api/api.ts
import axios, { AxiosError } from "axios";
import { Meal } from "../types/meal";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const getMeals = async (): Promise<Meal[]> => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data; // Return the data
  } catch (error) {
    const axiosError = error as AxiosError<{ error: string }>;
    console.error(
      `There was an error fetching data from ${API_BASE_URL}`,
      axiosError.response?.data?.error
    );
    throw new Error(
      axiosError.response?.data?.error || "An unexpected error occurred"
    ); // Throw an error with the message
  }
};

export const getMeal = async (id: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data; // Return the data
  } catch (error) {
    const axiosError = error as AxiosError<{ error: string }>;
    console.error(
      `There was an error fetching data from ${API_BASE_URL}/${id}`,
      error
    );
    throw new Error(
      axiosError.response?.data?.error || "An unexpected error occurred"
    ); // Throw an error with the message
  }
};

export const createMeal = async (formData: any) => {
  try {
    const response = await axios.post(API_BASE_URL, formData);
    const data = response.data.meal;
    return data;
  } catch (error) {
    const axiosError = error as AxiosError<{ error: string }>;
    console.error(`There was an error creating a new meal `, error);
    throw new Error(
      axiosError.response?.data?.error || "An unexpected error ocurred"
    );
  }
};
