'use client'
import './globals.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import LoadingPage from './loading'
import Courses from './componets/Courses'
import CourseSearch from './componets/CourseSearch'

export default function Home() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

useEffect(() => {
  const fetchCourses = async () => {
    const res = await fetch('/api/courses')
    const data = await res.json()
    setCourses(data)
    setLoading(false)
  }
  fetchCourses()
}
  , [])

  if (loading) return <LoadingPage />

  return <>
    <div className='center'>
      
      <CourseSearch getSearchResults={(results) => setCourses(results)}/>
      <Courses courses={courses} />
      
    </div>
  </>
}
