import "../styles/globals.css"
import "../components/navbar/NavBar.css"
import "../components/navbar/SvgIcon.css"

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
