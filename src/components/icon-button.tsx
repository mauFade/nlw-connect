import type { ComponentProps, ReactNode } from "react";

interface PropsInterface extends ComponentProps<"button"> {
  children: ReactNode;
}

const IconButton = (props: PropsInterface) => {
  return (
    <button
      className="p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300"
      {...props}
    />
  );
};

export default IconButton;
