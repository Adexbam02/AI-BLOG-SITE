// import { Latest, Expert, Global, Button } from "./assets/img/index";
import Latest from "./assets/img/Latest.svg";
import Expert from "./assets/img/Expert.svg";
import Global from "./assets/img/Global.svg";
import Button from "./assets/img/Button.png";
import User1 from "./assets/img/user1.png";
import User2 from "./assets/img/user2.png";
import User3 from "./assets/img/user3.png";
import Like from "./assets/img/like.svg";
import Comment from "./assets/img/comment.svg";
import Share from "./assets/img/share.svg";
// import Whitepaper from "./assets/img/whitepaper.svg";
// import Ebook from "./assets/img/ebook.svg";

export const navpaths = [
  {
    id: Math.random(),
    name: "Home",
    path: "/",
  },
  {
    id: Math.random(),
    name: "News",
    path: "/",
  },
  {
    id: Math.random(),
    name: "Podcasts",
    path: "/",
  },
  {
    id: Math.random(),
    name: "Resources",
    path: "/",
  },
];

export const point = [
  {
    id: 1,
    img: Latest,
    title: "Latest News Updates",
    small: "Stay Current",
    info: "Over 1,000 articles published monthly",
    Btn: Button,
  },
  {
    id: 2,
    img: Expert,
    title: "Expert Contributors",
    small: "Trusted Insights",
    info: "50+ renowned AI experts on our team",
    Btn: Button,
  },
  {
    id: 3,
    img: Global,
    title: "Global Readership",
    small: "Worldwide Impact",
    info: "2 million monthly readers",
    Btn: Button,
  },
];

export const featureTop = [
  {
    id: 1,
    title: "Quantity",
    small: "Over 1,000 articles on emerging tech trends and breakthroughs.",
  },
  {
    id: 2,
    title: "Variety",
    small: "Articles cover fields like AI, robotics, biotechnology, and more.",
  },
  {
    id: 3,
    title: "Frequency",
    small: "Fresh content added daily to keep you up to date.",
  },
  {
    id: 4,
    title: "Authoritative",
    small: "Written by our team of tech experts and industry professionals.",
  },
];

export const featureBottom = [
  {
    id: 1,
    title: "Depth",
    small: "500+ research articles for in-depth understanding.",
  },
  {
    id: 2,
    title: "Graphics",
    small: "Visual aids and infographics to enhance comprehension.",
  },
  {
    id: 3,
    title: "Trends",
    small: "Explore emerging trends in future technology research.",
  },
  {
    id: 4,
    title: "Contributors",
    small: "Written by our team of tech experts and industry professionals.",
  },
];

export const category = [
  {
    id: 1,
    text: "All",
    path: "/",
  },
  {
    id: 2,
    text: "Quantum Computing",
    path: "/",
  },
  {
    id: 3,
    text: "AI Ethics",
    path: "/",
  },
  {
    id: 4,
    text: "Space Exploration",
    path: "/",
  },
  {
    id: 5,
    text: "Biotechnology",
    path: "/",
  },
  {
    id: 5,
    text: "Renewable Energy",
    path: "/",
  },
];

export const post = [
  {
    id: 1,
    img: User1,
    name: "John Techson",
    // topic: "",
    category: "Quantum Computing",
    date: "October 15, 2023",
    title: "The Quantum Leap in Computing",
    desc: "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
    path: "/",
  },
  {
    id: 2,
    img: User2,
    name: "Sarah Ethicist",
    // topic: "",
    category: "AI Ethics",
    date: "November 5, 2023",
    title: "The Ethical Dilemmas of AI",
    desc: "A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
    path: "/",
  },
  {
    id: 3,
    img: User3,
    name: "Astronomer X",
    // topic: "",
    category: "Space Exploration",
    date: "December 10, 2023",
    title: "The Mars Colonization Challenge",
    desc: "Exploring the technical and logistical challenges of human colonization on Mars.",
    path: "/",
  },
];

export const action = [
  {
    id: 1,
    likeImg: Like,
    like: "0",
    commImg: Comment,
    comment: 0,
    shareImg: Share,
    share: 0,
  },
];

// export const topics = [
//   {
//     id: 1,
//     topicIcon: Ebook,
//     like: "0",
//     commImg: Comment,
//     comment: 0,
//     shareImg: Share,
//     share: 0,
//   },
// ];
