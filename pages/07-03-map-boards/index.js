import { gql, useQuery } from "@apollo/client"
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

const Row = styled.div`
    display: flex;
`

const Column = styled.div`
    width: 25%;
`


const StaticRoutedPage = () => {
    const { data } = useQuery(FETCH_BOARDS)

    console.log(data?.fetchBoards)

    return (
        <>
            {data?.fetchBoards.map(el =>
                <Row>
                    <Column><input type="checkbox" /></Column>
                    <Column>{el.number}</Column>
                    <Column>{el.title}</Column>
                    <Column>{el.contents}</Column>
                </Row>
            )}
        </>
    )
}

export default StaticRoutedPage;