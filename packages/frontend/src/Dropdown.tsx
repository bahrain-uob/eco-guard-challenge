import React from "react";

interface DropdownProps {
    button: JSX.Element;
    children: JSX.Element;
    classNames: string;
    animation?: string; // Optional prop
  }
  
   

const Dropdown = (props : DropdownProps) => {
  const wrapperRef = React.useRef(null);
  const [openWrapper, setOpenWrapper] = React.useState(false);
  //useOutsideAlerter(wrapperRef, setOpenWrapper);
  const { button, children, classNames, animation } = props;
  return (
    <div ref={wrapperRef} className="relative flex">
      <div className="flex" onMouseDown={() => setOpenWrapper(!openWrapper)}>
        {button}
      </div>
      <div
        className={`${classNames} absolute z-10 ${
          animation
            ? animation
            : "origin-top-right transition-all duration-300 ease-in-out"
        } ${openWrapper ? "scale-100" : "scale-0"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
