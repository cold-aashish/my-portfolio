import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Aashish", hasColor: "" },
  { meta: "last name", metaInfo: "Risal", hasColor: "" },
  { meta: "Age", metaInfo: "28 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "Nepalese", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "Lalitpur-25", hasColor: "" },
  { meta: "phone", metaInfo: "+977-9861840708", hasColor: "" },
  { meta: "Email", metaInfo: "aashishrisal@gmail.com", hasColor: "" },
  { meta: "LinkedIn", metaInfo: "aashish.risal", hasColor: "" },
  { meta: "langages", metaInfo: "Nepali, Hindi , English", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
