import { ReactNode } from 'react'

interface RootLayoutProps {
  readonly children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <h1>RootLayout</h1>
        {children}
      </body>
    </html>
  )
}
