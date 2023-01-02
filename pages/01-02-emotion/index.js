import { Email, EmailInput } from '../../styles/emotion'

const EmotionPage = () => {
    // 자바스크립트 쓰는곳

    return (
        <div>
            <Email>이메일</Email>
            <EmailInput type="text" id="email" />
            <button>클릭하세요!!</button>
        </div>
    )
}

export default EmotionPage;