import React from "react";

const experienceContent = [
  {
    year: "   2019 - 2021",
    position: " UI/UX Developer",
    compnayName: "Info Developers Pvt. Ltd.",
    details: ` Started doing internship at 2019, and later worked for 1.5 years at this company specializing in UI/UX Development.`,
  },
  {
    year: "2021 - 2022",
    position: " UI/UX Designer",
    compnayName: "Caravan Tech",
    details: `Worked for 1 year as a UI/UX Designer at this company.`,
  },
  {
    year: "2023 - present",
    position: "Frontend Developer",
    compnayName: "Itbha International",
    details: `Started working at this company since 2023 December and specializing in Frontend Development using ReactJS, NextJS, and Laravel`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
