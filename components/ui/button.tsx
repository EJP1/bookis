import React from "react";

export type ButtonProps = {
  size?: "sm";
  variant?: "primary";
};
const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(
  (
    { className, type = "button", disabled, children, variant, onClick },
    ref
  ) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={`p-2 text-sm ${
          variant === "primary"
            ? "bg-sky-600 text-white"
            : "bg-gray-200 text-black"
        }`}
      >
        {children}
      </button>
    );
  }
);
export default Button;
