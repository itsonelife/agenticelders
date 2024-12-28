import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AgenticElders',
  description: 'AI-powered wisdom platform with eight unique AI elder personalities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}