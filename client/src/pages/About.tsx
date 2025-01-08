import proteinMeals from "../assets/proteinMeals.jpg";
import proteinFood from "../assets/proteinFood.jpeg";
import mealPlanning from "../assets/mealPlanning.jpeg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-12">
          About ProteinPlates
        </h1>

        {/* Hero Image */}
        <div className="mb-12">
          <img
            src={proteinFood}
            alt="High-protein meal"
            className="w-full h-[350px] object-cover rounded-lg shadow-lg"
          />
        </div>

        <p className="text-lg text-gray-700 leading-relaxed mb-10 px-4">
          Welcome to{" "}
          <span className="font-bold text-gray-900">ProteinPlates</span>, the
          ultimate destination for fitness enthusiasts and anyone seeking
          high-protein meals to fuel their journey toward health and strength.
          At ProteinPlates, we believe that nutrition is a cornerstone of
          discipline, success, and achieving the dream lifestyle.
        </p>

        {/* Section: Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="flex flex-col items-center">
            <img
              src={proteinMeals}
              alt="Healthy meals"
              className="w-32 h-32 object-cover rounded-full shadow-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900">Healthy Meals</h3>
            <p className="text-gray-700 mt-2 px-4">
              Explore a variety of delicious, protein-packed recipes crafted to
              support your fitness goals.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={mealPlanning}
              alt="Customizable options"
              className="w-32 h-32 object-cover rounded-full shadow-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900">
              Customizable Options
            </h3>
            <p className="text-gray-700 mt-2 px-4">
              Tailor meals to suit your dietary preferences and keep your
              nutrition on track.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Fuel Your Fitness Journey
          </h3>
          <p className="text-gray-700 mb-6">
            Join the ProteinPlates community and redefine what it means to eat
            well while working toward your goals.
          </p>
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600"
          >
            Explore Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
