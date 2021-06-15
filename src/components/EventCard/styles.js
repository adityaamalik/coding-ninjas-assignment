import styled from "styled-components";
import { Card, Col } from "antd";

export const CustomCard = styled(Card)`
  border-radius: 10px;
`;

export const EventInfoHeadingCol = styled(Col)`
  color: gray;
`;

export const EventInfoCol = styled(Col)`
  padding: 2px;
  font-size: 13px;
`;

export const ShortDescription = styled.p`
  color: gray;
`;

export const UserCount = styled.span`
  color: black;
  font-weight: bold;
`;

export const CoverImage = styled.div`
  position: relative;
`;

export const Tag = styled.div`
  font-size: 10px;
  float: left;
  position: absolute;
  right: 5px;
  bottom: 5px;
  z-index: 1000;
  background-color: white;
  padding: 5px;
  color: black;
  border-radius: 5px;
`;

export const Image = styled.img`
  width: inherit;
  border-radius: 10px !important;
`;
