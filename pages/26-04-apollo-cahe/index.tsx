import { gql, useMutation, useQuery } from "@apollo/client"
import styled from '@emotion/styled'
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

const DELETE_BOARD = gql`
    mutation deleteBoard($boardId: ID!){
        deleteBoard(boardId: $boardId)
    }
`

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!){
        createBoard(createBoardInput: $createBoardInput){
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
    const { data } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS)

    // cahe state 직접 수령하는 방법

    const [deleteBoard] = useMutation(DELETE_BOARD)
    const [createBoard] = useMutation(CREATE_BOARD)

    const onClickDelete = (boardId: string) => () => {
        void deleteBoard({
            variables: { boardId },
            // refetchQuries 가 아닌 cache 에서 데이터를 받아옴
            update(cache, { data }) {
                cache.modify({
                    fields: {
                        fetchBoards: (prev, { readField }) => {
                            const deletedId = data.deleteBoard // 삭제된 ID
                            const filteredPrev = prev.filter((el) => readField("_id", el) !== deletedId) // el._id 가 안되므로, readField를 사용해서 꺼내오기
                            return [...filteredPrev] // 삭제된 ID를 제외한 나머지 9개만 리턴
                        }
                    }
                })
            }
            // refetchQueries: [{query: FETCH_BOARDS}]
        })
    }

    const onClickCreate = () => {
        void createBoard({
            variables: {
                createBoardInput: {
                    writer: "영희",
                    password: '1234',
                    title: "제목입니다",
                    contents: "내용입니다"
                }
            },
            update(cache, { data }) {
                cache.modify({
                    fields: {
                        fetchBoards: (prev) => {
                            return [data.createBoard, ...prev]
                        }
                    }
                })
            }
            // refetchQueries: [{query: FETCH_BOARDS}]
        })
    }

    return (
        <>
            {data?.fetchBoards.map(el =>
                <Row key={el._id}>
                    <Column>{el.writer}</Column>
                    <Column>{el.title}</Column>
                    <button onClick={onClickDelete(el._id)}>삭제하기</button>
                </Row>
            )}
            <button onClick={onClickCreate}>등록하기</button>
        </>
    )
}

export default StaticRoutedPage;