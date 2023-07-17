import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {AnimatePresence} from "framer-motion";

export default function App({ Component, pageProps, router }: AppProps) {
  return <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}><Component key={router.asPath} {...pageProps} /></AnimatePresence>
}
