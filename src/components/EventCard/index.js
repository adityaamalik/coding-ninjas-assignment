import * as S from "./styles";
import { Row, Tag, Avatar } from "antd";
import moment from "moment";
import { ExclamationCircleFilled } from "@ant-design/icons";

const EventCard = (props) => {
  const { event } = props;

  const eventDate = moment
    .unix(event.event_start_time)
    .format("h:mm A, Do MMM YYYY");

  const eventRegistrationDate = moment
    .unix(event.registration_end_time)
    .format("h:mm A, Do MMM YYYY");

  return (
    <>
      <S.CustomCard
        hoverable
        cover={
          <S.CoverImage>
            {!(event.registration_status === "PAST") && (
              <S.Tag>
                <span className="blink">
                  <ExclamationCircleFilled style={{ color: "red" }} />
                </span>{" "}
                <span style={{ color: "gray" }}>Registrations open till</span>{" "}
                {eventRegistrationDate}
              </S.Tag>
            )}

            <S.Image alt="event banner" src={event.mobile_cover_picture} />
          </S.CoverImage>
        }
      >
        <h3>{event.name}</h3>
        <br />
        <Row>
          <S.EventInfoHeadingCol span={8}>Starts on</S.EventInfoHeadingCol>
          <S.EventInfoHeadingCol span={8}>Entry fee</S.EventInfoHeadingCol>
          <S.EventInfoHeadingCol span={8}>Venue</S.EventInfoHeadingCol>
        </Row>
        <Row>
          <S.EventInfoCol span={8}>{eventDate}</S.EventInfoCol>
          <S.EventInfoCol span={8}>
            {event.fees === 0 ? "Free" : <>{event.currency + event.fees}</>}
          </S.EventInfoCol>
          <S.EventInfoCol span={8}>{event.venue}</S.EventInfoCol>
        </Row>
        <hr />
        <S.ShortDescription>{event.short_desc}</S.ShortDescription>
        <br />
        {event.card_tags.map((tag, index) => {
          return (
            <Tag color="volcano" key={index}>
              {tag}
            </Tag>
          );
        })}
        <br />
        <br />
        <Avatar.Group>
          {event.registered_users.show_users_count &&
            event.registered_users.top_users.map((user, index) => {
              return <Avatar key={index} src={user.image_url} />;
            })}
        </Avatar.Group>
        <br />
        {event.registered_users.show_users_count && (
          <S.ShortDescription>
            and{" "}
            <S.UserCount>
              {event.registered_users.other_users_count}
            </S.UserCount>{" "}
            others{" "}
            {event.registration_status === "PAST"
              ? "participated"
              : "are participating"}
          </S.ShortDescription>
        )}
      </S.CustomCard>
    </>
  );
};

export default EventCard;
