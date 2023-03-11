import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function KakaoMapPage() {
    const router = useRouter()

    const onClickMoveToMapPage = () => {
        void router.push('/26-03-kakao-map-routed')
    }

    return (
        <>
            {/* <button onClick={onClickMoveToMapPage}>
                이동하기
            </button> */}
            <Link href={'/26-03-kakao-map-routed'}>
                이동하기
            </Link>
        </>
    )
} 