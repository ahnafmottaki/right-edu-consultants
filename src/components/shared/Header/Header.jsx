import { NavLink } from "react-router";
import Dropdown from "../../Dropdown/Dropdown";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";

const DROPDOWNS_LINKS = [
  {
    text: "About us",
    links: [
      { path: "/about", text: "About us" },
      {
        path: "/about/our-story",
        text: "Our Story",
      },
      { path: "/about/our-team", text: "Our Team" },
      { path: "/about/our-partners", text: "Our Partners" },
      { path: "/about/advisory-board", text: "Advisory Board" },
    ],
  },
  {
    text: "Students",
    links: [
      { path: "/student", text: "Student Counseling" },
      { path: "/student/study-options", text: "Study Options" },
      { path: "/student/success-stories", text: "Success Stories" },
      { path: "/student/university-admissions", text: "University Admissions" },
      {
        path: "/student/visa-processing",
        text: "Visa Documentation & Support",
      },
      { path: "/student/student-enrollment", text: "Student Enrollment" },
    ],
  },
  {
    text: "Study Destination",
    links: [
      { text: "Study in Malaysia", path: "/study?country=malaysia" },
      { text: "Study in Germany", path: "/study?country=germany" },
      { text: "Study in Italy", path: "/study?country=italy" },
      { text: "Study in France", path: "/study?country=france" },
      { text: "Study in Poland", path: "/study?country=poland" },
      { text: "Study in Greece", path: "/study?country=Greece" },
      { text: "Study in Hungary", path: "/study?country=hungary" },
      { text: "Study in Lithuania", path: "/study?country=lithuania" },
      { text: "Study in Latvia", path: "/study?country=latvia" },
      { text: "Study in Croatia", path: "/study?country=Croatia" },
      { text: "Study in Bulgaria", path: "/study?country=bulgaria" },
      { text: "Study in Georgia", path: "/study?country=georgia" },
    ],
  },
  {
    text: "Universities",
    links: [
      {
        text: "University list of Malaysia",
        path: "/university?country=malaysia",
      },
      {
        text: "University list of Germany",
        path: "/university?country=germany",
      },
      { text: "University list of Italy", path: "/university?country=italy" },
      { text: "University list of France", path: "/university?country=france" },
      { text: "University list of Poland", path: "/university?country=poland" },
      {
        text: "University list of Greece",
        path: "/university?country=greece",
      },
      {
        text: "University list of Hungary",
        path: "/university?country=hungary",
      },
      {
        text: "University list of Lithuania",
        path: "/university?country=lithuania",
      },
      { text: "University list of Latvia", path: "/university?country=latvia" },
      {
        text: "University list of Croatia",
        path: "/university?country=Croatia",
      },
      {
        text: "University list of Bulgaria",
        path: "/university?country=bulgaria",
      },
      {
        text: "University list of Georgia",
        path: "/university?country=georgia",
      },
      {
        text: "University Testimonials",
        path: "/university-testimonials",
      },
    ],
  },
];

const Header = () => {
  return (
    <div className="bg-gray-100   sticky top-0 left-0 z-[9999] shadow">
      <header className=" container header">
        {/* logo */}
        <div className="flex items-center gap-1">
          <div className="logo">
            <img src="/images/logo.png" alt="" />
          </div>
          <span className="leading-5 font-medium font-poppins">
            Right Edu <br /> Consultants
          </span>
        </div>
        <nav className="space-x-5">
          <NavLink
            to={"/"}
            className={`cursor-pointer py-3 text-base  font-medium text-indigo-900 hover:text-indigo-900/60  transition-all duration-300 `}
          >
            Home
          </NavLink>
          {DROPDOWNS_LINKS.map(({ text, links }, key) => (
            <Dropdown key={key} text={text} links={links} />
          ))}
          <a
            href="#contact-us"
            className={`cursor-pointer py-3 text-base  font-medium hover:text-indigo-900/60 text-indigo-900   transition-all duration-300 `}
          >
            Contact Us
          </a>
        </nav>
        <PrimaryButton>Apply Now</PrimaryButton>
      </header>
    </div>
  );
};
export default Header;
