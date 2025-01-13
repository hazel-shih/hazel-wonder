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
import rehypePrism from "rehype-prism-plus";
import rehypeHighlight from "rehype-highlight";
import { ReactElement } from "react";

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
          rehypeHighlight,
          [rehypePrism, { ignoreMissing: true }],
        ],
      },
    },
  });

  return MDXElement;
};

export default compileMdx;
