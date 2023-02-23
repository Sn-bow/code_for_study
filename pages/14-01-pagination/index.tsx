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
    // <,> 에서 콤마(,)를 기준으로 왼쪽에 적는 타입형식이 {data} 의 타입형식이고,
    // 오른쪽은 variables 가 있을경우 해당 보내는 데이터들의 타입을 적는 곳이 콤마(,)기준 오른쪽이다.
    // 유틸리티 타입인 Pick 을 통해서 IQuery들중 'fetchBoards' 타입을 가지고 와서 {data} 의 타입으로 지정
    const { data, refetch } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS)
    // useQuery 에서 refetch() 함수를 가지고와 사용하게되면 mutation을 통해 refech를 하는것이 아닌 매번 새롭게 refetch를 할 수 있도록 하게 해준다.

    const mapArray = new Array(10).fill(1)
    console.log(mapArray)

    const paginationHandler = (e: MouseEvent<HTMLSpanElement>) => {
        void refetch({ page: Number(e.currentTarget.id) })
    }

    // 기존의 방식으로는
    // const { data } = useQuery(FETCH_BOARDS, { variables: {page: 1} }) 과
    // const { data } = useMutation(CREATE_BOARD) -> const aaa = data({variables: {
    //  name: 'ds'   
    // }, refetchQuery: [FETCH_BOARDS] })
    // 와 같이 사용하여 Mutation에서 variables 로 데이터를 보냈을때 refetchQuery를 통해서 새롭게 받아올 데이터 QUERY를 정하여 렌더링을 하였다.

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
            {
                mapArray.map((_, index) => (
                    <span key={index} id={(index + 1).toString()} onClick={paginationHandler}>
                        {index + 1}
                    </span>
                ))
            }
        </>
    )
}

export default StaticRoutedPage;