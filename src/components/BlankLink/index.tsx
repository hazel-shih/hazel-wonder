import "./style.scss";

interface BlankLinkProperty {
  href: string;
  text: string;
}

const BlankLink: React.FC<BlankLinkProperty> = ({ href, text }) => {
  return (
    <a href={href} target="_blank" className="blank-link">
      {text}
    </a>
  );
};

export default BlankLink;
