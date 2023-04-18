import {
    reactjs,
    nodejs,
    threejs,
    farmer1,
    farmer2,
    farmer3,
    somya,
    aditya,
    anurag,
    tushar,
    logo1,
    flutter,
    firebase
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Somya Parida",
      icon: somya,
    },
    {
      title: "Aditya Kumar",
      icon: aditya,
    },
    {
      title: "Anurag Singh",
      icon: anurag,
    },
    {
      title: "Tushar Gandhi",
      icon: tushar,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: flutter,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "fire base",
      icon: firebase,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
  ];
  
  const experiences = [
    {
      title: "Why We chose this Problem?",
      company_name: "current scenario",
      icon: logo1,
      iconBg: "#383E56",
      date: "",
      points: [
        "More than 50% of farmers in india are unaware  of modern technologies.",
        "30-40% farmers in indiaare currently suffering the problem of grain loss.",
        "RS.50,000 Crore worth approx, food grains are ruined every year",
        "64.4% people in rural india are acquainted with internet facilities.",
      ],
    },
    {
      title: "Solution",
      company_name: "Targeted Sector",
      icon: logo1,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "We will ease the farmers with the facilities to sell their grains on right time",
        "We build reliable,cost-effective,and high-speed logistics and infrastructure to solve for inefficiencies in the supply chain",
        "We will eliminate intermediaries by taking control of the supply chain by using technology and analytics",
        "We ensure that farmers get correct price for their produce whereas on the other side bulk gains required areas are also benefitted",
      ],
    },
    {
      title: "Features",
      company_name: "Management",
      icon: logo1,
      iconBg: "#383E56",
      date: "",
      points: [
        "This app will keep track of all the data regarding import and export of grains for future reference and analysis",
        "Maintain order of Priorities based on the requirements",
        "Well secured Finacial interface for farmers and buyers",
        "We are most accessible to the most fragmented parts of our society through this app",
        "Farmers can inform about their production through our app and send their live location",
        "Buyers will get to know about current availibility of grains in the market using statical data through our app"
      ],
    },
    {
      title: "Business Model",
      company_name: "Let's have a look to our revenue model",
      icon: logo1,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Subcription Based Priority Model.",
        "Revenue Through Transportaitons",
        "Partnership Programs with Industries",
        "Revenue through technical assistance",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "We hope to take this project further into the industry and release it for our intended target audience on the app store.",
      name: "somya parida",
      designation: "",
      company: "",
      image: somya,
    },
    {
      testimonial:
        "We will further expand our reach to pan INDIA through various compaign and awareness programmes in rural areas.",
        name:"Aditya kumar",
      designation: "",
      company: "",
      image: aditya,
    },
    {
      testimonial:
        "We will incorporate AI/ML into the project to make it more lucrative and personalized for the users.",
      name: "Anurag",
      designation: "",
      company: "",
      image: anurag,
    },
  ];
  
  const projects = [
    {

      description:
        "The Reason Why we are Running out of Farmers! The Information Gap between Farmers and Traders.More than 50% of farmers in india are unaware of modern technologies",
      
      image: farmer1,
    },
    {

      description:
        "Inability and price risk while distributing and trading of raw grains. 30-40% farmers in india are currently suffering the problem of gran loss why we feel this problem. can this be solved",
      
      image: farmer2,
    },
    {

      description:
        "Traditional Supply Chain is highly inefficient, Unorganized and has a high rate of grains wastage. 50,000 ruppes worth approx, food grains are ruined. unorganised sector mostly villages.",
      
      image: farmer3,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };