import { useAuth } from '../../src/components/commons/hooks/UseAuth'


export default function CustomUseAuthPage() {
    useAuth();


    return (
        <div>프로필 페이지 입니다.</div>
    )
}