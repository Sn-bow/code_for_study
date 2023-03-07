import { gql, useQuery } from "@apollo/client"
import styled from '@emotion/styled'
import { MouseEvent } from 'react'
import { IQuery, IQueryFetchBoardsArgs } from '../../src/commons/types/generated/types'

const FETCH_BOARDS = gql`
query fetchBoards($page: Int){
    fetchBoards(page: $page){
      _id
      writer
      title
      contents
    }
  }
`

const Row = styled.div`
    display: flex;
`

const Column = styled.div`
    width: 25%;
`

const PageNum = styled.span`
    font-size: 25px;
    margin-right: 15px;

    &:hover {
        cursor: pointer;
    }
`


const StaticRoutedPage = () => {
    const { data, refetch } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS)

    const mapArray = new Array(10).fill(1)
    console.log(mapArray)

    //                          index + 1               event
    const paginationHandler = (boardId: number) => (e: MouseEvent<HTMLSpanElement>) => {
        void refetch({ page: Number(boardId) })
    }

    return (
        <>
            {data?.fetchBoards.map(el =>
                <Row key={el._id}>
                    <Column>{el.writer}</Column>
                    <Column>{el.title}</Column>
                </Row>
            )}
            {
                mapArray.map((_, index) => (
                    // paginationHandler(index + 1)(event)  / closer HOF 을 사용하면 예상치 못한 에러를 잡을 수 있다.
                    <span key={index} onClick={paginationHandler(index + 1)}>
                        {index + 1}
                    </span>
                ))
            }
        </>
    )
}

export default StaticRoutedPage;


// const aaa = (apple) => {

// }

// aaa(10)

// pageinationHandler(event)