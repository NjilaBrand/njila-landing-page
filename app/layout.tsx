/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
  title: 'NjilaBrand',
  description: `Somos uma empresa atuante nas áreas de Marketing 
  e Publicidade desenvolvendo produtos e serviços que 
  sirvam de auxílio para o seu público alvo.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-pt">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}

        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
        <script src='./scriptNavBar.js'></script>
      </body>
    </html>
  )
}
