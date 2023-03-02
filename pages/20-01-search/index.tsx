import { gql, useQuery } from "@apollo/client"
import styled from '@emotion/styled'
import { ChangeEvent, MouseEvent, useState } from 'react'
import { IQuery, IQueryFetchBoardsArgs } from '../../src/commons/types/generated/types'

const FETCH_BOARDS = gql`
query fetchBoards($page: Int, $search: String){
    fetchBoards(page: $page, search: $search){
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


const StaticRoutedPage = () => {
    // <,> 에서 콤마(,)를 기준으로 왼쪽에 적는 타입형식이 {data} 의 타입형식이고,
    // 오른쪽은 variables 가 있을경우 해당 보내는 데이터들의 타입을 적는 곳이 콤마(,)기준 오른쪽이다.
    // 유틸리티 타입인 Pick 을 통해서 IQuery들중 'fetchBoards' 타입을 가지고 와서 {data} 의 타입으로 지정
    const { data, refetch } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS)
    // useQuery 에서 refetch() 함수를 가지고와 사용하게되면 mutation을 통해 refech를 하는것이 아닌 매번 새롭게 refetch를 할 수 있도록 하게 해준다.

    const mapArray = new Array(10).fill(1)
    console.log(mapArray)

    const paginationHandler = (e: MouseEvent<HTMLSpanElement>) => {
        void refetch({ page: Number(e.currentTarget.id) }) // 검색에서 refetch할때, 사용한 search  검색어가 저장되어있는 상태이므로 추가로 search 포함되지 않아도됨
    }

    // 기존의 방식으로는
    // const { data } = useQuery(FETCH_BOARDS, { variables: {page: 1} }) 과
    // const { data } = useMutation(CREATE_BOARD) -> const aaa = data({variables: {
    //  name: 'ds'   
    // }, refetchQuery: [FETCH_BOARDS] })
    // 와 같이 사용하여 Mutation에서 variables 로 데이터를 보냈을때 refetchQuery를 통해서 새롭게 받아올 데이터 QUERY를 정하여 렌더링을 하였다.

    // search 함수 & 스테이트
    const [search, setSearch] = useState('')

    const onClickSearch = () => {
        void refetch({ search, page: 1 })
    }

    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    return (
        <>
            검색어 입력 : <input type='text' onChange={onChangeSearch} />
            <button onClick={onClickSearch}>검색하기</button>

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