import { Divider } from "antd";
import * as S from "./styles";

const EventSelection = (props) => {
  return (
    <>
      <Divider orientation="left">Event Categories</Divider>
      <S.EventSelection>
        <S.CustomButton
          onClick={() => {
            props.setEventCategory("ALL_EVENTS");
            props.setCurrentPage(1);
          }}
          selected={props.eventCategory === "ALL_EVENTS"}
        >
          All Events
        </S.CustomButton>
        <S.CustomButton
          onClick={() => {
            props.setEventCategory("WEBINAR");
            props.setCurrentPage(1);
          }}
          selected={props.eventCategory === "WEBINAR"}
        >
          Webinars
        </S.CustomButton>
        <S.CustomButton
          onClick={() => {
            props.setEventCategory("CODING_EVENT");
            props.setCurrentPage(1);
          }}
          selected={props.eventCategory === "CODING_EVENT"}
        >
          Coding Events
        </S.CustomButton>
        <S.CustomButton
          onClick={() => {
            props.setEventCategory("BOOTCAMP_EVENT");
            props.setCurrentPage(1);
          }}
          selected={props.eventCategory === "BOOTCAMP_EVENT"}
        >
          Bootcamp Events
        </S.CustomButton>
        <S.CustomButton
          onClick={() => {
            props.setEventCategory("WORKSHOP");
            props.setCurrentPage(1);
          }}
          selected={props.eventCategory === "WORKSHOP"}
        >
          Workshop
        </S.CustomButton>
      </S.EventSelection>
    </>
  );
};

export default EventSelection;
