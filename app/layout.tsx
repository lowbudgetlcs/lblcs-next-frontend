import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react';
// @ts-ignore
import { Analytics } from '@vercel/analytics/react'
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LowBudgetLCS',
  description: 'Welcome to the LowBudgetLCS!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
      <title>LowBudgetLCS</title>
      <link rel="icon" href="/favicon.ico" sizes="any"/>
    </head>
    <body className={inter.className}>
    <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
