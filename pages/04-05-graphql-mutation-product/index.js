import { useState } from 'react'
import { gql, useMutation } from '@apollo/client'

const CREATE_PRODUCT = gql`
mutation createProduct($seller: String, $createProductInput: CreateProductInput!) { # 변수의 타입 적는곳
    createProduct(seller: $seller, createProductInput: $createProductInput){       # 실제 우리가 전달할 변수 적는 곳
        _id
        number
        message
    }
 }
`

const GraphqlMutationProduct = () => {
    const [나의함수] = useMutation(CREATE_PRODUCT)

    // apollo client 에서 변수를 사용하는 법
    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables: { // variables 이게 $ 역할을 해줌  $writer -> variables: writer: "들어올 변수 값" || writer: {변수}
                seller: "훈이",
                createProductInput: {
                    name: "마우스",
                    detail: "정말 좋은 마우스",
                    price: 3000
                }
            }
        })
        console.log(result)
        alert(result.data.createProduct.message)
    }

    return (
        <>
            <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
        </>
    )
}

export default GraphqlMutationProduct