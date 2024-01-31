"use client";
import React, { useRef, useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import NotionIcon from "../../../public/notion-icon.svg";
import BlogIcon from "../../../public/blog-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { useInView, motion } from "framer-motion";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const scrollRef = useRef();
  const LeftIsInView = useInView(scrollRef, { once: false, amount: 0.5 });
  const RightIsInView = useInView(scrollRef, { once: false, amount: 0.5 });

  const LeftCardVariants = {
    initial: { y: 0, x: 0, scale: 0, opacity: 0 },
    animate: { y: 0, x: 0, opacity: 1, scale: 1 },
  };

  const RightCardVariants = {
    initial: { y: 1000, x: 0, opacity: 0 },
    animate: { y: 0, x: 0, opacity: 1 },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      ref={scrollRef}
      className="grid md:grid-cols-2 my-12 py-12 md:py-[350px] gap-4 relative z-0"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <motion.div
        className="z-10"
        variants={LeftCardVariants}
        initial="initial"
        animate={LeftIsInView ? "animate" : "initial"}
        transition={{ duration: 0.6 }}
      >
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2 items-center">
          <Link
            href="https://github.com/JlnHyeok"
            target="_blank"
            className="hover:scale-110 duration-300"
          >
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            href="https://portpo.notion.site/portpo/59fa3129f31a4fa5818ea1459af789d7"
            target="_blank"
            className="hover:scale-110 duration-300"
          >
            <div className="w-10 h-10 flex justify-center items-center overflow-hidden rounded-full bg-white">
              <Image
                src={NotionIcon}
                alt="Notion Icon"
                className="bg-white"
                width={30}
              />
            </div>
          </Link>
          <Link
            href="https://my-developement-stew.tistory.com"
            target="_blank"
            className="hover:scale-110 duration-300"
          >
            <div className="w-10 h-10 ml-[2px] flex justify-center items-center overflow-hidden rounded-full bg-white">
              <Image
                src={BlogIcon}
                alt="Blog Icon"
                className="bg-white"
                width={30}
              />
            </div>
          </Link>
        </div>
      </motion.div>
      <motion.div
        variants={RightCardVariants}
        initial="initial"
        animate={RightIsInView ? "animate" : "initial"}
        transition={{ duration: 0.6 }}
      >
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="abc@naver.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Hello, Mr.Heo!"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about something..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default EmailSection;
