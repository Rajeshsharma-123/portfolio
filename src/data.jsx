import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
    FaBloggerB,
  } from 'react-icons/fa';
  import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';
  
  import Work1 from './assets/project-1.jpg';
  import Work2 from './assets/project-2.webp';
  import Work3 from './assets/project-3.jpg';

  import Hook from './assets/Hooks.jpg' ;
  import Grid from './assets/grid.jpg';
  import closure from './assets/closures.jpg';
  import version from './assets/github.png'
  
  import Theme1 from './assets/purple.png';
  import Theme2 from './assets/red.png';
  import Theme3 from './assets/blueviolet.png';
  import Theme4 from './assets/blue.png';
  import Theme5 from './assets/goldenrod.png';
  import Theme6 from './assets/magenta.png';
  import Theme7 from './assets/yellowgreen.png';
  import Theme8 from './assets/orange.png';
  import Theme9 from './assets/green.png';
  import Theme10 from './assets/yellow.png';
  
  export const links = [
    {
      id: 1,
      name: 'Home',
      icon: <FaHome className='nav__icon' />,
      path: '/',
    },
  
    {
      id: 2,
      name: 'About',
      icon: <FaUser className='nav__icon' />,
      path: '/about',
    },
  
    {
      id: 3,
      name: 'Portfolio',
      icon: <FaFolderOpen className='nav__icon' />,
      path: '/portfolio',
    },
  
    {
      id: 4,
      name: 'Blogs',
      icon: <FaBloggerB className='nav__icon' />,
      path: '/blog',
    },
  
    {
      id: 5,
      name: 'Contact',
      icon: <FaEnvelopeOpen className='nav__icon' />,
      path: '/contact',
    },
  
   
  ];
  
  export const personalInfo = [
    {
      id: 1,
      title: 'First Name : ',
      description: 'Rajesh',
    },
  
    {
      id: 2,
      title: 'Last Name : ',
      description: 'Sharma',
    },
  
    {
      id: 3,
      title: 'Age : ',
      description: '20 Years',
    },
  
    {
      id: 4,
      title: 'Nationality : ',
      description: 'Nepali',
    },
  
    {
      id: 5,
      title: 'Freelance : ',
      description: 'Available',
    },
  
    {
      id: 6,
      title: 'Address : ',
      description: 'Butwal',
    },
  
    {
      id: 7,
      title: 'Phone : ',
      description: '+977-9807464548',
    },
  
    {
      id: 8,
      title: 'Email : ',
      description: 'raj9807464548@gmail.com',
    },
  
    
  
    {
      id: 10,
      title: 'Langages : ',
      description: 'Nepali, English, Hindi, Aawadhi',
    },
  ];
  
  export const stats = [
    {
      id: 1,
      no: 'Fresher',
      title: 'Years of <br /> Experience',
    },
  
    {
      id: 2,
      no: '50+',
      title: 'Completed <br /> Projects',
    },
  
    {
      id: 3,
      no: '10+',
      title: 'Happy <br /> Customers',
    },
  
   
  ];
  
  export const resume = [
    
  
    {
      id: 1,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2020',
      title: '10th Complete <span> NEB </span>',
      desc: `Completed secondary education with a focus on science and mathematics, establishing a solid academic foundation. Demonstrated strong problem-solving abilities and a keen interest in analytical subjects, laying the groundwork for future technical studies.`,
    },
  
    {
      id: 2,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2021-2022',
      title: '12th Complete <span> NEB </span>',
      desc: 'Graduated with a specialization in the science stream, focusing on physics, chemistry, and mathematics. Enhanced critical thinking and quantitative skills, preparing for rigorous engineering coursework, and developed a disciplined approach to tackling complex academic challenges.',
    },
  
    {
      id: 3,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2023-2027(expected)',
      title: 'B.E Computer Engineering <span> Institute of Engineering </span>',
      desc: 'Currently pursuing a Bachelor’s degree in Computer Engineering, acquiring comprehensive knowledge in programming, software development, and data structures. Engaged in practical learning through projects and labs, building a skill set in algorithm design, coding, and technical problem-solving to drive innovation in the tech industry.',
    },
  ];
  
  export const skills = [
    {
      id: 1,
      title: 'Html',
      percentage: '80',
    },
  
    {
      id: 2,
      title: 'Javascript',
      percentage: '89',
    },
  
    {
      id: 3,
      title: 'Css',
      percentage: '70',
    },
  
    {
      id: 4,
      title: 'Tailwind',
      percentage: '66',
    },
  
    {
      id: 5,
      title: 'Git & GitHub',
      percentage: '95',
    },
  
    {
      id: 6,
      title: 'C',
      percentage: '50',
    },
  
    {
      id: 7,
      title: 'React js',
      percentage: '65',
    },
  
    {
      id: 8,
      title: 'C++',
      percentage: '74',
    },
  ];
  
  export const portfolio = [
    {
      id: 1,
      img: Work1,
      title: 'Employee Dashboard <br/> Click Here to Learn More!',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Photo',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'private company',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'React js',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'employeedashboard-psi.vercel.app',
          link: true
        },
      ],
    },
  
    {
      id: 2,
      img: Work2,
      title: 'Ecommerce App <br/> Click Here to Learn More!',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Website',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'private store',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'javascript',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'shopwaveecoms.netlify.app',
          link: true
        },
      ],
    },
  
    {
      id: 3,
      img: Work3,
      title: 'Open Weather App <br/> Click Here to Learn More!',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Video',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Weather Department',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Javascript',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'onlineweatherjsx.netlify.app',
          link:true
  
        },
      ],
    },
  
  ];
  
  export const themes = [
    {
      id: 1,
      img: Theme1,
      color: 'hsl(252, 35%, 51%)',
    },
  
    {
      id: 2,
      img: Theme2,
      color: 'hsl(4, 93%, 54%)',
    },
  
    {
      id: 3,
      img: Theme3,
      color: 'hsl(271, 76%, 53%)',
    },
  
    {
      id: 4,
      img: Theme4,
      color: 'hsl(225, 73%, 57%)',
    },
  
    {
      id: 5,
      img: Theme5,
      color: 'hsl(43, 74%, 49%)',
    },
  
    {
      id: 6,
      img: Theme6,
      color: 'hsl(339, 81%, 66%)',
    },
  
    {
      id: 7,
      img: Theme7,
      color: 'hsl(80, 61%, 50%)',
    },
  
    {
      id: 8,
      img: Theme8,
      color: 'hsl(19, 96%, 52%)',
    },
  
    {
      id: 9,
      img: Theme9,
      color: 'hsl(88, 65%, 43%)',
    },
  
    {
      id: 10,
      img: Theme10,
      color: 'hsl(42, 100%, 50%)',
    },
  ];


  export const blogs = [
    {
      id: 1,
      title: 'Exploring React Hooks',
      date: 'November 1, 2023',
      content:
        'React hooks have revolutionized the way we write functional components...',
      image: Hook,
    },
    {
      id: 2,
      title: 'Understanding JavaScript Closures',
      date: 'October 15, 2023',
      content:
        'Closures are a fundamental concept in JavaScript, enabling functions to...',
      image: closure,
    },
    {
      id: 3,
      title: 'CSS Grid vs Flexbox',
      date: 'September 25, 2023',
      content:
        'CSS Grid and Flexbox are powerful layout systems. Knowing when to use...',
      image: Grid,
    },

    {
      id: 4,
      title: 'version controls',
      date: 'September 25, 2024',
      content:
        'Version control systems like Git, along with platforms like GitHub, enable multiple users to track, manage, and collaborate on code changes efficiently, ensuring code integrity and streamlined project workflows.',
      image: version,
    },
  ];
  
  
  