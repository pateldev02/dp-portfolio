import React from "react";
import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-Masters in Information Technology
import { LuGraduationCap } from "react-icons/lu";
import webScraper from "@/public/webScraper.png";
import chatApp from "@/public/scalable-chat-app.png";
import marketStream from "@/public/marketStream.png";
import Portfolio from "@/public/Portfolio.png";
import iplStats from "@/public/IPL stats cluster.png"

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
    date: "December 2022 - April 2024",
  },
  {
    title: "Operations Support Engineer - IC",
    location: "Essendant",
    description:
      "At Essendant, I focused on leveraging data to drive smarter inventory and pricing decisions across a warehouse ecosystem managing 80,000+ SKUs. I maintained and enhanced Power BI dashboards to improve visibility into inventory costs, stock fluctuations, and product demand. Using SQL and trend analysis, I identified pricing inefficiencies, reduced markouts, and supported revenue optimization. I also led annual data-driven inventory audits, achieving 98% compliance, and partnered with cross-functional teams to ensure SOP alignment and data consistency across systems.",
    icon: React.createElement(CgWorkAlt),
    date: "February 2023 - December 2025",
  },
  {
    title: "MS, Computer Science",
    location: "Johns Hopkins University",
    description:
      "Pursuing MS in Computer Science with a concentration in Data Science and Cloud Computing as a part-time student, focusing on advanced data-intensive computational techniques and cloud infrastructure to enhance my technical expertise and career prospects in the evolving tech landscape.",
    icon: React.createElement(LuGraduationCap),
    date: "Present - 2026",
  },
  {
    title: "Data Engineer",
    location: "Flow AI",
    description:
      "At Flow AI, I led a small, agile team focused on building and scaling data pipeline architecture for high-volume email processing. I was responsible for the end-to-end system design, ensuring seamless integration across components built with Python, Spark, Kafka, and Google Cloud Platform. We optimized large-scale data crawling by implementing batch API strategies, rate limiting, and OS-level pagination, reducing retrieval time by over 40%. My leadership emphasized modular design, fault-tolerant systems, and efficiency at scale — enabling robust event-driven workflows and minimizing manual intervention.",
    icon: React.createElement(CgWorkAlt),
    date: "November 2024 - February 2025",
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
    title: "IPL stats cluster",
    description:
      "Transforming and cleansing a raw sports league dataset to uncover key insights into player and team performances.",
    tags: [
      "Apache Spark",
      "SQL",
      "AWS",
      "Databricks",
      "Python",
      "PySpark", 
    ],
    imageUrl: iplStats,
    projLink: "https://github.com/pateldev02/ipl-stats-cluster/",
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
  
] as const;

export const skillsData = [
  "FastAPI", 
  "RestAPI",
  "Pandas",
  "Numpy",
  "Apache Kafka",
  "Apache Spark",
  "Node.js",
  "Socket.io",
  "React.js",
  "Next.js",
  "Hadoop",
  "Postman", 
  "DataBricks", 
  "Git",
  "Jupyter",
] as const;

export const languagesData = [
  "Python",
  "SQL",
  "JavaScript",
  "Java",
  
] as const;

export const cloudServicesData = [
  "AWS S3",
  "AWS EC2",
  "AWS VPC",
  "AWS Lambda",
  "AWS Athena",
  "AWS Glue",
  "AWS CloudWatch",
  "Google Cloud Storage"
  
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
