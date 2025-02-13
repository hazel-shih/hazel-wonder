import Image from "next/image";
import "./style.scss";

interface BlogInsertImageProperty {
  alt: string;
  src: string; // relative to public path or url
  width: number;
  height: number;
  description?: string;
}

const BlogInsertImage: React.FC<BlogInsertImageProperty> = ({
  alt,
  src,
  width = 680,
  height = 680,
  description = "",
}) => {
  if (!src) {
    return null;
  }
  return (
    <div className="blog-insert-image">
      <Image
        className="image"
        src={src}
        alt={alt}
        width={Number(width)}
        height={Number(height)}
      />
      <p className="description">{description}</p>
    </div>
  );
};

export default BlogInsertImage;
