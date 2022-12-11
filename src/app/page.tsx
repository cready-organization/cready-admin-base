'use client'
import axiosClient from '@/Services/axiosClient'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {
  const router = useRouter()
  const handleLogout = async () => {
    axiosClient.post('/api/auth/logout').then((result) => {
      // router.push('/login')
    })
  }
  return (
    <div>
      <h1>Creadyyyyy!</h1>
      <Link href={'/dashboard'}>Dashboard</Link>
      <br />
      <Link href={'/login'}>Login</Link>
    </div>
  )
}
