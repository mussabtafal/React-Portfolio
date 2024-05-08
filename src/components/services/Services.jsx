// import React from "react";
// import "../services/services.css";
// import { BiCheck } from "react-icons/bi";

// const Services = () => {
//   return (
//     <section id="services">
//       <h5>What I Offer</h5>
//       <h2>Services</h2>
//       <div className="container services__container">
//         <article className="service">
//           <div className="service__head">
//             <h3>UI/UX Design</h3>
//           </div>

//           <ul className="service__list">
//             <li>
//               <BiCheck className="service__list-icon" />
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//             </li>
//             <li>
//               <BiCheck className="service__list-icon" />
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//             </li>
//             <li>
//               <BiCheck className="service__list-icon" />
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//             </li>
//             <li>
//               <BiCheck className="service__list-icon" />
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//             </li>
//             <li>
//               <BiCheck className="service__list-icon" />
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//             </li>
//           </ul>
//         </article>
//         {/* END OF UI/UX */}
//         <article className="service">
//           <div className="service__head">
//             <h3>Web Development</h3>
//           </div>

//           <ul className="service__list">
//             <li>
//               <BiCheck className="service__list-icon" />
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//             </li>
//             <li>
//               <BiCheck className="service__list-icon" />
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//             </li>
//             <li>
//               <BiCheck className="service__list-icon" />
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//             </li>
//             <li>
//               <BiCheck className="service__list-icon" />
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//             </li>
//             <li>
//               <BiCheck className="service__list-icon" />
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//             </li>
//             <li>
//               <BiCheck className="service__list-icon" />
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//             </li>
//           </ul>
//         </article>
//         {/* END OF WEB DEVELOPMENT */}
//         <article className="service">
//           <div className="service__head">
//             <h3>Content Creation</h3>
//           </div>

//           <ul className="service__list">
//             <li>
//               <BiCheck className="service__list-icon" />
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//             </li>
//             <li>
//               <BiCheck className="service__list-icon" />
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//             </li>
//             <li>
//               <BiCheck className="service__list-icon" />
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//             </li>
//             <li>
//               <BiCheck className="service__list-icon" />
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//             </li>
//             <li>
//               <BiCheck className="service__list-icon" />
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//             </li>
//           </ul>
//         </article>
//         {/* END OF CONTENT CREATION*/}
//       </div>
//     </section>
//   );
// };

// export default Services;

import React from "react";
import ServiceCard from "./service-card/ServiceCard";
import "../services/services.css";

import { MdWeb } from "react-icons/md";
import { SiAltiumdesigner } from "react-icons/si";
import { MdEngineering } from "react-icons/md";

const Services = () => {
  const webDevServices = [
    "Custom website design and development",
    "Development of web-based applications tailored to specific business needs",
    "Regular updates and maintenance to ensure website security and performance",
    "Troubleshooting and bug fixing",
    "Assistance with content creation, including copywriting and multimedia production",
    "Consultation and Training",
    "Guidance and advice on technology choices and best practices",
  ];
  const uiUxServices = [
    "Conducting user interviews, surveys, and usability testing to understand user needs and preferences.",
    "Developing low-fidelity wireframes to outline the structure and layout of the interface.",
    "Designing visually appealing interfaces that align with brand identity and user expectations.",
    "Designing intuitive and efficient user workflows and interactions.",
    "Designing interactive elements and animations to enhance user engagement.",
    "Organizing content and navigation structures to facilitate easy access to information.",
    "Creating visually appealing layouts, color schemes, and typography choices.",
  ];
  const engineeringServices = [
    "Designing database structures, creating schemas, writing queries, and managing databases using technologies like SQL or NoSQL databases.",
    "Ensuring the quality and reliability of software through various testing techniques, including unit testing, integration testing, and user acceptance testing.",
    "Following agile methodologies like Scrum or Kanban to manage software development projects, emphasizing iterative development, collaboration, and flexibility.",
    "Software maintenance and support",
    "Technical documentation",
    "Research and development",
    "Education and training",
  ];

  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <ServiceCard
          icon={<MdWeb className="service__icon" />}
          title="Web Development"
          services={webDevServices}
        />
        <ServiceCard
          icon={<SiAltiumdesigner className="service__icon" />}
          title="UI/UX"
          services={uiUxServices}
        />
        <ServiceCard
          icon={<MdEngineering className="service__icon" />}
          title="Engineering"
          services={engineeringServices}
        />
      </div>
    </section>
  );
};

export default Services;
