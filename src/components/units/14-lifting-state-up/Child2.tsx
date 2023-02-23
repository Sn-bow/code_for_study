
const Child2 = (props: any) => {
    const { count, onClickCountUp } = props

    return (
        <>
            <div>자식2의 카운트: {count}</div>
            <button
                onClick={onClickCountUp}
            >
                카운트 올리기!!
            </button>
        </>
    )
}

export default Child2