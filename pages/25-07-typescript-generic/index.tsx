/* eslint-disable @typescript-eslint/restrict-plus-operands */

// 1. 문자 / 숫자 / 불린 (primitive) 타입

export const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
    return [arg3, arg2, arg1]
}

const result = getPrimitive("철수", 123, true)


//
//
// 2. any 타입 => 그냥 자바스크립트와 같음
export const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
    console.log(arg1 + 10000); // any는 아무거나 다 됨
    return [arg3, arg2, arg1]
}

const result = getAny("철수", 123, true)

//
//
// 3. unknown 타입 => 그냥 자바스크립트와 같음
export const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
    if (typeof arg1 === "number") console.log(arg1 + 10000); // unKnown 은 any 처럼 들어가는건 아무거나 상관 없지만 사용할려면 타입을 지정하고 사용해야된다.
    // unKnown 은 사용할 때, 타입을 사정하여 사용해야 함
    return [arg3, arg2, arg1]
}

const result = getUnknown("철수", 123, true)


//
//
// 4. generic 타입 => 그냥 자바스크립트와 같음 // 처음에는 어떤 값을 넣든 상관없지만 한번 넣게되면 그 타입이 고정이 된다.
function getGeneric<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
    return [arg3, arg2, arg1]
}

const result = getGeneric<string, number, boolean>("철수", 123, true);


//
//
// 5. generic 타입 2 => 그냥 자바스크립트와 같음 // 처음에는 어떤 값을 넣든 상관없지만 한번 넣게되면 그 타입이 고정이 된다.
function getGeneric2<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
    return [arg3, arg2, arg1]
}

const result = getGeneric2("철수", 123, true);

//
//
// 6. generic 타입 3 => 그냥 자바스크립트와 같음 // 처음에는 어떤 값을 넣든 상관없지만 한번 넣게되면 그 타입이 고정이 된다.
function getGeneric3<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
    return [arg3, arg2, arg1]
}

const result = getGeneric3("철수", 123, true);



//
//
// 7. generic 타입 4 => 그냥 자바스크립트와 같음 // 처음에는 어떤 값을 넣든 상관없지만 한번 넣게되면 그 타입이 고정이 된다.
const getGeneric4 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
    return [arg3, arg2, arg1]
}

const result = getGeneric4("철수", 123, true);