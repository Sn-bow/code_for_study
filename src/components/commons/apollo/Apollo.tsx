import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    ApolloLink,

} from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { useRecoilState } from 'recoil'
import { accessTokenState } from '../../../commons/store'


const GLOBAL_STATE = new InMemoryCache()

interface IApolloSettinPropsType {
    children: JSX.Element
}

const ApolloSetting = (props: IApolloSettinPropsType) => {
    const [accessToken, setAccesssToken] = useRecoilState(accessTokenState)

    console.log(accessToken)
    const uploadFile = createUploadLink({
        uri: "http://backendonline.codebootcamp.co.kr/graphql",
        headers: { Authorization: `Bearer ${accessToken}` }
    })

    const client = new ApolloClient({
        link: ApolloLink.from([uploadFile]),
        cache: GLOBAL_STATE // 페이지 전환 (_app.tsx 리젠더) 되어도, 캐시 유지
    })

    return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}

export default ApolloSetting