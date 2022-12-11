'use client'
import axiosClient from '@/Services/axiosClient'
import { useRouter } from 'next/navigation'
import React from 'react'
export default function Page() {
  const router = useRouter()

  const handleLogin = () => {
    axiosClient
      .post('api/auth/user', { password: 'password' })
      .then((result) => {
        console.log(`result`, result)
        // router.push('/dashboard')
      })
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
