import styled from "@emotion/styled";

const StyledButton = styled.button``;

export interface ButtonProps {
  children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  return <StyledButton type="button" {...props} />;
};
