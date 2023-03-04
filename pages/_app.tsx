import { Global } from '@emotion/react'
import { AppProps } from 'next/app'
import { globalStyles } from '../src/commons/styles/globalStyles'
import ApolloSetting from '../src/components/commons/apollo/Apollo'
import Layout from '../src/components/commons/layout'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { RecoilRoot } from 'recoil'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCseHtmtq9KGU81B_wydKvdt-nijBa0qAo",
  authDomain: "codecamp-da5c1.firebaseapp.com",
  projectId: "codecamp-da5c1",
  storageBucket: "codecamp-da5c1.appspot.com",
  messagingSenderId: "549956869766",
  appId: "1:549956869766:web:c648907c3420ab83053b07"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);


export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles}
          />
          <div>ppppppppppppp</div>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  )
}

// 해당 app.js 에 ApolloProvider, ApolloCilent, InMeomoryCache 와같은 셋팅을 하게되면 왜 모든페이지에 설정이 되는가
// -> 예를 들어 01-01-qqq  에 접속하게 되면 [] ex) http://localhost:3000/01-01-qqq ] 해당 폴더의 index.js 의 내용이
// 01-01-qqq 의 index.js 파일 내용이 바로 보여지는것이 아닌
// { /* <>
// <div>철수</div>
// <button>클릭하세요!</button>
// </> */ }
// 해당 내용이 잘려서 app.js 에서 Component로 보여지게 되는것이다.
// -> <Component /> 가 보여지게 되는 것이다.
// 즉, 다른 컴포넌트 파일들이 app.js 에서 합쳐져서 app.js 가 화면에 보여지게 되는것이다. (중요)
// 그래서 위의 app.js 에 위와같이 <Component /> 를 ApolloProvider 로 감싸주게 되면 모든 페이지에서 apollo-client 를 사용할 수 있게 되는 것이다.
