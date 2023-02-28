
// collection : , addDoc: 저장하는 기능, getDocs: document를 가져오는 기능 , FetFirestore: 에서 가져옴
import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore/lite"
import { firebaseApp } from '../_app'

export default function FirebasePage() {
    const onClickSubmit = async () => {
        const board = collection(getFirestore(firebaseApp), 'board')
        await addDoc(board, {
            writer: "철수",
            title: '제목입니다.',
            contents: '내용이에요!!'
        })
    }

    const onCLickFetch = async () => {
        const board = collection(getFirestore(firebaseApp), 'board')

        const result = await getDocs(board)
        const datas = result.docs.map(el => el.data())
        console.log(datas)
    }

    return (
        <div>
            <button onClick={onClickSubmit}>등록하기</button>
            <button onClick={onCLickFetch}>조회하기</button>
        </div>
    )
}