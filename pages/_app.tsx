import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {AnimatePresence} from "framer-motion";

const onExitComplete = () => {
  window.scrollTo({top: 0})
}

export default function App({ Component, pageProps, router }: AppProps) {
  return <AnimatePresence onExitComplete={onExitComplete} mode="wait" initial={false} ><Component key={router.asPath} {...pageProps} /></AnimatePresence>
}
