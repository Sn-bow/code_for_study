import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from '../../../../commons/types/generated/types';
import { MouseEvent, useState } from 'react';
import { useMoveToPage } from '../../src/components/commons/hooks/useMoveToPage';

export default function BoardList() {
  const router = useRouter();
  const [pagiCount, setPagiCount] = useState(1)
  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);
  const { data: boardsCount } = useQuery<Pick<IQuery, 'fetchBoardsCount'>, IQueryFetchBoardsCountArgs>(FETCH_BOARDS_COUNT)

  const lastPage = Math.ceil(Number(boardsCount?.fetchBoardsCount) / 10)
  console.log(lastPage)

  const { onClickMoveToPage } = useMoveToPage();

  // const onClickMoveToBoardNew = () => {
  //   router.push("/boards/new");
  // };

  // const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
  //   router.push(`/boards/detail/${event.currentTarget.id}`);
  // };

  const pageRefetchHandler = async (pageNum: string) => {
    await refetch({ page: Number(pageNum) })
  }

  const nextPagiHandler = async () => {
    if (pagiCount + 10 <= lastPage) {
      setPagiCount(prv => prv + 10)
      await refetch({ page: pagiCount + 10 })
    }
  }

  const prevPagiHandler = async () => {
    if (pagiCount !== 1) {
      setPagiCount(prv => prv - 10)
      await refetch({ page: pagiCount + 10 })
    }
  }

  return (
    <BoardListUI
      data={data}
      // onClickMoveToBoardNew={onClickMoveToBoardNew}
      // onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickMoveToPage={onClickMoveToPage}
      pageRefetchHandler={pageRefetchHandler}
      pagiCount={pagiCount}
      nextPagiHandler={nextPagiHandler}
      prevPagiHandler={prevPagiHandler}
      lastPage={lastPage}
    />
  );
}
