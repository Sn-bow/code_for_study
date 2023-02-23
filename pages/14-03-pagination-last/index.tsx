import { gql, useQuery } from "@apollo/client"
import styled from '@emotion/styled'
import { MouseEvent, useState } from 'react'
import { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from '../../src/commons/types/generated/types'

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

const FETCH_BOARDS_COUNT = gql`
query {
    fetchBoardsCount
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
    // <,> 에서 콤마(,)를 기준으로 왼쪽에 적는 타입형식이 {data} 의 타입형식이고,
    // 오른쪽은 variables 가 있을경우 해당 보내는 데이터들의 타입을 적는 곳이 콤마(,)기준 오른쪽이다.
    // 유틸리티 타입인 Pick 을 통해서 IQuery들중 'fetchBoards' 타입을 가지고 와서 {data} 의 타입으로 지정
    const { data, refetch } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS)
    // useQuery 에서 refetch() 함수를 가지고와 사용하게되면 mutation을 통해 refech를 하는것이 아닌 매번 새롭게 refetch를 할 수 있도록 하게 해준다.

    const { data: dataBoardCount } = useQuery<Pick<IQuery, 'fetchBoardsCount'>, IQueryFetchBoardsCountArgs>(FETCH_BOARDS_COUNT)

    const mapArray = new Array(10).fill(1)
    console.log(mapArray)

    const paginationHandler = (e: MouseEvent<HTMLSpanElement>) => {
        void refetch({ page: Number(e.currentTarget.id) })
    }

    // 전체게시글수 / 10
    const lastPage = (dataBoardCount != null) ? Math.ceil(dataBoardCount.fetchBoardsCount / 10) : 0

    const [pageCount, setPageCount] = useState(1)

    // 다음 페이지
    const pageNextCountHandler = () => {
        if (pageCount + 10 <= lastPage) {
            setPageCount(prv => prv + 10)
            void refetch({ page: pageCount + 10 })
        }
    }
    // 이전 페이지
    const pagePrevCountHandler = () => {
        if (pageCount !== 1) {
            setPageCount(prv => prv - 10)
            void refetch({ page: pageCount - 10 })
        }
    }

    return (
        <>
            {data?.fetchBoards.map(el =>
                <Row key={el._id}>
                    <Column>{el.writer}</Column>
                    <Column>{el.title}</Column>
                </Row>
            )}
            {/* <PageNum id='1' onClick={paginationHandler} > 1 </PageNum>
            <PageNum id='2' onClick={paginationHandler} > 2 </PageNum>
            <PageNum id='3' onClick={paginationHandler} > 3 </PageNum> */}
            <PageNum onClick={pagePrevCountHandler} >이전페이지</PageNum>
            {/* {
                mapArray.map((_, index) => {
                    if (index + pageCount <= lastPage) {
                        return (
                            <PageNum key={index} id={(index + pageCount).toString()} onClick={paginationHandler}>
                                {index + pageCount}
                            </PageNum>
                        )
                    } else {
                        return <span></span>
                    }

                }
                )
            } */}
            {
                mapArray.map((_, index) =>
                    index + pageCount <= lastPage && (
                        <PageNum
                            key={index}
                            id={(index + pageCount).toString()}
                            onClick={paginationHandler}
                        >
                            {index + pageCount}
                        </PageNum>
                    )
                )
            }
            <PageNum onClick={pageNextCountHandler}>다음페이지</PageNum>
        </>
    )
}

export default StaticRoutedPage;


