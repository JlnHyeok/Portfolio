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
  { metric: "Express", value: "80", tag: "B/E" },
  { metric: "mySql", value: "80", tag: "B/E" },
  { metric: "Docker", value: "80", tag: "B/E" },
  { metric: "Git-Act", value: "75", tag: "B/E" },
  { metric: "Js", value: "85", tag: "Lang" },
  { metric: "Ts", value: "88", tag: "Lang" },
  { metric: "Go", value: "70", tag: "Lang" },
  { metric: "Python", value: "70", tag: "Lang" },
  { metric: "C#", value: "75", tag: "Lang" },
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
    <div className="py-8 px-0 sm:py-16 sm:px-8 xl:px-16 xl:gap-16">
      <h2 className="text-center text-4xl font-bold text-white mt-4 ">
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
          name="Lang"
          isSelected={tag === "Lang"}
        />
      </div>
      <div className="glass sm:border-[#33353F] w-full sm:border rounded-xl sm:py-8 sm:px-16 flex sm:flex-row justify-center items-center lg:gap-20">
        {filteredAchievements.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center sm:gap-2 mx-4 my-4 sm:my-0"
            >
              <p className="text-[#ADB7BE] font-bold text-[0.85rem] xl:text-2xl md:text-xl">
                {achievement.metric}
              </p>
              <h2 className="text-white text-base xl:text-4xl md:text-xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-xl xl:text-4xl md:text-xl font-bold"
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
