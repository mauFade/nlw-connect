import type { ComponentProps, ReactNode } from "react";

interface PropsInterface extends ComponentProps<"button"> {
  children: ReactNode;
}

const Button = (props: PropsInterface) => {
  return (
    <button
      {...props}
      className="flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300"
    />
  );
};

export default Button;
