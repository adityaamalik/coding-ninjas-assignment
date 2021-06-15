import * as S from "./styles";
import { FilterOutlined } from "@ant-design/icons";

const TagFilterButton = (props) => {
  return (
    <S.Up>
      <S.Button onClick={props.openTagFilterModal}>
        <FilterOutlined /> Filter by Tags
      </S.Button>
    </S.Up>
  );
};

export default TagFilterButton;
