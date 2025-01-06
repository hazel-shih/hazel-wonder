import "./style.scss";
import { nunito } from "@/fonts/configure";
import Link from "next/link";

interface BlogListItemProperty {
  href: string;
  date: string;
  title: string;
  description: string;
}

const BlogListItem: React.FC<BlogListItemProperty> = ({
  href,
  date,
  title,
  description,
}) => {
  return (
    <Link href={href} className="blog-list-item">
      <h3 className={nunito.className}>{date}</h3>
      <h2>{title}</h2>
      <p>{description}</p>
    </Link>
  );
};

export default BlogListItem;
