import axios, { AxiosError } from "axios";
import { Meal, FormData } from "../types/meal";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getMeals = async (): Promise<Meal[]> => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};

export const getMeal = async (id: string): Promise<any> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};

export const createMeal = async (formData: FormData): Promise<Meal> => {
  try {
    const response = await axios.post(API_BASE_URL, formData);
    return response.data.meal;
  } catch (error) {
    return handleAxiosError(error);
  }
};

const handleAxiosError = (error: unknown): never => {
  const axiosError = error as AxiosError<{ error: string }>;
  throw new Error(
    axiosError.response?.data?.error || "An unexpected error occurred"
  );
};
