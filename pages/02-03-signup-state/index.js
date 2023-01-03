import { useState } from "react"

const SignUpStatePage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [errorMessage, setErrorMessage] = useState("")
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("")

    const onChangeEmail = (event) => {
        console.log(event) // 어떤 행위를 하였는지 // 나의 행동
        console.log(event.target) // 어떤 태그에서 행위를 했는지 // 작동된 태그
        console.log(event.target.value) // 해당 태그에 등록된 값이 무엇인지 // 작동된 태그에 입력된 값
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onClickSignUp = () => {
        // 진짜 포장이 잘 됐는지 확인해 보기
        console.log(email)
        console.log(password)

        // 검증하기
        if (email.includes("@") == false) {
            // alert("이메일이 올바르지 않습니다! @가 없음!!")
            // 요즘 트랜드
            // document.getElementById("error").innerText = "이메일이 올바르지 않습니다!! @이가 없습니다!!!"
            setErrorMessage("이메일이 올바르지 않습니다!!!")
        } else {
            // 메시지 알림 이후, Backend 컴퓨터에있는 API(함수) 요청하기
            alert("회원가입을 축하드립니다.")
        }

        if (password.length !== 8) {
            setPasswordErrorMessage("비밀번호가 8자리 이하 입니다!!")
        } else {
            setPasswordErrorMessage("올바른 비밀번호입니다.")
        }
    }

    return (
        <>
            {/* onChagneEmail 는 이벤트 핸들러 함수 이다. */}
            이메일 : <input value={email} type="text" onChange={onChangeEmail} />
            {/* <div id="error"></div> */}
            <div>{errorMessage}</div>
            비밀번호 :  <input value={password} type="password" onChange={onChangePassword} />
            <div>{passwordErrorMessage}</div>
            <button onClick={onClickSignUp}>회원가입</button>
        </>
    )
}

export default SignUpStatePage;