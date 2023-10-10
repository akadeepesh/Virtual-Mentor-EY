import React from 'react'
import { FiEdit } from "react-icons/fi";

const ProfileHero = () => {
  return (
    <div className='mt-10 flex justify-center min-h-screen'>
      <div className="w-full md:max-w-6xl p-8 mx-auto bg-secondary rounded-xl shadow-md space-y-4 text-primary relative">
        <div className="absolute top-0 right-0 p-2"><FiEdit size={25}/></div>
        <h2>Full Name: Deepesh Kumar</h2>
        <h2>Email: deepesh@example.com</h2>
        <h2>Career Goals: Software Developer</h2>
        <h2>Education Background: Bachelor's in Computer Science</h2>
        <h2>Interests: Coding, Reading, Travelling</h2>
        <h2>Skills: React, Node.js, Python</h2>
        <h2>Work Experience: 3 years at XYZ Corp</h2>
      </div>
    </div>
  )
}

export default ProfileHero
