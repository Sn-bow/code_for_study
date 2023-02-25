import { gql, useQuery } from "@apollo/client"
import styled from '@emotion/styled'
import { useState } from 'react'
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


const StaticRoutedPage = () => {
    const [myIndex, setMyIndex] = useState<boolean[]>([false, false, false, false, false, false, false])

    const { data } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS)

    const onClickHandler = (index: number) => {
        const qqq = [...myIndex]
        qqq[index] = true
        setMyIndex(qqq)
    }

    return (
        <>
            {data?.fetchBoards.map((el, index) =>
                <div key={el._id}>
                    {!myIndex[index]
                        &&
                        <Row>
                            <Column>작성자 : {el.writer}</Column>
                            <Column>제목 : {el.title}</Column>
                            <button onClick={() => { onClickHandler(index); }}>수정하기</button>
                        </Row>
                    }
                    {
                        myIndex[index]
                        &&
                        <div>
                            수정할 내용 :  <input type='text' />
                        </div>
                    }
                </div>
            )}
        </>
    )
}

export default StaticRoutedPage;