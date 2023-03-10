import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { accessTokenState } from '../../../commons/store'



export const useApollo = () => {
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState)

    useEffect(() => {
        const result = localStorage.getItem('accessToken')
        if (result) setAccessToken(result)
    }, [])
}