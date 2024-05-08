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
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <ServiceCard
          icon={<MdWeb className="service__icon"/>}
          title="Web Development"
          services={["test", "test1", "test2"]}
        />
        <ServiceCard
          icon={<SiAltiumdesigner className="service__icon"/>}
          title="UI/UX"
          services={["test3", "test4", "test5"]}
        />
        <ServiceCard
          icon={<MdEngineering className="service__icon"/>}
          title="Engineering"
          services={["test", "test1", "test2"]}
        />
      </div>
    </section>
  );
};

export default Services;
