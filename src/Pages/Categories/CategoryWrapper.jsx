import React from "react";
import { Link } from "react-router-dom";

function CategoryItem({ name, href, backgroundColor, color }) {
  const style = {
    backgroundColor: backgroundColor,
    color: color,
    borderColor: color,
  };
  return (
    <div className="uppercase px-6 py-2 text-center rounded-full" style={style}>
      <Link to={href}>{name}</Link>
    </div>
  );
}

function CategoryList() {
  return (
    <div className="mt-[40px] flex flex-wrap w-[100%] justify-center items-center gap-[30px]">
    <div>
        <CategoryItem
          name="Entrees"
          href="/categories/entrees"
          backgroundColor="#f0f5c4"
          color="#59871f"
        />
      </div>
      <div>
        <CategoryItem
          name="Breakfast"
          href="/categories/breakfast"
          backgroundColor="#efedfa"
          color="#3c3a8f"
        />
      </div>
      <div>
        <CategoryItem
          name="Lunch"
          href="/categories/lunch"
          backgroundColor="#e5f7f3"
          color="#1f8787"
        />
      </div>
      <div>
        <CategoryItem
          name="Desserts"
          href="/categories/desserts"
          backgroundColor="#e8f5fa"
          color="#397a9e"
        />
      </div>
      <div>
        <CategoryItem
          name="Sides"
          href="/categories/sides"
          backgroundColor="#feefc9"
          color="#d16400"
        />
      </div>
      <div>
        <CategoryItem
          name="Drinks"
          href="/categories/drinks"
          backgroundColor="#ffeae3"
          color="#f0493e"
        />
      </div>
    </div>
  );
}

function CategoryWrapper() {
  return (
    <div>
      <CategoryList />
    </div>
  );
}

export default CategoryWrapper;
