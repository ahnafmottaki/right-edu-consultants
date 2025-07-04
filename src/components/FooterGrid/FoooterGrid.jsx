import { Link } from "react-router";

const FooterGrid = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold uppercase text-gray-100/90">{title}</h1>
      {links.map((link) => (
        <Link
          key={link}
          className="text-footer-text hover:text-white transition-colors"
        >
          {link}
        </Link>
      ))}
    </div>
  );
};

export default FooterGrid;
