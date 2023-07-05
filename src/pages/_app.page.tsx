import type { AppProps } from 'next/app'
import { globalStyles } from "../styles/global"
import { wrapper } from '@/store'

globalStyles()

function App({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  )
}

export default wrapper.withRedux(App);