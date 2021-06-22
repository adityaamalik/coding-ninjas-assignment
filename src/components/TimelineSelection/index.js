import { Divider } from "antd";
import * as S from "./styles";

const TimelineSelection = (props) => {
  return (
    <>
      <Divider orientation="left">Timeline</Divider>
      <S.EventSelection>
        <S.CustomButton
          onClick={() => {
            props.setEventSubCategory("All Time Favorites");
            props.setCurrentPage(1);
          }}
          selected={props.eventSubCategory === "All Time Favorites"}
        >
          All Time Favourites
        </S.CustomButton>
        <S.CustomButton
          onClick={() => {
            props.setEventSubCategory("Upcoming");
            props.setCurrentPage(1);
          }}
          selected={props.eventSubCategory === "Upcoming"}
        >
          Upcoming
        </S.CustomButton>
        <S.CustomButton
          onClick={() => {
            props.setEventSubCategory("Archived");
            props.setCurrentPage(1);
          }}
          selected={props.eventSubCategory === "Archived"}
        >
          Archived
        </S.CustomButton>
      </S.EventSelection>
    </>
  );
};

export default TimelineSelection;
