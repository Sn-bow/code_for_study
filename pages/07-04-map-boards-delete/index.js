import { gql, useQuery, useMutation } from "@apollo/client"
import styled from '@emotion/styled'

const FETCH_BOARDS = gql`
query{
    fetchBoards{
      number
      writer
      title
      contents
      like
    }
  }
`

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int){
    deleteBoard(number: $number){
        message
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
    const { data } = useQuery(FETCH_BOARDS)

    const [deleteBoard] = useMutation(DELETE_BOARD)

    console.log(data?.fetchBoards)

    const onClickDelete = (event) => {
        deleteBoard({
            variables: {
                number: Number(event.target.id)
            },
            refetchQueries: [{ query: FETCH_BOARDS }]
        })
    }

    return (
        <>
            {data?.fetchBoards.map(el =>
                <Row key={el.number}>
                    <Column><input type="checkbox" /></Column>
                    <Column>{el.number}</Column>
                    <Column>{el.title}</Column>
                    <Column>{el.contents}</Column>
                    <Column>
                        <button id={el.number} onClick={onClickDelete}>삭제</button>
                    </Column>
                </Row>
            )}
        </>
    )
}

export default StaticRoutedPage;