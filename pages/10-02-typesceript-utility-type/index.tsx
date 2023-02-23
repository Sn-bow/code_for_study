import { ExecException } from 'child_process'
import { type } from 'os'

const TypescriptUtilityPage = () => {

    interface IProfile {
        name: string,
        age: number,
        school?: string,
        hobby?: string
    }

    // 1. Pick 타입, 고르다 IProfile 에서 내가 필요한 부분만 가져다가쓰는 타입
    type aaa = Pick<IProfile, "name" | "age">


    // 2. Omit 타입, 제외하다 IProfile 에서 제외하고 싶은걸 제외하고 나머지 애들로 타입을 가져다가쓰는 타입
    type bbb = Omit<IProfile, "school">

    // 3. Partial 타입, 부분 IProfile 의 형식을 있어도 되고 없어도 되는 형식으로 만들어서 가져다쓰는 타입 
    type ccc = Partial<IProfile>

    // 4. Required 타입, 필수 IProfile 의 형식을 전부 필요한 걸로 바꿔서 가져다 쓰는 타입
    type ddd = Required<IProfile>

    // 5. Record 타입
    type fff = Record<eee, IProfile> // eee 가 각각의 Key 가 되고 IProfile 이 Key의 타입이 된다.

    // 6. 유니온 타입 = 또는
    type eee = "철수" | "영희" | "훈이" // Union 타입
    let child: eee
    child = "철수"
    child = "맹구"


    // type 과 interface 의 차이
    // -> 차이 : 선언병합
    // interface 이미 만들어진 interface의 이름과 똑같이 만들 수 있다.
    interface IProfile {
        candy: number
    }  // 기존에 있는 IProfile 에 합쳐짐


    const profile: Partial<IProfile> = {}

    profile.age = 10

    return (
        <></>
    )
}

export default TypescriptUtilityPage
