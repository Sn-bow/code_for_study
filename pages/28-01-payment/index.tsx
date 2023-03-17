import Head from 'next/head'

declare const window: typeof globalThis & {
    IMP: any;
}


export default function PaymentPage() {

    const onClickOrder = async () => {
        const IMP = window.IMP;
        IMP.init("imp06157117");


        IMP.request_pay({
            pg: 'nice',
            pay_method: 'card', // card, vbank(무통장) 등 
            // merchant_uid: "IMP" + makeMerchantUid, // 상품 아이디 적는곳 | 중복될시 결제 안됨 | 주석처리하면 nobody로 자동으로 생성됨
            name: '당근 10kg',
            amount: 100,
            buyer_email: 'Iamport@chai.finance',
            buyer_name: '아임포트 기술지원팀',
            buyer_tel: '010-1234-5678',
            buyer_addr: '서울특별시 강남구 삼성동',
            buyer_postcode: '123-456',
            m_redirect_url: "http://localhost:3000/28-01-payment", // 모바일의 경우 웹사이트처럼 다른 웹브라우저가 생성되어서 결제되는게 아닌 페이지 자체가 넘어가므로, 그럴경우 다시 원래의 페이지나 영수증 페이지와 같은 페이지로 다시 돌아오게끔 설정 해주어야한다.
            display: {
                card_quota: [3]  // 할부개월 3개월까지 활성화
            }
        },
            (rsp: any) => { // callback
                if (rsp.success) {
                    console.log(rsp);

                    // 백엔드에 결제 관련 데이터 넘겨주기, 즉 뮤테이션 실행하기
                    // createPointTranscationOfLoding
                } else {
                    console.log(rsp);
                    alert('결제에 실패하였습니다. 다시 시도해주세요!')
                }
            }
        );
    }


    return (
        <>
            <Head>
                <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
            </Head>
            <button onClick={onClickOrder}>결제하기</button>
        </>
    )
}