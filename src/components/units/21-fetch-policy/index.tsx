import { gql, useQuery } from '@apollo/client'
import { IQuery, IQueryFetchBoardsArgs } from '../../../commons/types/generated/types'

const FETCH_BOARDS = gql`
    query fetchBOards {
        fetchBoards {
            _id
            writer
            title
            contents
        }
    }
`

export default function FetchPolicyExample() {
    const { data } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS)

    return (
        <div>
            {data?.fetchBoards.map(el => (
                <div key={el._id}>{el.title}</div>
            ))}
        </div>
    )
}