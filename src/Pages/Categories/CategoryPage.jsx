import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryWrapper from "./CategoryWrapper";
import axios from "axios";
import Card from "../../Components/Header/Card";

function CategoryPage() {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://recipe-heaven-backend.vercel.app/api/categories/${category}`
        );
        setItems(response.data);
      } catch (err) {
        setError(err.message || "Error Loading Category");
      }
    };
    fetchCategoryData();
  }, [category]);
  return (
    <>
      <div className="text-5xl text-center font-bold capitalize py-20">
        {category}
      </div>
      <CategoryWrapper />
      <ul className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 gap-8">
        {items && items.map((item) => <Card item={item} key={item._id} />)}
      </ul> 
    </>
  );
}

export default CategoryPage;
