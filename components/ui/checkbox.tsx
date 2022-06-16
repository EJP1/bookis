import React from "react";

export type ButtonProps = {
  size?: "sm";
  variant?: "primary";
};
const Button = React.forwardRef<
  HTMLInputElement,
  ButtonProps & React.ButtonHTMLAttributes<HTMLInputElement>
>(
  (
    { className, type = "button", disabled, children, variant, onClick },
    ref
  ) => {
    return (
      <input
        type="checkbox"
        ref={ref}
        onClick={onClick}
        className={`p-2 text-sm`}
      >
        {children}
      </input>
    );
  }
);
export default Button;
