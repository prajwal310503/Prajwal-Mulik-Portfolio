import CertificatesText from "./CertificatesText";
import SingleCertificate from "./SingleCertificate";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const Certificate = [
  {
    name: "MERN Stack Development",
    year: "May 2024",
    align: "right",
    image: "../../public/images/C1.jpg",
    link: "https://drive.google.com/file/d/12y8RWFdGtxYaMh-elat8Y6Kjzzhr-M5Z/view?usp=sharing",  // No actual link for this one
  },
  {
    name: "Advanced Software Engineering Job Simulation",
    year: "July 2024",
    align: "left",
    image: "../../public/images/C2.jpg",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Walmart%20USA/oX6f9BbCL9kJDJzfg_Walmart%20USA_pKyKK3oZTxgGCKt9W_1719812646251_completion_certificate.pdf",
  },
];

const CertificatesMain = () => {
  return (
    <div id="Certifications" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <CertificatesText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12 ">
        {Certificate.map((certificate, index) => {
          return (
            <SingleCertificate
              key={index}
              name={certificate.name}
              year={certificate.year}
              align={certificate.align}
              image={certificate.image}
              link={certificate.link}  // Pass the link here
            />
          );
        })}
      </div>
    </div>
  );
};

export default CertificatesMain;
