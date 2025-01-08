import React from "react";

const CustomMealForm = ({
  formData,
  handleInputChange,
  handleFormSubmit,
  setIsFormOpen,
}: {
  formData: { strMeal: string; strMealThumb: string };
  handleInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  handleFormSubmit: React.FormEventHandler;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Create Your Custom Meal
        </h2>
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-8">
          {/* Meal Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Meal Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="strMeal"
              value={formData.strMeal}
              onChange={handleInputChange}
              placeholder="Enter the meal's name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
            <small className="text-gray-500">E.g., Spaghetti Bolognese</small>
          </div>

          {/* Thumbnail URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Thumbnail URL <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              name="strMealThumb"
              value={formData.strMealThumb}
              onChange={handleInputChange}
              placeholder="Enter a URL for the meal's image"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
            <small className="text-gray-500">
              E.g., https://example.com/image.jpg
            </small>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              onClick={() => setIsFormOpen(false)}
              className="w-1/4 bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-2/4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Save Meal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomMealForm;
