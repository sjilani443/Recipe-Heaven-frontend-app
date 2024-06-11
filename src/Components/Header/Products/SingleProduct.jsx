import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CategoryWrapper from "../../../Pages/Categories/CategoryWrapper";

function SingleProduct() {
  const item = useLoaderData();
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  console.log("Loaded Item:", item);

  // Function to extract numeric value from a string
  const parseTime = (timeString) => {
    if (!timeString) {
      return 0;
    }
    const match = timeString.match(/\d+/);
    console.log("Parsed Time Match:", match);
    return match ? parseInt(match[0], 10) : 0;
  };
  const selectedIndex = 0; 

  // Ensure item.more is an array and contains the necessary properties
  const moreArray = item.more || [];
  const selectedMore = moreArray[selectedIndex] || {};
  const prepTimeStr = selectedMore.prep_time || "";
  const cookTimeStr = selectedMore.cook_time || "";

  // Log the time strings for debugging
  console.log("Preparation Time String:", prepTimeStr);
  console.log("Cooking Time String:", cookTimeStr);

  const prepTime = parseTime(prepTimeStr);
  const cookTime = parseTime(cookTimeStr);
  const totalTime = prepTime + cookTime;

  // Log parsed time values
  console.log("Parsed Preparation Time:", prepTime);
  console.log("Parsed Cooking Time:", cookTime);
  console.log("Total Time:", totalTime);

  return (
    <>
    <CategoryWrapper/>
    <h1 className="text-4xl mt-16 text-secondary text-center">Try This Recipe!!</h1>
    <h3 className="text-4xl mt-8 text-secondary text-center"> Simply follow the instructions and Bon Appétit!</h3>
    <section className="min-h-dvh justify-center items-center md:bg-eggshell">
      <article>
        <div className="bg-white my-[3rem] md:py-8 pb-8 md:rounded-xl md:mx-auto">
          <picture>
            <img
              src={item.thumbnail_image}
              alt={item.name}
              className="md:max-w-[90%] w-full md:h-[570px] md:rounded-xl"
            />
          </picture>
          <div className="px-8">
            <h1 className="text-4xl mt-12 text-secondary">{item.name}</h1>
            <h3 className="mt-3">Tags : {item.tags.join(", ")}</h3>
            <p className="mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos laudantium natus vero dolor. Cum incidunt perferendis
              quae ducimus quas sit magnam! Temporibus, error!
            </p>

            <article className=" bg-rose-50 mt-6 p-5 rounded-xl">
              <h2 className="text-xl font-semibold ml-2">Preparation time</h2>
              <ul className="list-disc mt-3 ml-8 text-lg marker:text-orange-500">
                <li className="pl-3 mt-3">
                  <p>
                    <span>Total Time : </span>
                    <span>{totalTime} minutes</span>
                  </p>
                </li>
                <li className="pl-3 mt-3">
                  <p>
                    <span>Preparation Time : </span>
                    <span>{prepTime} minutes</span>
                  </p>
                </li>
                <li className="pl-3 mt-3">
                  <p>
                    <span>Cooking Time : </span>
                    <span>{cookTime} minutes</span>
                  </p>
                </li>
              </ul>
            </article>
            <div className="mt-5">
              <h2 className="text-xl font-semibold ml-2 ">Ingredients:</h2>
              <ul className="list-disc marker:text-blue-500 mt-4 ml-6 text-secondary">
                {item?.ingredients.map((ingredient, index) => (
                  <li key={index} className="pl-4 mt-2 ml-8">
                    <span>{ingredient?.name} - </span>
                    <span>{ingredient?.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <h2 className="text-xl font-semibold ml-2">Instructions:</h2>
              <ul className="list-disc marker:text-blue-500 mt-4 ml-6 text-secondary">
                <div className="ml-8">
                  {item?.instructions
                    .split(/\d+\./)
                    .map(
                      (instruction, index) =>
                        index !== 0 && <li className='mt-2' key={index}>{instruction.trim()}</li>
                    )}
                </div>
              </ul>
            </div>

            <p className="text-center mt-7 font-bold">Source : {selectedMore.source}</p>
          </div>
        </div>
      </article>
    </section>
    </>
  );
}

export default SingleProduct;
