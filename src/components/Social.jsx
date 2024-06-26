import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-facebook",
    link: "https://www.facebook.com/aashishrisal",
  },
  { iconName: "fa fa-linkedin", link: "https://linkedin.com/profile/aashishrisal" },
  {
    iconName: "fa fa-youtube",
    link: "https://www.youtube.com/aashish-risal",
  },
  { iconName: "fa fa-instagram", link: "https://instagram.com/aashish.risal" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
