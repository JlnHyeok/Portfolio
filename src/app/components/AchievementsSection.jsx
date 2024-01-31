"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import ProjectTag from "./ProjectTag";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const FrontAchievmentsList = [
  {
    metric: "Html",
    value: "90",
    tag: "F/E",
    postfix: "",
  },
  {
    metric: "Css",
    value: "85",
    tag: "F/E",
  },
  {
    metric: "React",
    value: "85",
    tag: "F/E",
  },
  {
    metric: "Next",
    value: "85",
    tag: "F/E",
  },
  {
    metric: "SvelteKit",
    value: "90",
    tag: "F/E",
  },
  { metric: "ExpressJs", value: "75", tag: "B/E" },
  { metric: "mySql", value: "75", tag: "B/E" },
  { metric: "MongoDB", value: "70", tag: "B/E" },
  { metric: "Js", value: "85", tag: "Langauge" },
  { metric: "Ts", value: "85", tag: "Langauge" },
  { metric: "Go", value: "65", tag: "Langauge" },
  { metric: "Python", value: "70", tag: "Langauge" },
  { metric: "C#", value: "75", tag: "Langauge" },
];

const AchievementsSection = () => {
  const [tag, setTag] = useState("F/E");
  const filteredAchievements = FrontAchievmentsList.filter((achivement) => {
    return achivement.tag.includes(tag);
  });
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <div className="py-8 px-0 xl:gap-16 sm:py-16 sm:px-8 xl:px-16 ">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Skills
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="F/E"
          isSelected={tag === "F/E"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="B/E"
          isSelected={tag === "B/E"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Langauge"
          isSelected={tag === "Langauge"}
        />
      </div>
      <div className="sm:border-[#33353F] w-full sm:border rounded-md sm:py-8 sm:px-16 flex sm:flex-row justify-center items-center md:justify-between">
        {filteredAchievements.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <p className="text-[#ADB7BE] font-bold text-base">
                {achievement.metric}
              </p>
              <h2 className="text-white text-2xl sm:text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-2xl sm:text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
