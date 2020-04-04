import PropTypes from "prop-types"
import React from "react"

const services = [
  {
    icon: (
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary-500">
          <svg
            className="w-6 h-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
        </div>
      </div>
    ),
    servicesTitle: "#1 Mini title goes here",
    servicesDescription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
  {
    icon: (
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary-500">
          <svg
            className="w-6 h-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
        </div>
      </div>
    ),
    servicesTitle: "#2 Mini title goes here",
    servicesDescription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
  {
    icon: (
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary-500">
          <svg
            className="w-6 h-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
        </div>
      </div>
    ),
    servicesTitle: "#3 Mini title goes here",
    servicesDescription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
]

export const ThreeColumn = ({ title, rider, description }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <section className="lg:text-center">
          <p className="text-base font-semibold leading-6 tracking-wide uppercase text-primary-600">
            {rider}
          </p>
          <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            {title}
          </h3>
          <p className="max-w-2xl mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
            {description}
          </p>
        </section>
        <section className="mt-10">
          <ul className="grid md:grid-cols-2 md:col-gap-8 md:row-gap-10 lg:grid-cols-3">
            {services.map(({ icon, servicesTitle, servicesDescription }, i) => {
              return (
                <li key={i}>
                  <div className="flex sm:mb-10">
                    {icon}
                    <div className="ml-4">
                      <h5 className="text-lg font-medium leading-6 text-gray-900">
                        {servicesTitle}
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        {servicesDescription}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    </section>
  )
}

ThreeColumn.propTypes = {
  rider: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}
