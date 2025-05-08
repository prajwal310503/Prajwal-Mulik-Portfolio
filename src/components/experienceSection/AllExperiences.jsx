import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Software Developer",
    company: "iResearh Services",
    date: "Sep 2024 - Present",
    responsibilities: [
      "Developed scalable web applications (LED & Survey Scape) for internal company use, enabling multiple departments to efficiently collect, store, filter, and deliver data to clients.",
      // "Designed responsive UIs with React.js, MUI, Redux, and React Router, enhancing user experience and accessibility.",
    ],
  },
  {
    job: "Frontend Developer Intern",
    company: "SkillUpward",
    date: "July 2024 - Aug 2024",
    responsibilities: [
     "Contributing to web app development and enhancing user interfaces.",
     "Collaborating with teams to optimize performance and usability.",
      
    ],
  },
  {
    job: "Digital Marketing intern",
    company: "SPRK Technologies",
    date: "Nov 2023 - Feb 2024",
    responsibilities: [
     "Optimized website content for SEO and managed social media to boost engagement.",
      "Created compelling video content and designed eye-catching posts in Canva, and Figma for events and festivals."
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between ">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
