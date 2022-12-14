import HTMLHead from 'next/head'
import { AppProps } from 'next/app'
import { APP_WEB_TITLE } from '@/constants/configs'
import '@/styles/main.scss'

export default function Application({ Component, pageProps }: AppProps) {
  // __RENDER
  return (
    <>
      <HTMLHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{APP_WEB_TITLE}</title>
      </HTMLHead>

      <div className="ui--wrapper">
        <main className="ui--router-view">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}
