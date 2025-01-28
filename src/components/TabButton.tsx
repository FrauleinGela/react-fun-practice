import { HTMLAttributes } from "react";

export const TabButton = ({
  isSelected,
  children,
  ...props
}: {
  isSelected: boolean;
  children: React.ReactNode;
} & HTMLAttributes<HTMLElement>) => {
  return (
    <button className={isSelected ? "active" : undefined} {...props}>
      {children}
    </button>
  );
};
