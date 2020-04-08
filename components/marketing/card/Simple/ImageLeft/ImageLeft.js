import PropTypes from "prop-types"
import React from "react"

export const ImageLeft = ({ title, description, srcImg }) => {
  return (
    <div className="grid max-w-xl grid-cols-1 mx-auto overflow-hidden bg-white rounded-lg shadow-lg sm:grid-cols-2 md:grid-cols-3">
      <img
        className="object-cover w-full h-48 md:col-span-2 sm:h-full"
        src={srcImg}
      />

      <div className="p-4 md:col-span-1">
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        <div className="flex mt-2 item-center">
          {Array(5)
            .fill(1)
            .map((star, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            ))}
        </div>
        <div className="flex justify-between mt-3 item-center">
          <h1 className="text-xl font-bold text-gray-700">$220</h1>
          <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">
            Add to Card
          </button>
        </div>
      </div>
    </div>
  )
}

ImageLeft.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  srcImg: PropTypes.string,
}
