"use client";
import FilterButton from "@/components/FilterButton";
import { blogCategories, BlogCategory } from "@/app/config/blog";
import { useRouter, usePathname } from "next/navigation";
import "./style.scss";

const isButtonActive = (category: BlogCategory, pathname: string) => {
  if (category !== "latest") {
    return pathname.includes(`/blog/${category}`);
  }
  return pathname === "/blog" || pathname.includes(`/blog/${category}`);
};

const CategoryButtons = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="category-buttons">
      {blogCategories.map((category) => (
        <FilterButton
          isActive={isButtonActive(category, pathname)}
          name={category.charAt(0).toUpperCase() + category.slice(1)}
          key={category}
          handleClick={() => router.push(`/blog/${category}/page/1`)}
        />
      ))}
    </div>
  );
};

export default CategoryButtons;
