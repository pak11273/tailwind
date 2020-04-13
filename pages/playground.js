import React, { useState } from "react"

import Layout from "../components/MyLayout.js"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const defaultImg = "https://picsum.photos/245/245"

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
    <article
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => setHover(false)}
      className="relative flex max-w-xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg h-4/12"
    >
      <img
        src={images[0] || defaultImg}
        alt="main image"
        className={`object-cover w-full h-full transition duration-500 ease-in-out transform ${
          hover ? "scale-150" : null
        }`}
      />
      <div className="absolute top-0 left-0 max-w-xs p-2 leading-5 text-left text-gray-300 bg-primary-alpha-50">
        <h6 className="text-xl font-bold">{rider}</h6>
        <p className="">{rider2}</p>
      </div>
      <a href={`/${slug}`}>
        <div
          className="absolute inset-0 items-center justify-center w-1/2 mx-auto mt-16 text-red-500 border-2 border-yellow-400 border-solid bg-primary-alpha-60 hover:cursor-pointer h-1/3"
          style={{ display: hover ? "flex" : "none" }}
        >
          <h1 className="text-5xl text-yellow-400 uppercase">{hoverText}</h1>
        </div>
      </a>
      <div className="absolute inset-x-0 bottom-0 p-4 text-2xl font-semibold text-center text-yellow-400 uppercase bg-primary-alpha-50">
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

export default function Playground() {
  ;<p>This is a playground to create Tailwind Components</p>
  return (
    <Layout>
      <FadedHover
        hoverText="Feature"
        title="Title Here"
        slug="slug"
        images={[]}
        rider="rider"
        rider2="rider2"
      />
    </Layout>
  )
}
