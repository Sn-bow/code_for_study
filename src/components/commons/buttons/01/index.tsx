
interface IProps {
    isActive: boolean
    title: string
}


const Button01 = (props: IProps) => {
    return (
        <button style={{ backgroundColor: props.isActive ? "red" : "blue" }}>{props.title}</button>
    )
}

export default Button01