import React from 'react'

const Card = ({item}) => {
  return (
     <a href={item.Link} className="flex flex-col items-center min-h-60 dark:bg-white/90 bg-gray-300 border border-gray-300 rounded-2xl shadow-xl p-4 m-2 w-full max-w-xs sm:max-w-sm lg:max-w-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer">
      <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 text-center">
        {item.title}
      </h2>
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-20 sm:h-32 md:h-45 object-cover rounded-xl mb-3"
      />
      <p className="text-xs sm:text-sm md:text-base text-gray-700 text-center">
        {item.description}
      </p>
    </a>
  )
}

export default Card