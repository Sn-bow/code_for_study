import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { IQuery } from '../../src/commons/types/generated/types'

const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn {
        fetchUserLoggedIn{
            _id
            email
            name
        }
    }
`


export default function LoginSuccessPage() {
    const { data } = useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN)
    const router = useRouter()

    if (typeof window !== 'undefined' && !localStorage.getItem('accessToken'))

        useEffect(() => {
            if (!localStorage.getItem('accessToken')) {
                alert('로그인 후 이용가능합니다!')
                void router.push('/23-03-login-check')
            }
        }, [])

    return (
        <div>
            {data?.fetchUserLoggedIn.name} 님 환영합니다!
        </div>
    )
}