import fs from "fs";
import matter from "gray-matter";
import compileMdx from "@/utils/compileMdx";
import { ReactElement } from "react";

const parseMdxToHtml = async (filePath: string): Promise<ReactElement> => {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContent);
  const MDXElement = await compileMdx(content);
  return MDXElement;
};

export default parseMdxToHtml;
