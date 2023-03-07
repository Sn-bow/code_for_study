import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    ApolloLink,

} from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { accessTokenState } from '../../../commons/store'


const GLOBAL_STATE = new InMemoryCache()

interface IApolloSettinPropsType {
    children: JSX.Element
}

const ApolloSetting = (props: IApolloSettinPropsType) => {
    const [accessToken, setAccesssToken] = useRecoilState(accessTokenState)

    // 프리렌더링 예제 - process.browser 방법
    if (process.browser) {
        // console.log('지금은 부라우저다.')
        // const result = localStorage.getItem("accessToken")
        // if (result) setAccesssToken(result)
    } else {
        // console.log('지금은 프론트엔드 서버이다. (yarn dev로 실행시킨 프로그램 내부다!!)')
        // const result = localStorage.getItem("accessToken")
        // if (result) setAccesssToken(result)
    }

    // 프리렌더링 예제 - typeof window 방법
    if (typeof window !== "undefined") {
        // console.log('지금은 부라우저다.')
        // const result = localStorage.getItem("accessToken")
        // if (result) setAccesssToken(result)
    } else {
        // console.log('지금은 프론트엔드 서버이다. (yarn dev로 실행시킨 프로그램 내부다!!)')
        // const result = localStorage.getItem("accessToken")
        // if (result) setAccesssToken(result)
    }

    // 프리렌더링 예제 = useEffect 방법 -> 프리렌더링을 무시
    useEffect(() => {
        const result = localStorage.getItem("accessToken")
        if (result) setAccesssToken(result)
    }, [])

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