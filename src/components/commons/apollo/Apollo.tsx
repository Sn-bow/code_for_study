import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

interface IApolloSettinPropsType {
    children: JSX.Element
}

const ApolloSetting = (props: IApolloSettinPropsType) => {
    const client = new ApolloClient({
        uri: 'http://practice.codebootcamp.co.kr/graphql',
        cache: new InMemoryCache() // 나중에 할거
    })

    return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}

export default ApolloSetting