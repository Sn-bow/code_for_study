import { UseFormRegisterReturn } from 'react-hook-form'

interface IProps {
    type: "text" | "password"
    register: UseFormRegisterReturn
}

const Input01 = (props: IProps) => {
    return (
        <>
            <input type={props.type} {...props.register} />
        </>
    )
}

export default Input01