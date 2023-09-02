import React from "react";
import { VscFeedback } from "react-icons/vsc";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-4 bg-blue-900 text-white">
      <p className="flex items-center justify-center">
        <VscFeedback className="h-8 w-8 mr-2" size={15} />
        <span>Feedback</span> &copy; 2023
      </p>
    </footer>
  );
};

export default Footer;
