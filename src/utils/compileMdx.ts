import { compileMDX } from "next-mdx-remote/rsc";
import {
  InfoAlert,
  SuccessAlert,
  ErrorAlert,
  WarningAlert,
} from "@/components/Alerts";
import BlankLink from "@/components/BlankLink";
import BlogInsertImage from "@/components/BlogInsertImage";
import rehypeCodeTitles from "rehype-code-titles";
import { ReactElement } from "react";
import rehypePrettyCode from "rehype-pretty-code";

const components = {
  InfoAlert,
  SuccessAlert,
  ErrorAlert,
  WarningAlert,
  BlogInsertImage,
  BlankLink,
};

const compileMdx = async (content: string): Promise<ReactElement> => {
  const { content: MDXElement } = await compileMDX({
    source: content || "",
    components: components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeCodeTitles,
          [rehypePrettyCode, { theme: "dracula" }],
        ],
      },
    },
  });

  return MDXElement;
};

export default compileMdx;
