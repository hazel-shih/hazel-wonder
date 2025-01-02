import { Metadata } from "next";

// interface Props {
//   params: {
//     slug: string;
//   };
// }

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  return {
    title: `Read about ${params.slug} | Tech Blog`,
    description: `An article about ${params.slug} in the Tech category.`,
  };
}

// export default function TechArticlePage({ params }: Props) {
//   const { slug } = params;

//   return (
//     <div>
//       <h1>Tech Article: {slug}</h1>
//       <p>This is the content for the article {slug}.</p>
//     </div>
//   );
// }

export default async function TechArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Post } = await import(`@/contents/tech/${slug}.mdx`);

  return <Post />;
}

export function generateStaticParams() {
  return [{ slug: "learn-html" }, { slug: "react-is-fun" }];
}

export const dynamicParams = false;
