import React, { useState } from "react"

import Layout from "../components/MyLayout.js"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const defaultMainImg = "https://picsum.photos/245/245"
const defaultProfileImg = "https://randomuser.me/api/portraits/women/17.jpg"

const LeftAligned = ({ mainImg, profileImg }) => (
  <article className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded shadow">
    <div className="relative">
      <img
        src={mainImg || defaultMainImg}
        alt="main image"
        // className="h-48 bg-center bg-no-repeat bg-cover"
        className="object-cover w-full h-48"
      />
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        className="absolute bottom-0 px-2 py-1 mb-2 ml-3 text-sm text-white rounded"
      >
        $ 16.80
      </div>
      <div className="absolute right-0 w-10 mr-2" style={{ bottom: "-16px" }}>
        {" "}
        <a href="/#">
          <img
            className="border-2 border-white rounded-full"
            src={profileImg || defaultProfileImg}
          />
        </a>
      </div>
    </div>
    <div className="p-3">
      <h3 className="mr-10 text-sm truncate-2nd">
        <a
          className="hover:text-blue-500"
          href="/huawwei-p20-pro-complete-set-with-box-a.7186128376"
        >
          Some Title Here
        </a>
      </h3>
      <div className="flex items-start justify-between">
        <p className="text-xs text-gray-500">Quezon City, Metro Manila</p>
        <button
          className="text-xs text-gray-500 outline hover:text-blue-500"
          title="Bookmark this ad"
        >
          <i className="far fa-bookmark"></i>
        </button>
      </div>
      <p className="text-xs text-gray-500">
        <a href="#" className="hover:underline hover:text-blue-500">
          username2019
        </a>{" "}
        • 2 days ago
      </p>
    </div>
  </article>
)

export default function Playground() {
  ;<p>This is a playground to create Tailwind Components</p>
  return (
    <Layout>
      <LeftAligned />
    </Layout>
  )
}
