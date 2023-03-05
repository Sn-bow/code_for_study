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

    const paginationHandler = (pageId: number) => (e: MouseEvent<HTMLSpanElement>) => {
        void refetch({ page: Number(pageId) })
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
                    <span key={index} onClick={paginationHandler(index + 1)}>
                        {index + 1}
                    </span>
                ))
            }
        </>
    )
}

export default StaticRoutedPage;
