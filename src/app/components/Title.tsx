import React from "react";

interface TitleProps {
  children: React.ReactNode;
  center?: boolean;
}
const Title = ({ children, center }: TitleProps) => {
  return (
    <div>
      <h2
        className={`title text-3xl font-extrabold after:bg-secondary relative  ${
          center ? "flex justify-center" : "text-justify"
        }`}
      >
        {children}
      </h2>
    </div>
  );
};

export default Title;
