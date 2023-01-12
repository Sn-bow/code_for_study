import BoardWrite from '../../../../src/components/units/board/09-write/BoardWrite.container'
//BoardWrite.container
import { useRouter } from 'next/router'
import { gql, useQuery } from '@apollo/client'

const FETCH_BOARD = gql`
query fetchBoard($number: Int){
    fetchBoard(number: $number){
      writer
      title
      contents
      like
    }
  }
`

const GraphqlMutationInputPage = () => {
    const route = useRouter()
    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            number: Number(route.query.number)
        }
    })


    return (
        <BoardWrite isEdit={true} data={data} />
    )
}

export default GraphqlMutationInputPage