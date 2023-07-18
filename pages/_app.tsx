import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {AnimatePresence} from "framer-motion";
import { useState, useEffect } from "react"
import Router from "next/router"



const onExitComplete = () => {
  console.log("test")
  window.scrollTo({top: 0})
}

export default function App({ Component, pageProps, router }: AppProps) {

  // set scroll restoration to manual
  // useEffect(() => {
  //   if ('scrollRestoration' in history && history.scrollRestoration !== 'manual') {
  //     history.scrollRestoration = 'manual';
  //   }
  // }, []);

  // const [loading, setLoading] = useState(false)
  // useEffect(() => {
  //   // Used for page transition
  //   const start = () => {
  //     console.log('start')
  //   }
  //   const end = () => {
  //     console.log('end')
  //   }
  //   Router.events.on("routeChangeStart", start)
  //   Router.events.on("routeChangeComplete", end)
  //   Router.events.on("routeChangeError", end)
  //   return () => {
  //     Router.events.off("routeChangeStart", start)
  //     Router.events.off("routeChangeComplete", end)
  //     Router.events.off("routeChangeError", end)
  //   }
  // }, [])

  return <AnimatePresence onExitComplete={onExitComplete} mode="wait" initial={false} ><Component key={router.asPath} {...pageProps} /></AnimatePresence>
}
