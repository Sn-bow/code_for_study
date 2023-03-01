import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    ApolloLink,

} from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'

interface IApolloSettinPropsType {
    children: JSX.Element
}

const ApolloSetting = (props: IApolloSettinPropsType) => {

    const uploadFile = createUploadLink({
        uri: "http://backendonline.codebootcamp.co.kr/graphql",
    })

    const client = new ApolloClient({
        link: ApolloLink.from([uploadFile]),
        cache: new InMemoryCache() // 나중에 할거
    })

    return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}

export default ApolloSetting