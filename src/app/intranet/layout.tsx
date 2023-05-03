import { ReactNode } from 'react'

interface IntranetLayoutProps {
  readonly children: ReactNode
}

export default function IntranetLayout({ children }: IntranetLayoutProps) {
  return (
    <>
      <h1>IntranetLayout</h1>
      {children}
    </>
  )
}
