import { useState, useEffect } from "react";
import * as S from "./styles.js";
import axios from "axios";
import EventCard from "../../components/EventCard/index.js";
import { Row } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import TagFilterButton from "../../components/TagFilterButton";
import TagFilterModal from "../../components/TagFilterModal";
import Heading from "../../components/Heading";
import MainEventSelection from "../../components/MainEventSelection";
import TimelineSelection from "../../components/TimelineSelection";
import Pagination from "../../components/Pagination";

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
      {/* tag filter button component */}
      <TagFilterButton
        openTagFilterModal={openTagFilterModal}
        closeTagFilterModal={closeTagFilterModal}
        tagFilterModalVisible={tagFilterModalVisible}
      />

      {/* tag filter modal component */}
      <TagFilterModal
        allTags={allTags}
        selectedTags={tagList}
        openTagFilterModal={openTagFilterModal}
        closeTagFilterModal={closeTagFilterModal}
        tagFilterModalVisible={tagFilterModalVisible}
        addTags={addTags}
      />

      {/* heading component */}
      <Heading />

      <S.EventsContainer>
        {/* main event category selection filter component */}
        <MainEventSelection
          setEventCategory={setEventCategory}
          setCurrentPage={setCurrentPage}
          eventCategory={eventCategory}
        />

        {/* timeline selection component */}
        <TimelineSelection
          setEventSubCategory={setEventSubCategory}
          setCurrentPage={setCurrentPage}
          eventSubCategory={eventSubCategory}
        />

        {/* loading events component */}
        {loading ? (
          <S.NoEvents>
            <LoadingOutlined style={{ fontSize: "30px" }} />
          </S.NoEvents>
        ) : (
          <>
            {/* if no event is found */}
            {events.length === 0 ? (
              <S.NoEvents>
                <h1>No Events</h1>
              </S.NoEvents>
            ) : (
              <Row>
                {/* mapping event card component */}
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

        {/* pagination component */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </S.EventsContainer>
    </S.Container>
  );
};

export default Home;
