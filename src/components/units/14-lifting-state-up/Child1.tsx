const Child1 = (props: any) => {
    const { count, setCount } = props

    // 부모의 state 조작 방법 2
    const onClick = () => {
        setCount((prv: number) => prv + 1)
    }


    return (
        <>
            <div>자식1의 카운트: {count}</div>
            <button
                onClick={onClick}
            >
                카운트 올리기!!
            </button>
        </>
    )
}

export default Child1