/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Wes Devore",
  title: "Hi, I'm Wes",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with experience developing applications using Python / Django / JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1lCuYx7S-gxP4voG5t81k3nM3mK089NXr/view",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/GuruComposer",
  linkedin: "https://www.linkedin.com/in/wesley-devore-406484b2/",
  gmail: "wesleyadevore@gmail.com",
  facebook: "https://www.facebook.com/wes.devore/",
  stackoverflow: "https://stackoverflow.com/users/14700590/gurucoder",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly effective REST API pipelines for your data"),
    emoji(
      "⚡ Design beautiful interactive, logical and engaging user interfaces"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
  ],
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "University of Denver",
      logo: require("./assets/images/duLogo.png"),
      subHeader: "Bachelor of Music in Composition",
      duration: "September 2010 - April 2014",
      desc: "GPA: 3.96/4.0",
      descBullets: [
        "Summa Cum Laude",
        "Presser Scholar",
        "Phi Beta Kappa",
        "PI Kappa Lambda (Music Honor Society)",
      ],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Architecture", //Insert stack or technology you have experience in
      progressPercentage: "93%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/ Design",
      progressPercentage: "93%",
    },
    {
      Stack: "Complexity Analysis",
      progressPercentage: "93%",
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Composer, Audio Designer",
      company: "Aristocrat Technologies",
      companylogo: require("./assets/images/atiLogo.png"),
      date: "June 2018 – Present",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    {
      role: "Composer, Audio Designer",
      company: "Gimmie Games",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "GuruComposer", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Recent Projects",
  subtitle: "SOME WEBSITES THAT I'VE BUILT",
  projectCards: [
    {
      title: "Spotify Party Listening-Rooms",
      subtitle:
        "Full-stack Social Website - Sycnrhronize everyone's Spotify Players.",
      image: require("./assets/images/spotify.png"),
      footerLink: [
        // { name: "Live", url: "https://clone-41556.firebaseapp.com/" },
        {
          name: "GitHub",
          url: "https://github.com/GuruComposer/spotify-listening-rooms",
        },
      ],
    },
    {
      title: "Amazon-Clone",
      subtitle: "Full-stack Amazon E-Commerce Clone with checkout/ payments.",
      image: require("./assets/images/amazon.png"),
      footerLink: [
        { name: "Live", url: "https://clone-41556.firebaseapp.com/" },
        {
          name: "GitHub",
          url: "https://github.com/GuruComposer/amazon-clone",
        },
      ],
    },
    {
      title: "Twitter-Clone",
      subtitle: "Fully functioning Twitter-clone with REST API functionality.",
      image: require("./assets/images/twitterBirdLogo.png"),
      footerLink: [
        { name: "Live", url: "https://stark-hamlet-51192.herokuapp.com/" },
        {
          name: "GitHub",
          url: "https://github.com/GuruComposer/twitter-clone",
        },
      ],
    },
    {
      title: "Gmail-Clone",
      subtitle: "Fully functioning Email-Application REST API functionality.",
      image: require("./assets/images/gmailLogo.png"),
      footerLink: [
        { name: "Live", url: "https://myawesomegmailclone.herokuapp.com/" },
        { name: "GitHub", url: "https://github.com/GuruComposer/gmail-clone" },
      ],
    },
    {
      title: "eBay-Clone",
      subtitle:
        "Fully functioning eBay-Application with REST API functionality.",
      image: require("./assets/images/ebayLogo.png"),
      footerLink: [
        { name: "Live", url: "https://myawesomeebayclone.herokuapp.com/" },
        { name: "GitHub", url: "https://github.com/GuruComposer/eBay-clone" },
      ],
    },
  ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "Twitter-like social network website for making posts, editing posts, liking posts, following/ unfollowing users. All actions are saved to PostgreSQL database. Main technologies used: Python, Django, Javascript, JQuery, HTML, CSS.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
        },
        {
          name: "Award Letter",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing",
        },
        {
          name: "Google Code-in Blog",
          url:
            "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/",
        },
      ],
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(720) 459-0522",
  email_address: "wesleyadevore@gmail.com",
};

//Twitter Section

const twitterDetails = {
  userName: "wes_devore", //Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
