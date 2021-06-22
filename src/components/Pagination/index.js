import { Divider } from "antd";
import * as S from "./styles";

const Pagination = (props) => {
  return (
    <>
      <Divider orientation="center">
        Showing {props.currentPage} of {props.totalPages.length}
      </Divider>
      <S.PaginationContainer>
        {props.totalPages.map((page) => {
          return (
            <S.PaginationButton
              selected={props.currentPage === page}
              onClick={() => props.handlePageChange(page)}
              key={page}
            >
              {page}
            </S.PaginationButton>
          );
        })}
      </S.PaginationContainer>
    </>
  );
};

export default Pagination;
