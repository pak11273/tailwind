import React, { useState } from "react"

import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const defaultImg = "https://via.placeholder.com/300"

export const FadedHover = ({
  hoverText,
  title,
  slug,
  images,
  rider,
  rider2,
}) => {
  const [hover, setHover] = useState(false)

  return (
    <article className="relative flex max-w-xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg h-">
      <img
        src={images[0] || defaultImg}
        alt="main image"
        className="object-cover w-full h-full"
      />
      <div className="absolute top-0 left-0 max-w-xs p-2 leading-5 text-left text-gray-300 bg-primary-600">
        <h6 className="text-xl font-bold">{rider}</h6>
        <p className="">{rider2}</p>
      </div>
      <Link to={`/rooms${slug}`} className="hover:bg-gray-600">
        <div
          className={`absolute inset-0 flex items-center justify-center text-red-500`}
        >
          <p>{hoverText}</p>
        </div>
      </Link>
      <div className="absolute inset-x-0 bottom-0 p-4 text-2xl font-semibold text-center text-yellow-400 uppercase bg-primary-500">
        {title}
      </div>
    </article>
  )
}

FadedHover.propTypes = {
  room: PropTypes.shape({
    title: PropTypes.string.isRequired,
    hoverText: PropTypes.string,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    rider: PropTypes.number.isRequired,
    rider2: PropTypes.number.isRequired,
  }),
}
