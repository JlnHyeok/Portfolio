"use client";
import React, { useTransition, useState, useRef } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, useInView } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "careers",
    content: (
      <ul className="list-disc pl-2 flex flex-col justify-center gap-2">
        <li>
          <span>2019.05 ~ 2019.12</span> <br />
          <span>범진상운 3등 기관사</span>
        </li>
        <li>
          <span>2020.05 ~ 2022.04</span> <br />
          <span>시노코페트롤케미컬 2등 기관사</span>
        </li>
        <li>
          <span>2023.02 ~ 재직중</span> <br />
          <span>Frontend Engineer</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2  flex flex-col justify-center gap-2">
        <li>
          <span>2015.03 ~ 2019.01</span> <br />
          <span>한국해양대학교 해사대학 기관공학부 졸업</span>
        </li>
        <li>
          <span>2022.06 ~ 2022.12</span>
          <br />
          <span>KOREA ACADEMY FRONE-END COURSE 수료.</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2  flex flex-col justify-center gap-2">
        <li>2022.09.30 - SQLD 자격증</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("careers");
  const [isPending, startTransition] = useTransition();
  const scrollRef = useRef();
  const isInView = useInView(scrollRef, { once: false, amount: 0.3 });
  const cardVariants = {
    initial: { y: 100, x: 0, scale: 0, opacity: 0 },
    animate: { y: 0, x: 0, opacity: 1, scale: 1 },
  };

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white md:py-20" id="about">
      <motion.div
        ref={scrollRef}
        whileInView="visible"
        variants={cardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.5 }}
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
      >
        <Image
          src="/images/about-image.jpeg"
          width={500}
          height={500}
          className="rounded-xl mx-auto"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg flex flex-col justify-center gap-2">
            <span>
              ◈ Full Stack Enginner를 지향하는 FrontEnd Enginner 입니다.
            </span>
            <span>◈ 한번 빠져들면 깊이 파고 들어갑니다.</span>
            <span>◈ UX를 고려한 UI를 만들려고 노력합니다.</span>
            <span>
              ◈ 새로운 기술들에 흥미를 가지며 꾸준히 받아들이려고 노력합니다.
            </span>
            {/* I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications. */}
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("careers")}
              active={tab === "careers"}
            >
              {" "}
              Careers{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="glass px-6 py-4 mt-8 ">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
