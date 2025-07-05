import { Link } from "react-router";

const FooterGrid = ({ title, links, icons = null }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold uppercase text-gray-100/90">{title}</h1>
      {links.map((link, index) => (
        <Link
          key={index}
          className="text-footer-text group hover:text-white transition-colors flex items-center gap-2"
        >
          {icons && icons[index]} {link}
        </Link>
      ))}
    </div>
  );
};

export default FooterGrid;
