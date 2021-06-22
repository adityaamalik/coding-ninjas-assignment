import * as S from "./styles";
import { Row, Col } from "antd";

const Heading = () => {
  return (
    <S.HeadingContainer>
      <Row align="middle">
        <Col style={{ marginRight: "30px" }}>
          <img src="logo.svg" height="50px" alt="coding ninjas logo" />
        </Col>
        <Col>
          <S.Heading>EVENTS & NEWS</S.Heading>
          <S.SubHeading>LEARN, COMPETE & GROW </S.SubHeading>
        </Col>
      </Row>
    </S.HeadingContainer>
  );
};

export default Heading;
