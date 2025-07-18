import {
  StyledPaginationButton,
  StyledPaginationContainer,
} from "./Pagination.styled";

type PaginationProps = {
  children: React.ReactNode;
};

const Root = ({ children }: PaginationProps) => (
  <StyledPaginationContainer>{children}</StyledPaginationContainer>
);

type PaginationButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};
const Button = ({ onClick, children }: PaginationButtonProps) => (
  <StyledPaginationButton onClick={onClick}>{children}</StyledPaginationButton>
);

const Pagination = {
  Root,
  Button,
};

export default Pagination;
