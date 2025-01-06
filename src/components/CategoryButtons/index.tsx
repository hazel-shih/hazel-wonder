"use client";
import FilterButton from "@/components/FilterButton";
import { blogCategories } from "@/app/config/blog";
import { useRouter, usePathname } from "next/navigation";
import "./style.scss";

const CategoryButtons = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="category-buttons">
      {blogCategories.map((category) => (
        <FilterButton
          isActive={category === "latest" ? true : category === pathname}
          name={category.charAt(0).toUpperCase() + category.slice(1)}
          key={category}
          handleClick={() =>
            router.push(category === "latest" ? "/blog" : `/blog/${category}`)
          }
        />
      ))}
    </div>
  );
};

export default CategoryButtons;
