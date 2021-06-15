import styled from "styled-components";
import { Col } from "antd";

export const Container = styled.div`
  padding: 50px;
  background: #6441a5; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2a0845,
    #6441a5
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2a0845,
    #6441a5
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  @media only screen and (max-width: 1400px) {
    padding: 60px;
  }

  @media only screen and (max-width: 768px) {
    padding: 0px;
  }
`;

export const EventsContainer = styled.div`
  border-radius: 10px;
  padding: 20px;
  background-color: white;
`;

export const EventSelection = styled.div`
  margin: 10px;
`;

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

export const EventCol = styled(Col)`
  padding: 10px;
`;

export const HeadingContainer = styled.div`
  margin-bottom: 50px;
  padding-top: 20px;

  @media only screen and (max-width: 768px) {
    padding: 15px;
    padding-top: 50px;
    margin-bottom: 20px;
  }
`;

export const Heading = styled.h1`
  color: white;
`;

export const SubHeading = styled.h2`
  color: white;
`;

export const NoEvents = styled.div`
  text-align: center;
`;

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
