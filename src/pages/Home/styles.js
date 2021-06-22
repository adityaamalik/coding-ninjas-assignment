import styled from "styled-components";
import { Col } from "antd";

export const Container = styled.div`
  padding: 50px;
  background: #6441a5; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2a0845, #6441a5);
  background: linear-gradient(to right, #2a0845, #6441a5);

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

export const EventCol = styled(Col)`
  padding: 10px;
`;

export const NoEvents = styled.div`
  text-align: center;
`;
