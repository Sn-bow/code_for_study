import { ProvidedRequiredArgumentsRule } from 'graphql'


const TypescriptPage = () => {

  // 타입 추론으로 인한 에러 -> let aaa = "안녕하세요" 라는 스트링이 들어가 있으므로 타입스크립트의 추론을 통해서 aaa 는 스트링의 타입을 가지게 되는것이다.
  let aaa = "안녕하세요"
  aaa = 3


  // 타입명시
  let bbb: string = "반갑습니다."

  // 문자타입(선언과 할당 분리)
  let ccc: string
  ccc = "반가워요!!!"
  ccc = 3

  // 숫자타입
  let ddd: number = 10
  ddd = "철수"

  // boolean타입
  let eee: boolean = true
  eee = false
  eee = "false" // true로 작동함 -> 하지만 타입스크립트에서 boolean이 들어오지 않았기 때문에 화를냄

  // 배열타입
  let fff: number[] = [1, 2, 3, 4, 5, "철수"]
  let ggg: string[] = ["철수", "영희", "훈이", 10]
  let hhh: (string | number)[] = ["철수", "영희", 1, 2, 3]


  // 객체타입
  interface IProfile {
    name: string,
    age: number | string,
    school: string
  }


  const profile: IProfile = {
    name: "철수",
    age: 8,
    school: "다람쥐초등학교"
  }
  profile.age = "8살"

  // 함수타입 -> 어디서든 몇번이든 호출 가능하므, 타입추론 할 수 없음(반드시, 타입명시 필요)
  const add = (number1: number, number2: number, unit: string): string => {
    return number1 + number2 + unit
  }
  const result = add(1000, 2000, "원") // 3000원

  // any타입
  let qqq: any = "철수" // 자바스크립트와 동일!!
  qqq = "맹구"
  qqq = 1

  return (
    <></>
  )
}

export default TypescriptPage