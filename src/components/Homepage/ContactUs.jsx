import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const ContactUs = () => {
  return (
    <section className=" bg-white py-25 px-4" id="contact-us">
      <h2 className="text-3xl font-poppins md:text-4xl font-bold text-gray-800  text-center mb-4">
        Contact Us
      </h2>
      <p className="text-gray-600 text-base md:text-lg text-center mb-10">
        We’d love to hear from you! Whether you have a question about studying
        abroad, need assistance with an application, or just want to say hello —
        we’re here to help.
      </p>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div>
          {/* * form */}
          <form className="space-y-6 mt-10">
            {/* Name and Email */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full max-w-[400px]">
                <label
                  className="block font-poppins text-gray-700 font-medium mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  className="block font-poppins text-gray-700 font-medium mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                className="block text-gray-700 font-poppins font-medium mb-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                placeholder="Your Message"
                className="w-full  resize-y max-h-[200px] min-h-[150px] border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <PrimaryButton>Submit</PrimaryButton>
            </div>
          </form>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7406573963285!2d101.71003687544389!3d3.16289315306704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37fd98e3e951%3A0x461cf529336d2e9f!2sRIGHT%20EDU%20CONSULTANTS%20SDN%20BHD!5e0!3m2!1sen!2smy!4v1751693452774!5m2!1sen!2smy"
            width="600"
            height="450"
            style={{
              border: "0",
            }}
            className="h-full w-full"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
