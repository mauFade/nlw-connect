import type { ComponentProps, ReactNode } from "react";

interface InputRootPropsInterface extends ComponentProps<"div"> {
  error?: boolean;
}
export function InputRoot({
  error = false,
  ...props
}: InputRootPropsInterface) {
  return (
    <div
      {...props}
      data-error={error}
      className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger"
    />
  );
}

interface InputIconPropsInterface extends ComponentProps<"span"> {
  children: ReactNode;
}

export function InputIcon(props: InputIconPropsInterface) {
  return (
    <span
      className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
      {...props}
    />
  );
}

interface InputFieldPropsInterface extends ComponentProps<"input"> {
  error?: boolean;
}

export function InputField({
  error = false,
  ...props
}: InputFieldPropsInterface) {
  return (
    <input
      className="bg-transparent flex-1 outline-0 placeholder:text-gray-400"
      {...props}
    />
  );
}
