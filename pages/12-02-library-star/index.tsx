import { Rate } from 'antd'
import styled from '@emotion/styled'

const Aaa = styled(Rate)`
    color: red;
`

const LibraryIconPage = () => {
    return (
        <>
            <Aaa count={5} defaultValue={2} />
        </>
    )
}

export default LibraryIconPage