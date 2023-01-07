import { useRouter } from 'next/router'

const StaticRoutingPage = () => {
    const router = useRouter()

    const onClickMove1 = () => {
        router.push("/05-08-dynamic-routed-board-query/1200")
    }
    const onClickMove2 = () => {
        router.push("/05-08-dynamic-routed-board-query/1201")
    }
    const onClickMove3 = () => {
        router.push("/05-08-dynamic-routed-board-query/1300")
    }
    const onClickMove4 = () => {
        router.push("/05-08-dynamic-routed-board-query/1400")
    }
    const onClickMove100 = () => {
        router.push("/05-08-dynamic-routed-board-query/1100")
    }

    return (
        <>
            <button onClick={onClickMove1}>1번 게시글 페이지 이동하기!!!</button><br />
            <button onClick={onClickMove2}>2번 게시글 페이지 이동하기!!!</button><br />
            <button onClick={onClickMove3}>3번 게시글 페이지 이동하기!!!</button><br />
            <button onClick={onClickMove4}>4번 게시글 페이지 이동하기!!!</button><br />
            <button onClick={onClickMove100}>100번 게시글 페이지 이동하기!!!</button><br />
        </>
    )
}

export default StaticRoutingPage;