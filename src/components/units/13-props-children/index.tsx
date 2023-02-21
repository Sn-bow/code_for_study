
interface ILayoutPropsType {
    school: string
    children: JSX.Element
}

const Layout = (props: ILayoutPropsType) => {

    return (
        <>
            <div>안녕하세요 영희입니다.</div>
            <div>{props.school}</div>
            <div>{props.children}</div>
            <div>안녕하세요 맹구입니다.</div>
        </>
    )
}

export default Layout

