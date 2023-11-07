import '../styles/globals.css'
import { AppLayout } from './layouts/AppLayout'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppLayout />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
