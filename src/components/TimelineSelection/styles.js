import styled from "styled-components";

export const CustomButton = styled.button`
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 5px;
  cursor: pointer;
  border: 1px solid #c9711e;
  color: ${(props) => (props.selected ? "white" : "black")};
  background-color: ${(props) => (props.selected ? "#c9711e" : "white")};
  border-radius: 10px;

  &:hover {
    color: ${(props) => (props.selected ? "white" : "#c9711e")};
  }
`;

export const EventSelection = styled.div`
  margin: 10px;
`;
