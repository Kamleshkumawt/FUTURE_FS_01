import React from 'react'
import Card from '../components/Card'

const items = [
  {
    id: 1,
    title: "AI Virtual Assistant",
    img: "https://cdn.pixabay.com/photo/2023/08/15/14/05/banner-8192025_1280.png",
    description:
      " full-stack AI-powered virtual assistant web application. It features user authentication, customizable UI, and integrates with Gemini AI for intelligent responses. Built with React (Frontend) and Node.js/Express (Backend) ....",
      Link:"https://github.com/Kamleshkumawt/AI-Virtual-Assistant.",
  },
  {
    id: 2,
    title: "ApnaShow Movie Web",
    img: "https://img.freepik.com/premium-vector/two-neon-tickets-banner-social-networks-neon-light-style-dark-background-bright-vector-neon-illustration-two-simple-raffle-tickets-cinema-movie-other-event_104045-3468.jpg?w=2000",
    description:
      "A modern web platform built with the MERN Stack (MongoDB, Express, React, Node.js). Designed for event showcasing, streaming, or content management, ApnaShow provides a sleek, fast, and responsive UI with a modern red-white branding logo....",
      Link:"https://github.com/Kamleshkumawt/ApnaShow-Movie-Web",
  },
  {
    id: 3,
    title: "Chat Application",
    img: "https://img.freepik.com/premium-vector/chat-app-banner-template-chat-messages-speech-bubble_100456-1832.jpg",
    description:
      "A full-stack real-time chat application built with React, Vite, Node.js, Express, MongoDB, Socket.IO, and Redis. This project supports private messaging, group chats, online status, authentication, and more....",
      Link:"https://github.com/Kamleshkumawt/Chat-application",
  }
];

const Project = () => {
  return (
    <div className="min-h-screen w-full flex flex-wrap items-center justify-center md:py-20 bg-gray-100 dark:bg-gradient-to-b from-gray-800 to-gray-900">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
    </div>
  )
}

export default Project