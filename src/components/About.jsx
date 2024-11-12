import React from "react";
import {Tilt} from 'react-tilt';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] leading-[30px]'
      >
      Hi everyone!
      I am a professional in web and app development with over 4 years in Tech service sector. I have refined my strengths through my years of experience.
      🧱 About me & what I'm looking for:
      🌍 I'm open to roles in Nairobi County
      The following is a snapshot of my broader technical skills in: Laravel, PHP, Python, IOT, CodeIgniter, JavaScript, MySQL, Java, HTML5, XML, REST APIs, SOAP, Eclipse, Visual Studio, MS SQL Server, C, React, NPM, React Native, GIT, WordPress, Joomla, WIX, Shopify, Prestashop, Flutter, Android Studio, Linux, Docker, SQLite, Jira, New Relic, AJAX, jQuery, Socket.io, DevOps, Adobe Suite, CPANEL, Webmin, VPS, TypeScript, Bootstrap, Tailwind CSS, Material UI, PHPStorm, SEO, GraphQL APIs. USSD Programming, Bulk SMS Intergration, Payment Gateways Intergration, OOP PROGRAMMING, Nginx. Microsoft Azure, Amazon AWS, Alibaba Cloud, Digital Ocean, GitHub, Bitbucket, CentOS, Kubernetes (Kops, AWS EKS), SAAS Development
      ⭐️I've previously worked with Icerberg International Ltd
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");