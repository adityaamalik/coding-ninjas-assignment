import { useState, useEffect } from "react";
import * as S from "./styles.js";
import axios from "axios";
import EventCard from "../../components/EventCard/index.js";
import { Row, Divider, Col } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import TagFilterButton from "../../components/TagFilterButton";
import TagFilterModal from "../../components/TagFilterModal";

const Home = () => {
  const [eventCategory, setEventCategory] = useState("ALL_EVENTS");
  const [eventSubCategory, setEventSubCategory] = useState("Upcoming");
  const [tagList, setTagList] = useState([]);

  const [allTags, setAllTags] = useState([]);

  const [offSet] = useState(0);

  const [events, setEvents] = useState([]);

  const [loading, setLoading] = useState(false);

  const [tagFilterModalVisible, toggleTagFilterModal] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState([]);

  const openTagFilterModal = () => {
    toggleTagFilterModal(true);
  };

  const closeTagFilterModal = () => {
    toggleTagFilterModal(false);
  };

  const addTags = (tags) => {
    setTagList(tags);
    const stringTagList = tags.join();
    axios
      .get(
        `events?event_category=${eventCategory}&event_sub_category=${eventSubCategory}&tag_list=${stringTagList}&offset=${offSet}`
      )
      .then((response) => {
        setLoading(false);
        setEvents(response.data.data.events);
        const totalEvents = response.data.data.events.length;
        let tPages = parseInt(totalEvents / 10);
        if (totalEvents % 10 !== 0) {
          tPages++;
        }
        let temp = [];
        for (let i = 1; i <= tPages; i++) {
          temp.push(i);
        }
        setTotalPages(temp);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`event_tags`)
      .then((response) => {
        setAllTags(response.data.data.tags);
      })
      .catch((err) => {
        console.log(err);
      });

    const stringTagList = tagList.join();
    axios
      .get(
        `events?event_category=${eventCategory}&event_sub_category=${eventSubCategory}&tag_list=${stringTagList}&offset=${offSet}`
      )
      .then((response) => {
        setLoading(false);
        setEvents(response.data.data.events);
        const totalEvents = response.data.data.events.length;
        let tPages = parseInt(totalEvents / 10);
        if (totalEvents % 10 !== 0) {
          tPages++;
        }
        let temp = [];
        for (let i = 1; i <= tPages; i++) {
          temp.push(i);
        }
        setTotalPages(temp);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [eventSubCategory, eventCategory, offSet, tagList]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastEvents = currentPage * 10;
  const indexOfFirstEvents = indexOfLastEvents - 10;
  const currentEvents = events.slice(indexOfFirstEvents, indexOfLastEvents);

  return (
    <S.Container>
      <TagFilterButton
        openTagFilterModal={openTagFilterModal}
        closeTagFilterModal={closeTagFilterModal}
        tagFilterModalVisible={tagFilterModalVisible}
      />
      <TagFilterModal
        allTags={allTags}
        selectedTags={tagList}
        openTagFilterModal={openTagFilterModal}
        closeTagFilterModal={closeTagFilterModal}
        tagFilterModalVisible={tagFilterModalVisible}
        addTags={addTags}
      />

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

      <S.EventsContainer>
        <Divider orientation="left">Event Categories</Divider>
        <S.EventSelection>
          <S.CustomButton
            onClick={() => {
              setEventCategory("ALL_EVENTS");
              setCurrentPage(1);
            }}
            selected={eventCategory === "ALL_EVENTS"}
          >
            All Events
          </S.CustomButton>
          <S.CustomButton
            onClick={() => {
              setEventCategory("WEBINAR");
              setCurrentPage(1);
            }}
            selected={eventCategory === "WEBINAR"}
          >
            Webinars
          </S.CustomButton>
          <S.CustomButton
            onClick={() => {
              setEventCategory("CODING_EVENT");
              setCurrentPage(1);
            }}
            selected={eventCategory === "CODING_EVENT"}
          >
            Coding Events
          </S.CustomButton>
          <S.CustomButton
            onClick={() => {
              setEventCategory("BOOTCAMP_EVENT");
              setCurrentPage(1);
            }}
            selected={eventCategory === "BOOTCAMP_EVENT"}
          >
            Bootcamp Events
          </S.CustomButton>
          <S.CustomButton
            onClick={() => {
              setEventCategory("WORKSHOP");
              setCurrentPage(1);
            }}
            selected={eventCategory === "WORKSHOP"}
          >
            Workshop
          </S.CustomButton>
        </S.EventSelection>

        <Divider orientation="left">Timeline</Divider>
        <S.EventSelection>
          <S.CustomButton
            onClick={() => {
              setEventSubCategory("All Time Favorites");
              setCurrentPage(1);
            }}
            selected={eventSubCategory === "All Time Favorites"}
          >
            All Time Favourites
          </S.CustomButton>
          <S.CustomButton
            onClick={() => {
              setEventSubCategory("Upcoming");
              setCurrentPage(1);
            }}
            selected={eventSubCategory === "Upcoming"}
          >
            Upcoming
          </S.CustomButton>
          <S.CustomButton
            onClick={() => {
              setEventSubCategory("Archived");
              setCurrentPage(1);
            }}
            selected={eventSubCategory === "Archived"}
          >
            Archived
          </S.CustomButton>
        </S.EventSelection>

        {loading ? (
          <S.NoEvents>
            <LoadingOutlined style={{ fontSize: "30px" }} />
          </S.NoEvents>
        ) : (
          <>
            {events.length === 0 ? (
              <S.NoEvents>
                <h1>No Events</h1>
              </S.NoEvents>
            ) : (
              <Row>
                {currentEvents.map((event) => {
                  return (
                    <S.EventCol key={event.id} lg={8} md={12} sm={24} xs={24}>
                      <EventCard event={event} />
                    </S.EventCol>
                  );
                })}
              </Row>
            )}
          </>
        )}

        <Divider orientation="center">
          Showing {currentPage} of {totalPages.length}
        </Divider>
        <S.PaginationContainer>
          {totalPages.map((page) => {
            return (
              <S.PaginationButton
                selected={currentPage === page}
                onClick={() => handlePageChange(page)}
                key={page}
              >
                {page}
              </S.PaginationButton>
            );
          })}
        </S.PaginationContainer>
      </S.EventsContainer>
    </S.Container>
  );
};

export default Home;
