// import omelette from "../public/assets/images/image-omelette.jpeg";
import React from "react";
import omelette from "../public/assets/images/image-omelette.jpeg";

const App = () => {
  return (
    <div className="container mx-auto sm:px-4 sm:pt-4 md:px-8 lg:px-10 xl:px-32 2xl:px-60 md:pt-8 lg:pt-10 md:mt-4">
      <div className="sm:p-4 sm:rounded-xl bg-white">
        {/* header */}
        <header className="pb-4">
          <img
            src={omelette}
            alt="omelette with ages and meate"
            className=" sm:rounded-md"
          />
          <div className="px-4 sm:px-0">
            <h1 className=" my-4 text-primary-Stone-400 font-youngSerif-400 text-2xl sm:text-3xl md:text-4xl font-black">
              Simple Omelette Recipe
            </h1>
            <p>
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
          </div>
        </header>

        <main className="px-4 sm:px-0">
          {/* preperation time section */}
          <section className="bg-primary-Rose-50 p-4 sm:p-6 md:p-8 rounded-md">
            <h2 className="text-primary-Rose-800 font-outfit text-md sm:text-xl md:text-2xl font-bold md:font-black mb-4">
              Preparation time
            </h2>
            <ul className=" ml-8 space-y-2">
              {preperations.map((item) => (
                <li key={item.id} className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary-Brown-800 inline-block mr-4"></span>
                  <span className="text-primary-Stone-600 font-bold sm:font-black mr-1">
                    {`${item.title}:`}{" "}
                  </span>
                  {item.desc}
                </li>
              ))}
            </ul>
          </section>

          {/* ingredients section */}
          <section className="py-8 border-b border-primary-stone-150">
            <h2 className="text-primary-Brown-800 font-outfit text-md sm:text-xl md:text-2xl font-bold md:font-black mb-4">
              Ingredients
            </h2>
            <ul className=" ml-8 space-y-2 auto-numbering">
              {ingredients.map((item) => (
                <li key={item.id} className="">
                  {/* <span className="text-primary-Brown-800 inline-block mr-4 font-bold sm:font-black">{`${item.id}. `}</span> */}
                  {item.desc}
                </li>
              ))}
            </ul>
          </section>

          {/* instructions section */}
          <section className="py-8 border-b border-primary-stone-150">
            <h2 className="text-primary-Brown-800 font-outfit text-md sm:text-xl md:text-2xl font-bold md:font-black mb-4">
              Instructions
            </h2>
            <ol className=" ml-8 space-y-2 auto-numbering">
              {instructions.map((item) => (
                <li key={item.id}>
                  <span className="text-primary-Stone-600 font-bold sm:font-black mr-1">{`${item.title}: `}</span>
                  {item.desc}
                </li>
              ))}
            </ol>
          </section>

          {/* neutrition section */}
          <section className="py-8">
            <h2 className="text-primary-Brown-800 font-outfit text-md sm:text-xl md:text-2xl font-bold md:font-black mb-4">
              Neutrition
            </h2>
            <p className="mb-4">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <table className="w-full sm:w-4/5 md:5/6 lg:h-9/12 mx-auto space-y-2">
              <tbody>
                {neutrition.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-primary-stone-150 grid grid-cols-2 px-12 gap-x-8 py-1 sm:py-2"
                  >
                    <td>{item.title}</td>
                    <td className="text-primary-Brown-800 font-outfit font-bold">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;

const preperations = [
  { id: 1, title: "Total", desc: "Approximately 10 minutes" },
  { id: 2, title: "Preparation", desc: "5 minutes" },
  { id: 3, title: "Cooking", desc: "5 minutes" },
];

const ingredients = [
  { id: 1, desc: "2-3 large eggs" },
  { id: 2, desc: "Salt, to taste" },
  { id: 3, desc: "Pepper, to taste" },
  { id: 4, desc: "1 tablespoon of butter or oil" },
  {
    id: 5,
    desc: "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  },
];

const instructions = [
  {
    id: 1,
    title: "Beat the eggs",
    desc: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. ",
  },
  {
    id: 2,
    title: "Heat the pan",
    desc: "Place a non-stick frying pan over medium heat and add butter or oil.",
  },
  {
    id: 3,
    title: "Cook the omelette",
    desc: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure  the eggs evenly coat the surface.",
  },
  {
    id: 4,
    title: "Add fillings (optional)",
    desc: "When the eggs begin to set at the edges but are still slightly runny in the  middle, sprinkle your chosen fillings over one half of the omelette.",
  },
  {
    id: 5,
    title: "Fold and serve",
    desc: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
  },
  {
    id: 6,
    title: "Enjoy",
    desc: "Serve hot, with additional salt and pepper if needed.",
  },
];

const neutrition = [
  { id: 1, title: "Calories", value: "277Kcal" },
  { id: 2, title: "Carbs", value: "0g" },
  { id: 3, title: "Proten", value: "20g" },
  { id: 4, title: "Fat", value: "22g" },
];
