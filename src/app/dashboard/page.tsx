'use client'
import axiosClient from '@/Services/axiosClient'
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
      <button onClick={handleLogout} style={{ marginLeft: 100 }}>
        Logout
      </button>
    </div>
  )
}
