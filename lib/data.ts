import React from "react";
import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-Masters in Information Technology
import { LuGraduationCap } from "react-icons/lu";
import webScraper from "@/public/webScraper.png";
import chatApp from "@/public/scalable-chat-app.png";
import marketStream from "@/public/marketStream.png";
import Portfolio from "@/public/Portfolio.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelors in Computer Applications",
    location: "MS University, Vadodara",
    description:
      "My journey into the IT realm began with courses like CS Fundamentals and Web Dev, and I must admit, it ignited a spark within me. Graduating with an 'A' grade, I not only earned the knowledge but also a secret handshake with my computer. We're tight now.",
    icon: React.createElement(LuGraduationCap),
    date: "June 2019 - May 2022",
  },
  {
    title: "Software Engineer Trainee",
    location: "Paul Mason Consulting",
    description:
      "I achieved the distinction of receiving a pre-placement offer, a testament to my successful internship, where I managed over 150 web portals with real-time data streaming, ensuring their optimal performance and data integrity. My role was pivotal in migrating our servers to Amazon Web Services (AWS), enhancing our system's maintenance and monitoring capabilities, including server monitoring, log analysis, and live anomaly detection using time-series graphs.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2022 - June 2022",
  },
  {
    title: "Software Engineer Trainee",
    location: "Bhagat Engineers",
    description:
      "Engineered a robust data cleansing and processing solution using Databricks and PySpark, ensuring integrity and reliability for large-scale data from diverse channels. Developed sales data visualizations to aid future business planning. Pioneered unique KPIs, leading to an 18% quarter-on-quarter revenue growth.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2022 - November 2022",
  },
  {
    title: "Software Engineer",
    location: "Frodoe LLC",
    description:
      "Designed and built a scalable internal communication app with web sockets and pub-sub architecture. Integrated Apache Kafka for efficient chat data streaming and MySQL Workbench for storage. Deployed on AWS VPC with multi-level security and traffic management using NAT and Internet gateways.",
    icon: React.createElement(CgWorkAlt),
    date: "December 2022 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Chat Application",
    description:
      "A highly-scalable socket app combining Node.js, Socket.io, and Redis with TurboRepo for seamless, real-time  bidirectional communication.",
    tags: [
      "Node.js",
      "Next.js",
      "Apache Kafka",
      "Socket.io",
      "Redis",
      "Turborepo",
      "PostgreSQL",
    ],
    imageUrl: chatApp,
    projLink: "https://github.com/pateldev02/scalable-socket-app/",
  },
  {
    title: "MarketStream Analytics Engine",
    description:
      "A scalable pipeline swiftly transforming real-time unstructured data into actionable insights.",
    tags: [
      "Python",
      "Numpy",
      "Pandas",
      "Apache Kafka",
      "AWS(S3, EC2, Athena, Glue)"
    ],
    imageUrl: marketStream,
    projLink: "https://github.com/pateldev02/trading-data-engineering",
  },
  {
    title: "webScraper",
    description:
      "Seamlessly integrating Sequelize, Node.js, and Puppeteer, this project revolutionizes web scraping and data storage for scalable efficiency.",
    tags: [
      "JavaScript",
      "Node.js",
      "MySQL Workbench",
      "Sequelize",
      "cron", "bcrypt"
    ],
    imageUrl: webScraper,
    projLink: "https://github.com/pateldev02/webScraper/",
  },
] as const;

export const skillsData = [
  "Node.js",
  "Socket.io",
  "WebRTC",
  "React.js",
  "Next.js",
  "Apache Kafka",
  "Apache Spark",
  "Hadoop",
  "Docker",
  "Pandas",
  "Numpy",
  "VSCode",
  "Jupyter",
] as const;

export const languagesData = [
  "JavaScript",
  "Python",
  "Java",
  "SQL",
  "C++",
  "HTML",
  "CSS"
  
] as const;

export const cloudServicesData = [
  "AWS S3",
  "AWS EC2 Compute",
  "AWS VPC",
  "AWS Lambda",
  "AWS Athena",
  "AWS Glue",
  "AWS CloudWatch",
  "AWS Kinesis",
  
] as const;

export const dbData = [
  "MySQL Workbench",
  "PostgreSQL",
  "Redis",
  "MongoDB",
  
] as const;

export const osData = [
  "Linux",
  "Windows"
  
] as const;
