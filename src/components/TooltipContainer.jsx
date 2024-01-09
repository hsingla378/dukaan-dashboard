import React, { useState } from "react";

const TooltipContainer = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative inline-block cursor-pointer"
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute bg-slate-700 text-white p-2 rounded-md min-w-[200px]">
          {text}
        </div>
      )}
    </div>
  );
};

export default TooltipContainer;
