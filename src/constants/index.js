import {
    mobile,
    creator,
    web,
    javascript,
    typescript,
    html,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    bookstore,
    searchPhoto,
    todoApp,
    customerList,
    blog,
    tip,
    php,
    firebase,
    materialui,
    sql,
    python
  } from "../assets";
 import ColorMode from "../components/ColorMode";
  
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
    {
      id: "cv",
      title: "CV"
    },
    {
      id: "certificates",
      title: "Certificates"
    },
    {

    }
  ];
  
  const services = [
    {
      title: "Fullstack Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Blog Writer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "SQL",
      icon: sql
    },
    {
      name: "Material UI",
      icon: materialui
    },
    {
      name: "Python",
      icon: python
    }
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company: "Freelance",
      date: "2022 - Present",
    },
    {
      title: "React Native Developer",
      company: "Freelance",
      date: "2022 - Present",
    },
    {
      title: "Fullstack Developer",
      company: "Freelance",
      date: "2022 - Present",
    },
    {
      title: "PHP Developer",
      company: "Freelance",
      date: "2023 - Present",
    },
    {
      title: "Blog Writer",
      company: "Freelance",
      date: "2022 - Present",
    },
  ];
  
  const testimonials = [
    {
     
    },
    {
      
    },
    {
     
    },
  ];
  
  const projects = [
    {
      name: "Photo search",
      description:
        `Web-based platform that allows users to search  for any photo online by just writtig the name of the photo. It uses the splash Api to call the 
        photo the user searches. You are able to see the description, name of the picture and the name of the photographer of every photo.`,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Material UI",
          color: "green-text-gradient",
        },
        {
          name: "API",
          color: "pink-text-gradient",
        },
      ],
      image: searchPhoto,
      source_code_link: "https://github.com/StanleyAnyas/search-photo-with-unsplash-api",
    },
    {
      name: "Todo App",
      description:
        `Web application that enables users to add todo and also put the time and date, the user can also tick the todo when it's done, 
        the also have the option to delete only the done todo or delete only the todo you and also have the option to delete all todo`,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Material UI",
          color: "pink-text-gradient",
        },
      ],
      image: todoApp,
      source_code_link: "https://github.com/StanleyAnyas/todo-app",
    },
    {
      name: "Bookstore",
      description:
        `A bookstore app the allows the user to put the name of the book, the author of the book, the price of the book and the ISBN of the book the wont want to list.
        The book is then stored in a database which in this case is firebase. The user has an option to delete the book the listed and by doing so it also deleted in firebase.`,
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Material UI",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: bookstore,
      source_code_link: "https://github.com/StanleyAnyas/Bookstore",
    },
    {
      name: "Costumers List",
      description:
        `A simply web app that allows user to add the name, email and phone number of a costumer the user has an option to delete and modify the details of the user. 
        This app was done with Pug and style with Bootstrap and also the backend with Node.js and express, the app is also secured with Helmet.`,
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "Pug",
          color: "pink-text-gradient",
        },
      ],
      image: customerList,
      source_code_link: "https://github.com/StanleyAnyas/customer-app-with-node.js-express-pug-bootstrap",
    },
    {
      name: "Blog page",
      description:
        `My blog page where I write about Tech and new technologies and also frameworks that could help develop applications faster and smoother, plus many more...`,
      tags: [
        {
          name: "WordPress",
          color: "blue-text-gradient",
        },
        {
          name: "AI",
          color: "green-text-gradient",
        },
      ],
      image: blog,
      source_code_link: "https://wordpress.com/posts/stananyas.code.blog",
    },
    {
      name: "Tip calculator",
      description:
        `A web application that calculates the tip in base of the price of food and how many people that have to divide the tip`,
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",

        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
      ],
      image: tip,
      source_code_link: "https://github.com/StanleyAnyas/Tip-calculator",
    },
  ];

  const certificates = [
    {
      name: "Javascript",
      institution: "freeCodeCamp",
      learnt: "Data structure and Algorithm.",
      image: javascript
    },
    {
      name: "React.js",
      institution: "Metropolia UAS Helsinki Finland",
      learnt: "Frontend development with React.js and styling with Material UI.",
      image: reactjs
    },
    {
      name: "Node.js",
      institution: "Metropolia UAS Helsinki Finland",
      learnt: "Backend development with Node.js and Express.js, Building RestAPI, using MongoDB to store data and retrive data, securing app with Helmet, styling with the CSS framework Bootstrap.",
      image: nodejs
    },
    {
      name: "Javascript",
      institution: "Metropolia UAS Helsinki Finland",
      learnt: "Basics of Javascript, complex features of Javascript, Algorithm.",
      image: javascript
    },
    {
      name: "Backend Development",
      institution: "freeCodeCamp",
      learnt: "Backend development",
      image: web
    },
    {
      name: "PHP",
      institution: "Metropolia UAS Helsinki Finland",
      learnt: "Basics of PHP, complex features of PHP, File handling, Database handling, Managing sessions, Managing cookies, Securing PHP, Building RestAPI, Managing permanent data with MySQL.",
      image: php
    }, 
    {
      name: "SQL and Relational Databases",
      institution: "Metropolia UAS Helsinki Finland",
      learnt: "Learnt how to create database, create table, insert data into table, update data in table, delete data in table, select data from table, join tables, aggregate functions, subqueries, views, stored procedures, triggers, transactions, indexes, user management, securing database.",
      image: sql
    }
  ]
  
  export { services, technologies, experiences, testimonials, projects, certificates };