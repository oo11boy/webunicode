import React from "react";

const ToHtml = ({ html }) => {
  return <div className="mainarticle" dangerouslySetInnerHTML={{ __html: html }} />;
};

export default ToHtml;