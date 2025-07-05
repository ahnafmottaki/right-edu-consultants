import Divider from "../../Divider/Divider";
import FooterGrid from "../../FooterGrid/FoooterGrid";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

const DUMMY_FOOTER_SECTIONS = [
  {
    title: "Sitemap",
    links: ["About Us", "Blog", "Student Enrollment", "Careers"],
    icons: null,
  },
  {
    title: "Help & Support",
    links: ["FAQ", "Terms & Conditions", "Privacy Policy"],
    icons: null,
  },
  {
    title: "Community",
    links: [
      "Facebook",
      "Youtube",
      "Instagram",
      "Linkedin",
      "Twitter",
      "TikTok",
    ],
    icons: [
      <FaFacebookSquare className="text-2xl text-blue-600 group-hover:text-blue-500" />,
      <FaYoutube className="text-2xl text-red-600 group-hover:text-red-500" />,
      <IoLogoInstagram className="text-2xl text-purple-600 group-hover:text-purple-500" />,
      <IoLogoLinkedin className="text-2xl text-blue-600 group-hover:text-blue-500" />,
      <FaSquareXTwitter className="text-2xl text-gray-300 group-hover:text-white" />,
      <AiFillTikTok className="text-2xl text-gray-300 group-hover:text-white" />,
    ],
  },
];

export default function Footer() {
  return (
    <div className="bg-black pt-10 pb-11">
      <footer className="container mx-auto  ">
        <div className="flex justify-between max-md:flex-wrap gap-x-4 gap-y-10 px-6 sm:px-3 pb-10">
          {/* logo */}
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/images/logo.png"
                className="w-19 aspect-square"
                width={70}
                height={70}
                alt=""
              />
              <span className="text-footer-text font-poppins text-2xl">
                Right Edu <br /> Consultants
              </span>
            </div>
            <div className="text-footer-text max-w-sm mt-4 text-sm">
              Right Edu Consultants is a trusted Malaysia based education
              consultancy providing expert guidance for international students
              across Asia and Europe. Since our inception, we’ve been committed
              to delivering excellence in admissions, visa processing, and
              academic support
            </div>
          </div>
          {DUMMY_FOOTER_SECTIONS.map((section) => (
            <FooterGrid
              key={section.title}
              title={section.title}
              links={section.links}
              icons={section.icons}
            />
          ))}
        </div>
        <Divider />
        <div className=" mt-8  sm:px-3 px-6">
          <p className="text-footer-text text-center text-xs sm:text-sm ">
            &copy; 2025 The Mash Enterprises. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
