// src/app/blog/tech/[slug]/page.tsx
import { Metadata } from 'next';

interface Props {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    return {
      title: `Read about ${params.slug} | Tech Blog`,
      description: `An article about ${params.slug} in the Tech category.`,
    };
  }
  

export default function TechArticlePage({ params }: Props) {
  const { slug } = params;

  return (
    <div>
      <h1>Tech Article: {slug}</h1>
      <p>This is the content for the article {slug}.</p>
    </div>
  );
}
