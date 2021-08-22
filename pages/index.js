import Container from "@/components/Container";
import Link from "next/link";
import BlogPost from "@/components/BlogPost";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";

import { LIGHT_COLORS } from "@/lib/constants";

import { shuffleArray } from "@/lib/shuffleArray";
import { useEffect, useState } from "react";
import { RainbowHighlight } from "@/ui/RainbowHighlight";

import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useIsFontReady } from "@/lib/useIsFontReady";
import { LinkPreview } from "@/components/LinkPreview";
import { StaticLinkPreview } from "@/components/StaticLinkPreview";

export default function Home() {
  const [colors, setColors] = useState([]);

  const isFontReady = useIsFontReady();

  useEffect(() => {
    setColors(shuffleArray(LIGHT_COLORS));
  }, []);
  return (
    <Container
      title="Akshay Pillai"
      description="Entrepreneur, developer and strategist"
      // image="/avatar.jpg"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <RoughNotationGroup show={isFontReady}>
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            Hey, I’m{" "}
            <RainbowHighlight color={colors[0]}>
              <span className="dark:text-black">Akshay Pillai</span>
            </RainbowHighlight>{" "}
          </h1>

          <h2 className="text-gray-600 dark:text-gray-400 mb-16 mt-4 font-light tracking-wide leading-loose">
            I’m an Entrepreneur, developer and strategist. I have worked at companies like {" "}
            <span className="font-bold">
              <span className="text-blue-500">In</span>App
            </span>{" "}
            as a{" "}
            <RainbowHighlight color={colors[1]}>
              <span className="dark:text-black">Software Engineer</span>
            </RainbowHighlight>{" "}
            and earlier with companies and startups including InfinityLab, Exsight future, and more. You've discovered my piece on the internet –&nbsp;
            <RoughNotation
              type="underline"
              multiline={true}
              animationDuration={1500}
              animationDelay={1700}
              strokeWidth={2}
              iterations={3}
              padding={5}
              color={colors[3]}
            >
              {/*<Link*/}
              {/*  href="/blog"*/}
              {/*  className="font-medium text-gray-700 transition-colors hover:text-gray-900 focus:text-gray-900 focus:outline-none"*/}
              {/*>*/}
              {/*  <a className="font-medium text-gray-700 transition-colors hover:text-gray-900 focus:text-gray-900 focus:outline-none dark:text-gray-300 dark:hover:text-gray-600">*/}
              {/*    <LinkPreview url="https://getakshay.com/blog">*/}
              {/*      Checkout my blog*/}
              {/*    </LinkPreview>*/}
              {/*  </a>*/}
              {/*</Link>*/}
            </RoughNotation>{" "}
            <br/>
            <br/>
            I love working at the{" "}
            <RainbowHighlight color={colors[2]}>
              <span className="dark:text-black">cross-section</span>
            </RainbowHighlight>{" "}
            of Product development, Growth, and Marketing. I’ve collaborated with tech and marketing teams from all around the world to help and identify problems to solve for their platforms.
            <br/>
            <br/>
            <br />I write about technology, Investment and{" "}
            <StaticLinkPreview url="https://i.redd.it/ifz2dabv3jh41.png">
              Economics.
            </StaticLinkPreview>

          </h2>
        </RoughNotationGroup>
        {/*<h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">*/}
        {/*  Most Popular*/}
        {/*</h3>*/}
        {/*<BlogPost*/}
        {/*  title="Top 5 courses and resources to learn Next JS in 2021"*/}
        {/*  summary="Get the top 5 resources to learn Next JS in 2021 and take your React skills to the next level."*/}
        {/*  slug="top-5-nextjs-resources"*/}
        {/*/>*/}
        {/*<BlogPost*/}
        {/*  title="How I built a blogging platform like Medium with Next.js"*/}
        {/*  summary="Insights and structure of devmedium, A blogging platform built with Next.js with features like custom usernames, create blogs and various optimization techniques"*/}
        {/*  slug="blogging-platform-nextjs"*/}
        {/*/>*/}
        {/* <BlogPost
          title="How to design a minimal and beautiful website which actually converts"
          summary="Examining the tips and tricks used to make a website design a notch above the rest."
          slug="css-with-react"
        />
        <BlogPost
          title="Using real world projects to build better learning habits"
          summary="In this guide, you will learn how to take an idea and convert it into a real world application, while learning on the go."
          slug="css-with-react"
        /> */}
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Side Projects
        </h3>
        <ProjectCard
          title="Tustartup"
          description="Tustartup is a free chrome plugin that brings quotes from top Product people, CXOs and founders on your Chrome tab."
          href="https://tustartup.xyz/"
          icon="tailwindmasterkit"
          tags={["Chrome App", "Light wight", "Freemium"]}
        />
        <ProjectCard
          title="Renfre"
          description= "Reanfre is a curated platform for everything related to international education for an Indian student and Renfre will give back up to 5% of the tuition fee as cashback to the students."
          href="https://reanfree.com/"
          icon="covidrescue"
          tags={["Ed-tech", "Platform", "MVP"]}
        />
        {/*<ProjectCard*/}
        {/*  title="PlaceholderTech"*/}
        {/*  description="We build modern, blazing-fast web applications which helps your business grow and increase sales."*/}
        {/*  href="https://placeholdertech.in/"*/}
        {/*  icon="placeholdertech"*/}
        {/*/>*/}
        {/*<ProjectCard*/}
        {/*  title="Feedmeback"*/}
        {/*  description="The easiest way to add comments or reviews to your static site. Built as part of React 2025."*/}
        {/*  href="https://feedmeback-beta.vercel.app/"*/}
        {/*  icon="fastfeedback"*/}
        {/*/>*/}
        {/*<Link href="/projects">*/}
        {/*  <a*/}
        {/*    type="button"*/}
        {/*    className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"*/}
        {/*  >*/}
        {/*    See More*/}
        {/*    <svg*/}
        {/*      className="h-4 w-4 ml-1"*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*      fill="none"*/}
        {/*      viewBox="0 0 24 24"*/}
        {/*      stroke="currentColor"*/}
        {/*    >*/}
        {/*      <path*/}
        {/*        strokeLinecap="round"*/}
        {/*        strokeLinejoin="round"*/}
        {/*        strokeWidth={2}*/}
        {/*        d="M19 9l-7 7-7-7"*/}
        {/*      />*/}
        {/*    </svg>*/}
        {/*  </a>*/}
        {/*</Link>*/}

        {/*<h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">*/}
        {/*  Upcoming Projects*/}
        {/*</h3>*/}
        {/*<ProjectCard*/}
        {/*  title="Algochurn"*/}
        {/*  description="Your last moment friend before a Technical Interview round. Practice the most popular Data Structures & Algorithms"*/}
        {/*  href="#"*/}
        {/*  icon="algochurn"*/}
        {/*/>*/}
        {/*<ProjectCard*/}
        {/*  title="VSCode Resume"*/}
        {/*  description="A VSCode themed resume for all the web developers out there. A UI which looks exactly like a React file-system based VSCode window with create and update operations."*/}
        {/*  href="#"*/}
        {/*  icon="vscode"*/}
        {/*/>*/}
        {/*<ProjectCard*/}
        {/*  title="More projects coming soon.."*/}
        {/*  description="I get ideas all day 🙄, All of them are updated here as soon as I start working on them."*/}
        {/*  href="#"*/}
        {/*  icon="more"*/}
        {/*/>*/}
        <Timeline />
        <Contact />
      </div>
    </Container>
  );
}
