export const blogCategories: BlogCategories[] = [
  "latest",
  // "tech",
  "movie",
  // "ponder",
  // "healing",
  // "english",
];

export type BlogCategories =
  | "latest"
  | "tech"
  | "movie"
  // "ponder"|
  // "healing"|
  | "english";

export const itemPerBlogPage = 7;
