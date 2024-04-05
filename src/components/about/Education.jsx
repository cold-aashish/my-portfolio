import React from "react";

const educationContent = [
  {
    year: "2023",
    degree: "BACHELOR DEGREE",
    institute: "TRIBHUWAN UNIVERSITY",
    details: `Achieved Bachelors degree in Computer Engineering from Tribhuwan University, Nepal`,
  },
  {
    year: "2018",
    degree: "COMPUTER ENGINEERING",
    institute: "KEC - TU",
    details: `Completed Bachelors degree in Engineering from Kantipur Engineering College affliated to Tribhuwan University in 2018.`,
  },
  {
    year: "2012",
    degree: "High-School",
    institute: "United Academy",
    details: `Completed High School at 2012 from United Academy, Lalitpur, Nepal`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
