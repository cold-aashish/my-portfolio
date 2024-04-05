import { useState } from "react";
import img1 from "../../public/assets/img/blog/blog-post-1.jpg";
import img2 from "../../public/assets/img/blog/blog-post-2.jpg";
import img3 from "../../public/assets/img/blog/blog-post-3.jpg";
import img4 from "../../public/assets/img/blog/blog-post-4.jpg";
import img5 from "../../public/assets/img/blog/blog-post-5.jpg";
import img6 from "../../public/assets/img/blog/blog-post-6.jpg";

const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: img1,
      title: "Unlocking Tomorrow: Computer Engineering's Dynamic Impact",
      commentor: "Aashish Risal ",
      date: "05 April 2024",
      tag: `artificial intellgence, computer, technology, advancement, design`,
      description1:"In the fast-paced world of tech, computer engineering emerges as a powerhouse, shaping the future with innovation and versatility. Spanning AI, quantum computing, and more, this interdisciplinary field blends diverse expertise to tackle intricate challenges, driving progress and possibility. ",
     description2:
        "Computer engineering's influence extends far beyond tech, revolutionizing sectors like healthcare, entertainment, and transportation. From autonomous vehicles to personalized medicine, its transformative solutions redefine industries, fostering growth and efficiency.",
      description3:
        "Yet, amidst this progress, ethical considerations like data privacy and AI ethics demand attention. By prioritizing responsible innovation, computer engineers ensure that advancements benefit society while upholding ethical standards.",
      description4:
        "In this thrilling journey, computer engineers hold the key to unlocking a future of endless potential. With their vision and expertise, they pioneer new horizons, shaping a tomorrow that is not just envisioned but actively shaped and optimized for a brighter, more connected world.",
    },
    {
      id: 2,
      img: img2,
      title: "Powering Digital Evolution: Programming & Web Development Insights",
      commentor: "Aashish Risal ",
      date: "05 April 2024",
      tag: `web development, programming, software engineering, technology`,
      description1:
     "In the digital age, programming and web development drive innovation, shaping online experiences with cutting-edge frameworks and technologies. From frontend marvels like React and Vue.js to backend prowess in serverless architecture, developers craft seamless, scalable solutions for businesses and users alike.",
      description2:
        "Programming and web development fuel business growth, with e-commerce, social media, and marketplaces relying on robust applications for success. Demand for skilled developers is high, as businesses seek to harness digital transformation for competitive advantage.",
      description3:
      "Yet, challenges persist, from cybersecurity to accessibility. Prioritizing secure coding and adhering to accessibility standards ensures inclusivity and safety in digital environments. Continuous learning is vital, keeping developers ahead in a fast-evolving landscape.",
     description4:
     "In summary, programming and web development are catalysts of digital progress, empowering businesses and shaping user experiences. With their expertise, developers forge a future of innovation and connectivity, driving the digital evolution forward.",
  },
    {
      id: 3,
      img: img3,
      title: "Demystifying Web Accessibility: Essential Insights for Inclusive Design",
      commentor: "Aashish Risal ",
      date: "05 April 2024",
      tag: `web, web accessibility, web security, web design, user-experience`,
      description1:
      "Web accessibility is the cornerstone of creating an inclusive digital environment, ensuring that websites are usable by everyone, regardless of disabilities or device limitations. Understanding the diverse needs of users is paramount, encompassing visual, auditory, motor, and cognitive impairments. By adhering to principles like perceivability, operability, understandability, and robustness, developers can craft websites that accommodate various accessibility needs, such as providing alternative text for images and implementing keyboard navigation.",
     description2:
     "Accessible websites not only cater to a broader audience but also enhance user experience for all visitors, leading to higher engagement and conversion rates. ",
      description3:
      "Demonstrating a commitment to accessibility can also bolster brand reputation, fostering trust and loyalty among consumers. By embracing web accessibility, businesses not only fulfill their moral duty but also tap into new markets, drive customer engagement, and strengthen their brand presence in the digital landscape.",
     description4:
  "In conclusion, web accessibility is a fundamental aspect of inclusive web design that benefits users, businesses, and society as a whole. By prioritizing accessibility principles, adhering to legal requirements, and embracing the benefits it offers, developers and businesses can create digital experiences that are truly inclusive and equitable for all. From improving user experience to expanding market reach and fostering brand loyalty, web accessibility is essential for building a more accessible and inclusive online world.",
    },
    {
      id: 4,
      img: img4,
      title: "Artificial Intelligence Through the Ages: History, Growth, and Influence",
      commentor: "Aashish Risal ",
      date: "05 April 2024",
      tag: `artificial intelligence, business, economy, design, technology`,
      description1:
      "The history of artificial intelligence (AI) is a compelling narrative spanning decades of innovation and growth. It began in the 1950s with visionaries like Alan Turing, who laid the foundation for machine intelligence through his groundbreaking Turing Test. Over the years, AI has evolved dramatically, fueled by advancements in computing, algorithms, and data availability.",
      description2:
      "Throughout its development, AI has reached significant milestones, from the creation of expert systems in the 1970s to the rise of neural networks in the 1980s. These breakthroughs paved the way for modern AI applications, transforming industries with capabilities such as machine learning, natural language processing, and computer vision.",
     description3:
     "Today, AI's influence is pervasive, touching nearly every aspect of modern life. Virtual assistants like Siri and Alexa have become household staples, while recommendation systems power personalized experiences on e-commerce platforms. Industries such as healthcare, finance, and transportation rely on AI for tasks ranging from diagnosing diseases to optimizing investment strategies.",
      description4:
      "Looking ahead, AI's potential for impact is immense, with technologies like deep learning poised to revolutionize fields such as personalized medicine and autonomous vehicles. However, as AI continues to advance, it's crucial to address ethical considerations such as algorithmic bias and societal impacts. By navigating these challenges responsibly, we can harness the full potential of AI to create a better future for all."
    },
    {
      id: 5,
      img: img5,
      title: "Crafting Tomorrow's Web: Cheap, Secure, Fast, and Modern Website Development",
      commentor: "Aashish Risal ",
      date: "5 April 2024",
      tag: `web development, website, security, design`,
      description1:
     "In today's digital age, having a dynamic online presence is essential for businesses and individuals alike. With the demand for websites that are not only affordable but also secure, fast, and modern, developers are constantly innovating to meet these needs.",
      description2:
   "Cheap website development doesn't mean sacrificing quality. With the availability of open-source platforms like WordPress and tools like Wix and Squarespace, creating a professional-looking website has never been more affordable. These platforms offer customizable templates and plugins, allowing users to build their dream website without breaking the bank.",
      description3:
  "Security is paramount in the online world, especially with the rise of cyber threats. Modern website development prioritizes security measures such as SSL certificates, firewalls, and regular security updates to safeguard against potential vulnerabilities. By implementing these measures, developers ensure that users can browse with confidence, knowing their data is protected.",
      description4:
 
 "In an era where speed is everything, fast website loading times are non-negotiable. Optimizing images, leveraging browser caching, and using content delivery networks (CDNs) are just a few techniques developers employ to enhance website performance. With a fast-loading website, businesses can provide users with a seamless browsing experience, reducing bounce rates and improving conversion rates. Modern website development goes beyond aesthetics; it's about creating user-centric experiences that resonate with visitors. From responsive design for mobile compatibility to intuitive navigation and engaging content, developers strive to deliver websites that captivate and convert. By staying abreast of the latest design trends and technologies, they ensure that websites remain relevant and impactful in an ever-changing digital landscape."
},
    {
      id: 6,
      img: img6,
      title: "Unleashing the Power of ReactJS and Next.js for Dynamic User Experiences",
      commentor: "Hasan ",
      date: "05 April 2024",
      tag: `web development, react, next, javascript, design, frontend`,
      description1:
    "ReactJS and Next.js stand as pillars in modern web development, offering powerful tools and functionalities that drive dynamic and responsive user experiences. ReactJS, a JavaScript library developed by Facebook, provides a robust framework for building interactive user interfaces. With its component-based architecture and virtual DOM rendering, ReactJS enables developers to create scalable and efficient web applications with ease. Next.js, a popular framework built on top of React, takes web development to the next level by providing server-side rendering, automatic code splitting, and simplified routing, streamlining the development process and enhancing performance.",
      description2:
    "One of the key advantages of ReactJS is its reusability and component-driven approach. By breaking down UI elements into reusable components, developers can efficiently manage and maintain complex applications, reducing code duplication and enhancing productivity. Additionally, React's declarative syntax and one-way data flow simplify the process of building and updating user interfaces, making it ideal for large-scale projects and collaborative development environments.",
      description3:
    "Next.js complements ReactJS by offering a comprehensive solution for building server-rendered React applications. With built-in support for server-side rendering and static site generation, Next.js improves performance and SEO, ensuring fast load times and optimal search engine visibility. Furthermore, Next.js provides intuitive routing capabilities and seamless integration with popular data fetching libraries like SWR, enabling developers to create dynamic and interactive web experiences effortlessly.",
      description4:
   "In conclusion, ReactJS and Next.js represent a dynamic duo in modern web development, empowering developers to create high-performance, scalable, and SEO-friendly web applications. With their component-based architecture, server-side rendering capabilities, and simplified development workflows, ReactJS and Next.js continue to redefine the standards of web development, driving innovation and excellence in the digital realm.",
    },
  ];

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
