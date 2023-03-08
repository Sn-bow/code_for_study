import { getDate } from "../../../commons/libraries/utils";
import PagiNation from '../../../commons/pagiNation/PagiNation';
import * as S from "./BoardList.styles";
import { IBoardListUIType } from './BoardList.type';

export default function BoardListUI(props: IBoardListUIType) {
  return (
    <>
      <S.Wrapper>
        <S.TableTop />
        <S.Row>
          <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
          <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
          <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
        </S.Row>
        {props.data?.fetchBoards.map((el, index) => (
          <S.Row key={el._id}>
            <S.ColumnBasic>
              {String(el._id).slice(-4).toUpperCase()}
            </S.ColumnBasic>
            <S.ColumnTitle id={el._id} onClick={props.onClickMoveToPage('/boards/new')}>
              {el.title}
            </S.ColumnTitle>
            <S.ColumnBasic>{el.writer}</S.ColumnBasic>
            <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
          </S.Row>
        ))}
        <S.TableBottom />
        <PagiNation
          pageRefetchHandler={props.pageRefetchHandler}
          pagiCount={props.pagiCount}
          nextPagiHandler={props.nextPagiHandler}
          prevPagiHandler={props.prevPagiHandler}
          lastPage={props.lastPage}
        />
        <S.Footer>
          <S.Button onClick={props.onClickMoveToBoardNew}>
            <S.PencilIcon src="/images/board/list/write.png" />
            게시물 등록하기
          </S.Button>
        </S.Footer>
      </S.Wrapper>
    </>
  );
}
