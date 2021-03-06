import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebOutlinedIcon from '@material-ui/icons/WebOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import { GitHub, Language, YouTube } from '@material-ui/icons';
export default {
    name: "Adebowale Oduwole",
    title: "Software Engineeer",

    // birthday: 'August 42th 1952',
    email: 'aoduwole7@gmail.com',

    socials: {
      //   Facebook: {
      //       link: 'https://www.facebook.com',
      //       text: 'Add on Facebook',
      //       icon: <FacebookIcon/>
      //    },

         // Twitter: {
         //    link: 'https://www.twitter.com',
         //    text: 'Follow on Twitter',
         //    icon: <TwitterIcon/>

         // },

         LinkdIn: {
            link: 'https://www.linkedin.com/in/adebowale-oduwole',
            text: 'Connect on LinkedIn',
            icon: <LinkedInIcon/>
         },

         GitHub: {
            link: 'https://www.github.com',
            text: 'View on Github',
            icon: <GitHubIcon/>
         },

    },

    about: "Hi! I am Debo Oduwole, a software developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2007. I enjoy creating beautifully designed, intuitive and functional websites For over past 8 years, I have worked for some of the best digital agencies and wonderful clients to create some award winning works. And, I can make this happen for your business as well.",
    
    experiences: [
       {
          title: 'Package Handler (United Parcel Service)',
          date: 'March-October 2019',
          description: '',
          
       },

       {
         title: 'Cook (Chick-Fil-A)',
         date: 'March-August 2018' ,
         description: 'Prepared menu items according to quality standards and managed multiple stations at a time while adhering to CFAs established food safety, food handling, and sanitation procedures.',
         
      },

      {
         title: 'Crew Member (Chick-Fil-A)',
         date: 'March 2016-November 2016',
         description: 'Managed deliveries &  inventory, followed proper record documentation and food handling procedures and ensured that any inventory issues are corrected. Coperateted with team members to maintain a clean customer facing areas both in and outside of the restaurant. Helped develop new employees to execute job duties according to the standards set by the company, training new hires, and conveying proper methods for executing kitchen essentials including: Cooking, Receiving &  Inventory Management,  according to standards set by the company',
         
      },

 ],



 education: [
   
   {
      title: 'Accelerate Atlanta',
      date: 'February 2021 - May 2021',
      description: 'Currently Participating in a x week, Azure Fundamentals Course, that includes a AZ-901 Certification',
      
   },


   {
      title: 'Digital Crafts - FullStack Immersive BootCamp',
      date: 'September 2020 -January 2021',
      description: 'Participated in a 16-week bootcamp, highlighting programming tech like: Python & Javascript',
      
   },


  {
     title: 'Point University - BS in Organizational Leadership',
     date: 'January 2013-Present',
     description: '60 of 120 credits earned in Bachelors program',
     
  }
],

services: [
   {
      title: 'Web Development',
      description: 'Experience with a Full-Stack range of Web Technologies, with Almost 8 years of experience in Development',
      icon: <WebOutlinedIcon />
   },

   {
      title: 'Photography',
      description: 'Photography experience shooting different events & behind the scenes productions',
      icon: <AssignmentOutlinedIcon />
   }
   

   // {
   //    title: 'Videography',
   //    description: 'WeDeliver your sites as quickly as possible',
   //    icon: <WebOutlinedIcon />
   // },
],

skills: [
   {title: "FRONT-END", description: [ "ReactJS", "JavaScript", "Material UI", 'Flexbox'],
},
   {title: "BACK-END", description: ["NodeJS", "Express", "Python"],
},

   {title: "Databases", description: ["Firebase", "SQL", "MongoDB"],
},

   {title: "Other", description: ["Git", "Github", "SCRUM/Agile"],
},

],


   projects: [
      {
         tag: "React",
         image: "https://i1.wp.com/static.web-backgrounds.net/uploads/2012/08/City_Landscape_Background.jpg",
         title: "React Project1",
         caption: "A short Description",
         description: " My Project description, feel free to contact me with any qestions",
         links: [
            { link: "https://www.google.com", icon: <YouTube /> },
            { link: "https://www.google.com", icon: <GitHub /> },
            { link: "https://www.google.com", icon: <Language /> },
         ],
      },

   

      {
         tag: "React",
         image: "https://i1.wp.com/static.web-backgrounds.net/uploads/2012/08/City_Landscape_Background.jpg",
         title: "React Project2",
         caption: "A short Description",
         description: " My Project description, feel free to contact me with any qestions",
         links: [
            { link: "https://www.google.com", icon: <YouTube /> },
            { link: "https://www.google.com", icon: <GitHub /> },
            { link: "https://www.google.com", icon: <Language /> },
         ],
      },


      {
         tag: "MERN",
         image: "https://i1.wp.com/static.web-backgrounds.net/uploads/2012/08/City_Landscape_Background.jpg",
         title: "MERN Project1",
         caption: "A short Description",
         description: " My Project description, feel free to contact me with any qestions",
         links: [
            { link: "https://www.google.com", icon: <YouTube /> },
            { link: "https://www.google.com", icon: <GitHub /> },
            { link: "https://www.google.com", icon: <Language /> },
         ],
      },


      {
         tag: "Firebase",
         image: "https://i1.wp.com/static.web-backgrounds.net/uploads/2012/08/City_Landscape_Background.jpg",
         title: "React-Firebase Project1",
         caption: "A short Description",
         description: " My Project description, feel free to contact me with any qestions",
         links: [
            { link: "https://www.google.com", icon: <YouTube /> },
            { link: "https://www.google.com", icon: <GitHub /> },
            { link: "https://www.google.com", icon: <Language /> },
         ],
      },
   ],

};



