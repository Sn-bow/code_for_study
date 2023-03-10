

// 백엔드에서 받아온 데이터라고 가정 (컴포넌트 위에 만든 이유: 컴포넌트 리렌더링돼도 다시 안만들어짐 : 상수 같은 데이터를 밖에다가 만듬)
const FRUITS = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천해향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
]

const MapFruitsPage = () => {
    // 1. 가장 기본 예제
    // const aaa = [<div>1 레드향</div>, <div>2 샤인머스켓</div>, <div>3 산향딸기</div>]

    // 2. 실무 백엔드 데이터 예제(aaa랑 결과 똑같음)
    const bbb = [{ number: 1, title: "레드향" }, { number: 2, title: "샤인머스켓" }, { number: 3, title: "산청딸기" },].map(el => <div>{el.number} {el.title}</div>)

    // const fruits = FRUITS.map(el =>
    //     <>
    //         <div>{el.number}</div>
    //         <div>{el.title}</div>
    //     </>
    // )

    return (
        <>
            <div>
                {FRUITS.map(el =>
                    <>
                        <div>{el.number}</div>
                        <div>{el.title}</div>
                    </>
                )}
            </div>
            <div>{bbb}</div>
        </>
    )
}

export default MapFruitsPage