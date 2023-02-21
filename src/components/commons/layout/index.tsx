import { useRouter } from 'next/router'
import LayoutBanner from './banner/banner'
import LayoutFooter from './footer/footer'
import LayoutHeader from './header/header'
import LayoutNavigation from './navigation/navigation'

interface ILayoutPropsType {
    children: JSX.Element
}

const HIDDEN_HEADERS = [
    '/12-02-library-star',
]

const Layout = (props: ILayoutPropsType) => {
    const router = useRouter()
    console.log(router.asPath)

    const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath)

    return (
        <>
            {!isHiddenHeader && <LayoutHeader />}
            <LayoutBanner />
            <LayoutNavigation />
            <div style={{ height: '500px', display: 'flex' }}>
                <div style={{ width: '30%', backgroundColor: 'orange' }}>사이드바</div>
                <div style={{ width: '70%' }}>{props.children}</div>
            </div>
            <LayoutFooter />
        </>
    )
}

export default Layout