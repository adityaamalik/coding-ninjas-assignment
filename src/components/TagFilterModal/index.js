import * as S from "./styles";
import { Modal } from "antd";
import { useState } from "react";

const TagFilterModal = (props) => {
  const [localTags, setLocalTags] = useState([]);
  return (
    <>
      <Modal
        centered
        footer={null}
        visible={props.tagFilterModalVisible}
        onCancel={props.closeTagFilterModal}
      >
        <h1>Select tags to filter</h1>
        {props.allTags.map((tag, index) => {
          return (
            <S.CustomButton
              key={index}
              selected={localTags.find((element) => element === tag)}
              onClick={() => {
                const isSelected = localTags.find((element) => element === tag);
                if (isSelected) {
                  const temp = localTags.filter((t) => t !== tag);
                  props.addTags(temp);
                  setLocalTags(temp);
                } else {
                  const temp = localTags;
                  temp.push(tag);
                  props.addTags(temp);
                  setLocalTags(temp);
                }
              }}
            >
              {tag}
            </S.CustomButton>
          );
        })}
      </Modal>
    </>
  );
};

export default TagFilterModal;
