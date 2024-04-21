import React from 'react';

const Section = ({ children, id, className, customPadding }) => {
  return (
    <div
      className={`${className && className} ${customPadding && customPadding}`}
      id={id}
    >
      {children}
    </div>
  );
};

export default Section;
