import { gql, useQuery } from "@apollo/client"
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { IQuery, IQueryFetchBoardArgs } from '../../../src/commons/types/generated/types'
import Dompurify from 'dompurify'

const FETCH_BOARD = gql`
query fetchBoard($boardId: ID!){
    fetchBoard(boardId: $boardId){
      writer
      title
      contents
    }
  }
`


const StaticRoutedPage = () => {
    const router = useRouter()

    if (typeof router.query.id !== 'string') return
    const boardId = router.query.id

    const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, {
        variables: {
            boardId
        }
    })

    // playground Xss 공격
    // <img src="#" onerror='console.log(localStorage.getItem(\'accessToken\'))' />


    return (
        <>
            <div>
                작성자 : {data?.fetchBoard.writer}
            </div>
            <div>
                제목 : {data?.fetchBoard.title}
            </div>
            {
                data
                &&
                typeof window !== 'undefined'
                &&
                <div>
                    {/* 내용 : {data?.fetchBoard.contents} */}
                    <div dangerouslySetInnerHTML={{ __html: Dompurify.sanitize(data?.fetchBoard.contents) }}>
                    </div>
                </div>
            }
        </>
    )
}

export default StaticRoutedPage;