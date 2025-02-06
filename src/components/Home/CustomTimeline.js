import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaLaptopCode, FaExternalLinkAlt , FaUniversity  } from 'react-icons/fa';
import { DiGoogleAnalytics } from "react-icons/di";
import { AiOutlineYoutube } from "react-icons/ai";
import { GiRetroController } from "react-icons/gi";

// Your provided timeline data
const timelineData = [
  {
    title: "Data Analyst",
    organization: "Velan Studios, Inc.",
    date: "September 2024 - Present",
    description: "Worked with the Development, Marketing, and Executive teams of Midnight Murder Club to analyze player behavior and guide the game's direction.",
  },
  {
    title: "Associate Instructor",
    organization: "Indiana University Bloomington",
    date: "August 2023 - May 2024",
    description: "Enhanced student comprehension and engagement in AI and software engineering courses, evidenced by a 97% median cohort score.",
  },  
  {
    title: "Master of Science in Computer Science",
    organization: "Indiana University Bloomington",
    date: "August 2022 - May 2024",
    description: "Secured a GPA of 3.97/4.0, focusing on AI, machine learning, and data engineering.",
  },
  {
    title: "Data Scientist",
    organization: "Accredian (formerly INSAID)",
    date: "March 2021 - April 2022",
    description: "Led a data science team to improve product usage by 30% and reduced technical support queries by 50% through extensive data analysis and machine learning.",
  },
  {
    title: "Founder and Creator",
    organization: "X-Zero Media",
    date: "August 2017 - August 2022",
    description: "Founded and Created Content for my YouTube channel which now has 50K+ subscribers and 29M+ views",
    link: "https://www.youtube.com/xzerogaming"
  },
  {
    title: "Bachelor of Engineering in Computer Engineering",
    organization: "University of Mumbai",
    date: "August 2016 - October 2020",
    description: "Secured a GPA of 8.25/10.0, specializing in big data analysis, software engineering, operating systems, and natural language processing.",
  }
];

// Icon mapping based on the role type
const iconMapping = {
  "Data Analyst": <GiRetroController />,
  "Associate Instructor": <FaLaptopCode />,
  "Master of Science in Computer Science": <FaUniversity />,
  "Data Scientist": <DiGoogleAnalytics />,
  "Founder and Creator": <AiOutlineYoutube/>,
  "Bachelor of Engineering in Computer Engineering": <FaGraduationCap />
};

const CustomTimeline = () => (
  <VerticalTimeline>
    {timelineData.map((item, index) => (
      <VerticalTimelineElement 
        key={index}
        className={`vertical-timeline-element--work`}
        contentStyle={{ background: 'rgb(122,	40,	40, 0.9)', color: '#fff' }}
        iconStyle={{ background: 'rgb(122,	40,	40)', color: '#fff' }}
        icon={iconMapping[item.title]}
      >
        <h2 style={{color: '#fff', fontWeight: '700', fontSize: '30px'}}>{item.title}</h2>
        <h3 className="vertical-timeline-element-subtitle" style={{fontSize: 20}}>{item.organization}</h3>
        <h3 style={{fontSize: 20}}>{item.date}</h3>
        <p style={{fontSize: 15}}>{item.description}</p>
        {item.link && (
          <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline', fontSize: 15 }}>
            Visit YouTube Channel <FaExternalLinkAlt style={{ marginLeft: '5px' }} />
          </a>
        )}
      </VerticalTimelineElement>
    ))}
  </VerticalTimeline>
);

export default CustomTimeline;
