import Image from "next/image";
import "./style.scss";

interface BlogInsertImageProperty {
  alt: string;
  path: string;
}

const BlogInsertImage: React.FC<BlogInsertImageProperty> = ({ alt, path }) => {
  return (
    <Image
      className="blog-insert-image"
      src={`/articles/${path}`}
      alt={alt}
      width={680}
      height={680}
    />
  );
};

export default BlogInsertImage;
