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
          isActive={
            category === "latest" && pathname === "/blog"
              ? true
              : pathname.includes(category)
          }
          name={category.charAt(0).toUpperCase() + category.slice(1)}
          key={category}
          handleClick={() =>
            router.push(
              category === "latest" ? "/blog" : `/blog/${category}/page/1`
            )
          }
        />
      ))}
    </div>
  );
};

export default CategoryButtons;
