import { HTMLAttributes, ReactNode } from "react";

export const Section = ({
  title,
  children,
  ...props
}: {
  title: string;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>) => {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
