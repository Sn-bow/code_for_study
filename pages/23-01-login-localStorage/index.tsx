import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd'
import { ChangeEvent, useState } from 'react'
import { useRecoilState } from 'recoil'
import { IMutation, IMutationLoginUserArgs } from '../../src/commons/types/generated/types'
import { accessTokenState } from '../../src/commons/store'
import { useRouter } from 'next/router'

const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!){
        loginUser(email: $email, password: $password){
            accessToken
        }
    }
`


export default function LoginPage() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    // globalState / recoil
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState)

    // router
    const router = useRouter()

    const [loginUser] = useMutation<Pick<IMutation, 'loginUser'>, IMutationLoginUserArgs>(LOGIN_USER)

    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const onClickLogin = async () => {
        try {
            // 1. accessToken 받아오기
            const result = await loginUser({
                variables: {
                    email,
                    password
                }
            })
            const accessToken = result.data?.loginUser.accessToken
            console.log(accessToken)

            // 2. 받아온 accessToken global state에 저장하기
            if (!accessToken) {
                Modal.error({ content: "로그인에 실패했습니다. 다시 시도해 주세요." });
                return;
            }
            setAccessToken(accessToken)
            localStorage.setItem('accessToken', accessToken) // 임시 사용

            // 3. 로그인 성공 페이지로 이동하기
            void router.push('/23-02-login-localStorage-success');
        } catch (error) {
            if (error instanceof Error) {
                Modal.error({ content: error.message })
            }
        }
    }

    return (
        <div>
            이메일 : <input type='text' onChange={onChangeEmail} />
            비밀번호 : <input type='password' onChange={onChangePassword} />
            <button onClick={onClickLogin}>로그인하기</button>
        </div>
    )
}