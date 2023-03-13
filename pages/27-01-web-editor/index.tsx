// 다이나믹 import 필요
// import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic'
// server 에서 렌더링 되지 않도록 ssr: false 설정을 해준다. // next 에서 사용하는 방법
const ReactQuill = dynamic(async () => await import('react-quill'), { ssr: false })


export default function WebEditor() {

    // react-quill 만든 사람들이 만든 OnChange 이므로 event 이므로 event 안들어옴
    const onChangeContents = (value: string) => {
        console.log(value)
    }

    const onClickSubmit = async () => {
        // React & Next 에서 사용하는 방법  // dynamic import 
        const { Modal } = await import('antd')
        Modal.success({ content: "aa" })
    }

    return (
        <div>
            작성자 : <input type='text' /> <br />
            비밀번호 : <input type='password' /> <br />
            제목 : <input type='text' /> <br />
            내용 : <ReactQuill onChange={onChangeContents} /> <br />
            <button onClick={onClickSubmit}>등록하기</button>
        </div>
    )
}