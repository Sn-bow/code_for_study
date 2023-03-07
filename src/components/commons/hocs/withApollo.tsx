import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { accessTokenState } from '../../../commons/store'

export const withApollo = (Component: any) => (props: any) => {
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

    return (
        <Component {...props} />
    )
}