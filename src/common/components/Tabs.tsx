import { ComponentType, ReactNode } from "react";

export const Tabs = ({
  children,
  buttons,
  ButtonsContainer = "menu",
}: {
  children: ReactNode;
  buttons: ReactNode;
  ButtonsContainer?: ComponentType<unknown> | keyof JSX.IntrinsicElements;
}) => {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
};
