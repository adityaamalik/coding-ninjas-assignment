import styled from "styled-components";

export const PaginationContainer = styled.div`
  margin: 10px;
  text-align: center;
`;

export const PaginationButton = styled.button`
  padding: 10px;
  margin-right: 10px;
  cursor: pointer;
  border: 1px solid #c9711e;
  color: ${(props) => (props.selected ? "white" : "black")};
  background-color: ${(props) => (props.selected ? "#c9711e" : "white")};
  border-radius: 10px;

  &:hover {
    color: ${(props) => (props.selected ? "white" : "#c9711e")};
  }
`;
