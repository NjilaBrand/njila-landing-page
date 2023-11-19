"use client"
import MobileWebView from './layout/mobile/MobileWebView';
import { useMediaQuery } from './hooks/use-media-query';
import DesktopWebView from './layout/desktop/DesktopWebView';
import Image from 'next/image'

export default function Home() {
  const isMediaScreen = useMediaQuery("(max-width: 1148px)");

  return (
    <>{isMediaScreen ? <MobileWebView /> : <DesktopWebView />}</>
  )
}
