import omelette from "../public/assets/images/image-omelette.jpeg";
function App() {
  return (
    <div className=" container mx-auto px-5 py-5 md:px-6 lg:px-32 xl:px-60 2xl:px-100">
      <div className="bg-white p-10">
        <img src={omelette} alt="" className="w-full rounded-lg" />
        <h1 className="font-youngSerif-400 text-primary-Stone-900 capitalize font-semibold pt-8 pb-4 text-2xl sm:text-4xl md:text-5xl">
          simple omelette recipe
        </h1>
        <p className="text-justify sm:text-xl md:text-2xl lg:text-3xl">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <div className="bg-primary-Rose-50 p-6 my-4 rounded-xl ">
          <h3 className="text-primary-Rose-800 font-outfit-700 mb sm:text-xl md:text-2xl lg:text-3xl">
            Preparation time
          </h3>
          <ul className="sm:text-xl md:text-2xl lg:text-3xl">
            {properations.map((item) => (
              <li key={item.id}>
                <span className=" text-primary-Stone-600 font-outfit-700">{`${item.title} : `}</span>{" "}
                {item.desc}
              </li>
            ))}
          </ul>
        </div>
        {/* ingredients */}
        <div className="my-4 border-b-[0.1px] py-4">
          <h2 className="sm:text-2xl md:text-4xl my-4">Ingredients</h2>
          <ul className="sm:text-xl md:text-2xl lg:text-3xl">
            {ingredients.map((item) => (
              <li key={item.id}>{item.desc}</li>
            ))}
          </ul>
        </div>
        {/* instructions */}
        <div className="my-4 border-b-[0.1px] py-4">
          <h2 className="sm:text-2xl md:text-4xl my-4">Instructions</h2>
          <ol
            className=" space-y-2 sm:text-xl md:text-2xl lg:text-3xl"
            style={{ marginLeft: "15px" }}
          >
            {instructions.map((item) => (
              <li key={item.id} style={{ lineHeight: 1.5 }}>
                <span className="mr-2 text-primary-Brown-800 font-outfit-700 text-xl">{`${item.id}.`}</span>
                <span className="mr-2 text-primary-Stone-600 font-outfit-700">{`${item.title}: `}</span>
                {item.desc}
              </li>
            ))}
          </ol>
        </div>
        {/* neutrition */}
        <div className="my-4 py-4">
          <h2 className="sm:text-2xl md:text-4xl my-4">Neutrition</h2>
          <p className="sm:text-xl md:text-2xl lg:text-3xl">
            The table below show neutrintonsl values per servings without the
            addintonal fillings.
          </p>
          <table className="w-full my-6 flex flex-col gap-2 sm:text-xl md:text-2xl lg:text-3xl">
            {neutrition.map((item) => (
              <tr
                key={item.id}
                className="border-b border-primary-stone-150 grid grid-cols-2 gap-6"
              >
                <td className="pl-18">{item.title}</td>
                <td className="text-primary-Brown-800 font-outfit-700">
                  {item.value}
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;

const properations = [
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
    id: 4,
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
  {id: 1, title: "Calories", value: "277Kcal"},
  {id: 2, title: "Carbs", value: "0g"},
  {id: 3, title: "Proten", value: "20g"},
  {id: 4, title: "Fat", value: "22g"},
]
