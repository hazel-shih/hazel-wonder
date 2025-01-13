import Image from "next/image";
import "./style.scss";

interface BlogInsertImageProperty {
  alt: string;
  src: string; // relative to public path or url
}

const BlogInsertImage: React.FC<BlogInsertImageProperty> = ({ alt, src }) => {
  if (!src) {
    return null;
  }
  return (
    <Image
      className="blog-insert-image"
      src={src}
      alt={alt}
      width={680}
      height={680}
    />
  );
};

export default BlogInsertImage;
