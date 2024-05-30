'use client'
import * as React from "react"
import { SideScroll } from "@/components/ui/side-scroll";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento";
import {
  IconPhone,
  IconFriends,
  IconGitBranch,
  IconCode
} from "@tabler/icons-react";
import { motion, useScroll } from "framer-motion"
import Section from "@/components/section-framer";
import Link from "next/link";

import IconCloud from "./ui/icon-cloud";
import SkewedInfiniteScroll from "./ui/skeewed";
import { HackathonMarque } from "./ui/hackathon-marque";
import { Mentorship } from "./ui/mentorship";


export function WhatWeDoSection() {

  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <Section>
        <div className="flex flex-col p-2 m-2 pb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className={`md:text-lg text-center text-xs font-medium md:font-light text-secondary-800/50 p-9 mx-auto ${scrollYProgress}`}>OUR ALUMNI'S ARE CURRENTLY AT</motion.h1>

          <div className="h-fit flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden ring-1 ring-secondary-400/50 rounded-full md:p-5 md:w-10/12 w-11/12 mx-auto">
            <SideScroll
              items={companies}
              direction="left"
              speed="normal"
            />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className=" text-secondary-800 font-semibold text-center text-2xl md:text-4xl p-9 mt-[90px] mb-10 mx-auto">
            Things we do in <span className="text-primary-400">WebClub🕸️</span>
          </motion.h1>
          <BentoGrids />
        </div>

      </Section>

    </motion.div>

  )
}


const companies = [
  "micro",
  "google",
  "oracle",
  "goldman",
  "morgan_stanley",
  "wells",
  "deshaw",
  "amazon",
  "salesforce",
  "servicenow",
  "intuit",
  "coinbase",
  "adobe",

];

export function BentoGrids() {
  return (
    <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}


const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const ProjectSkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <IconCloud iconSlugs={slugs} />
  </div>
);

const TalksSkeleton = () => (
  <div className="flex flex-1 w-full h-full items-center justify-center min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <SkewedInfiniteScroll />
  </div>
);

const HackathonSkeleton = () => (
  <div className="flex flex-1 w-full h-full items-center justify-center  rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 bg-secondary-900">
    <HackathonMarque items={hackathons}/>
  </div>
);

const MentorshipSkeleton = () => (
  <div className="flex flex-1 w-full h-full items-center justify-center  rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 bg-secondary-900">
    <Mentorship placeholders={placeholders} className="p-2 m-2"/>
  </div>
);


const items = [
  {
    title: "Talks",
    description: "We host talks by industry experts and alumni.",
    header: <TalksSkeleton />,
    className: "md:col-span-2",
    icon: <IconPhone className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Projects",
    description: "Build projects that solve real-world problems.",
    header: <ProjectSkeleton />,
    className: "md:col-span-1",
    icon: <IconGitBranch className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Mentorships",
    description: "Get mentored by industry professionals. And learn from the best.",
    header: <MentorshipSkeleton />,
    className: "md:col-span-1",
    icon: <IconFriends className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Hackathons",
    description:
      "Participate in hackathons and showcase your skills to the world.",
    header: 
      <HackathonSkeleton/>,
    className: "md:col-span-2",
    icon: <IconCode className="h-4 w-4 text-neutral-500" />,
  },
];

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];


const hackathons = [
  {
    
    name: "ETHIndia'22",
    
  },
  {
    
    name: "Fantom Hackathon",
   
  },
  {
    
    name: "ETHForAll'23",
    
  },
  {
    
    name: "AngelHack's Polkadot Hackathon",

  },
  {
   
    name: "Warpspeed by Lightspeed",
  
  },
  {
   
    name: "HackToFuture, SJEC Mangalore",
  
  },
  {
   
    name: "NivHack’23 by Niveus Solutions, Mangalore",
  
  },
  {
   
    name: "Manipal Hackathon 2023",
  
  },
  {
   
    name: "ETHOnline’23",
  
  },
  {
   
    name: "MultiverseX Hackathon’23",
  
  },
  {
   
    name: "ETHIndia’23",
  
  },
  {
   
    name: "DevRev Forge’23",
  
  },{
   
    name: "AngelHack's HackBangalore",
  
  },
  {
   
    name: "ETHGlobal's LFGHO",
  
  },
  {
    name: "HackFS"
  }

];


const placeholders = [
  "What's the first rule of Fight Club?",
  "Who is Tyler Durden?",
  "Where is Andrew Laeddis Hiding?",
  "Write a Javascript method to reverse a string",
  "How to assemble your own PC?",
];