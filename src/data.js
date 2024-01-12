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
import { Ebook, VR } from "./assets/img";
import ProfileImg1 from "./assets/img/ProfileImg1.svg";
import ProfileImg2 from "./assets/img/ProfileImg2.svg";
import ProfileImg3 from "./assets/img/ProfileImg3.svg";
import ProfileImg4 from "./assets/img/ProfileImg4.svg";
import ProfileImg5 from "./assets/img/ProfileImg5.svg";
import ProfileImg6 from "./assets/img/ProfileImg6.svg";
import Stars from "./assets/img/stars.png";
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

export const topics = [
  {
    id: 1,
    topicIcon: Ebook,
    topicTitle: "Ebooks",
    topicP: "Explore our collection of ebooks covering a wide spectrum of future technology topics.",
    textTitleb: "Variety of Topics",
    textTitlep: "Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).",
    Img: VR,
    totalSmall: "Total Ebooks",
    totalTopic: "Over 100 ebooks",
    downSmall: "Download Formats",
    downTopic: "PDF format for access.",
    autSmall: "Average Author Expertise",
    autToppic: "Ebooks are authored by renowned experts with an average of 15 years of experience"
  },
];


export const testimonial = [
  {
    id: 1,
    profileImg: ProfileImg1,
    profileName: "Sarah Thompson",
    profileLocation: "San Francisco, USA",
    rating: Stars,
    testimonial: "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated."
  },
  {
    id: 2,
    profileImg: ProfileImg2,
    profileName: "Raj Patel",
    profileLocation: "Mumbai, India",
    rating: Stars,
    testimonial: "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis."
  },
  {
    id: 3,
    profileImg: ProfileImg3,
    profileName: "Emily Adams",
    profileLocation: "London, UK",
    rating: Stars,
    testimonial: "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care."
  },
  {
    id: 4,
    profileImg: ProfileImg4,
    profileName: "Alan Jackson",
    profileLocation: "Houston, USA",
    rating: Stars,
    testimonial: "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view."
  },
  {
    id: 5,
    profileImg: ProfileImg5,
    profileName: "Jessica Miller",
    profileLocation: "Boston, USA",
    rating: Stars,
    testimonial: "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics."
  },
  {
    id: 6,
    profileImg: ProfileImg6,
    profileName: "Diego Lopez",
    profileLocation: "Barcelona, Spain",
    rating: Stars,
    testimonial: "The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability."
  },
]