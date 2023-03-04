import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    ApolloLink,

} from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'


const GLOBAL_STATE = new InMemoryCache()

interface IApolloSettinPropsType {
    children: JSX.Element
}

const ApolloSetting = (props: IApolloSettinPropsType) => {

    const uploadFile = createUploadLink({
        uri: "http://backendonline.codebootcamp.co.kr/graphql",
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