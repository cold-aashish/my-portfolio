import React from "react";

const skillsContent = [
  { skillClass: "p85", skillPercent: "95", skillName: "HTML" },
  { skillClass: "p89", skillPercent: "89", skillName: "JAVASCRIPT" },
  { skillClass: "p90", skillPercent: "90", skillName: "CSS" },
  { skillClass: "p50", skillPercent: "50", skillName: "PHP" },
  { skillClass: "p95", skillPercent: "95", skillName: "WORDPRESS" },
  { skillClass: "p50", skillPercent: "50", skillName: "JQUERY" },
  { skillClass: "p25", skillPercent: "25", skillName: "ANGULAR" },
  { skillClass: "p75", skillPercent: "75", skillName: "REACT" },
  { skillClass: "p80", skillPercent: "80", skillName: "NEXT" },
  { skillClass: "p25", skillPercent: "25", skillName: "LARAVEL" },
  { skillClass: "p75", skillPercent: "75", skillName: "NODE" },
  { skillClass: "p35", skillPercent: "35", skillName: "SYMFONY" },


];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
