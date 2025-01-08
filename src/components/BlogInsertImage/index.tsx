import Image from "next/image";
import "./style.scss";

interface BlogInsertImageProperty {
  alt: string;
  relativePath: string;
}

const BlogInsertImage: React.FC<BlogInsertImageProperty> = ({
  alt,
  relativePath,
}) => {
  return (
    <Image
      className="blog-insert-image"
      src={`/articles/${relativePath}`}
      alt={alt}
      width={680}
      height={680}
    />
  );
};

export default BlogInsertImage;
