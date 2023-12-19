"use client"
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import MobileWebView from './layout/mobile/MobileWebView';
import { useMediaQuery } from './hooks/use-media-query';
import DesktopWebView from './layout/desktop/DesktopWebView';
import Image from 'next/image'

export default function Home() {
  const isMediaScreen = useMediaQuery("(max-width: 1148px)");

  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
  }, [])

  return (
    <>{isMediaScreen ? <MobileWebView /> : <DesktopWebView />}</>
  )
}
