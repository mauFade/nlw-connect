import type { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface PropsInterface extends ComponentProps<"button"> {
  children: ReactNode;
}

const IconButton = ({ className, ...props }: PropsInterface) => {
  return (
    <button
      className={twMerge(
        "p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300",
        className
      )}
      {...props}
    />
  );
};

export default IconButton;
