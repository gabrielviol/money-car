import type { AppProps } from 'next/app'
import { globalStyles } from "../styles/global"
import { Provider } from 'react-redux'
import store from '@/store'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}