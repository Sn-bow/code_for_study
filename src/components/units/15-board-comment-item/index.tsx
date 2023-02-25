import styled from '@emotion/styled'
import { useState } from 'react'
import { IBoard } from '../../../commons/types/generated/types'

const Row = styled.div`
    display: flex;
`

const Column = styled.div`
    width: 25%;
`

interface IBoardCommentItemPropsTyep {
    el: IBoard
}

export default function BoardCommentItem(props: IBoardCommentItemPropsTyep) {
    // state 는 부모컴포넌트에서 map으로 하나하나 찍혀 여러개가 생성이 된다.
    // 그러므로 각각의 state들은 각각의 컴포넌트 에서 영향을 끼치므로 상태 관리하기에도 용이하다.
    const [isEdit, setIsEdit] = useState(false)

    const onClickHandler = () => {
        setIsEdit(true)
    }

    return (
        <div key={props.el._id}>
            {!isEdit
                &&
                <Row>
                    <Column>작성자 : {props.el.writer}</Column>
                    <Column>제목 : {props.el.title}</Column>
                    <button onClick={onClickHandler}>수정하기</button>
                </Row>
            }
            {
                isEdit
                &&
                <div>
                    수정할 내용 :  <input type='text' />
                </div>
            }
        </div>
    )
}