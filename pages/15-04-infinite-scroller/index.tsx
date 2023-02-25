import { gql, useQuery } from "@apollo/client"
import styled from '@emotion/styled'
import { IQuery, IQueryFetchBoardsArgs } from '../../src/commons/types/generated/types'
import InfiniteScroll from 'react-infinite-scroller'

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
    const { data, fetchMore } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS)

    const onLoadMore = async () => {
        if (data === undefined) return
        await fetchMore({
            variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (fetchMoreResult.fetchBoards === undefined) {
                    return {
                        fetchBoards: [...prev.fetchBoards]
                    }
                }
                return {
                    fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards]
                }
            }
        })
    }

    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={onLoadMore}
            // hasMore 는 다음 페이지가 있냐 없냐를 파악하고 트루일때만 다음 페이지를 불러온다
            hasMore={true}
        >
            {data?.fetchBoards.map(el =>
                <Row key={el._id}>
                    <Column>{el.writer}</Column>
                    <Column>{el.title}</Column>
                </Row>
            )}
        </InfiniteScroll>
    )
}

export default StaticRoutedPage;