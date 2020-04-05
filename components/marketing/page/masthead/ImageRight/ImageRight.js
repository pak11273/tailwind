import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"
import React from "react"
import logo from "assets/images/bicycle-shop-logo-design-vector/40626.jpeg"
import srcImg from "assets/images/bicycles.jpeg"

const ButtonOne = ({ srcOne, LabelOne }) => (
  <div className="rounded-md shadow">
    <NavLink
      to={srcOne}
      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-primary-600 hover:bg-primary-400 focus:outline-none focus:shadow-outline md:py-4 md:text-lg md:px-10"
    >
      {LabelOne}
    </NavLink>
  </div>
)

const ButtonTwo = ({ srcTwo, LabelTwo }) => (
  <div className="mt-3 sm:mt-0 sm:ml-3">
    <NavLink
      to={srcTwo}
      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out border border-transparent rounded-md text-primary-700 bg-primary-100 hover:text-primary-600 hover:bg-primary-50 focus:outline-none focus:shadow-outline focus:border-primary-300 md:py-4 md:text-lg md:px-10"
    >
      {LabelTwo}
    </NavLink>
  </div>
)

const Buttons = ({
  srcOne,
  srcTwo,
  buttonOne,
  buttonTwo,
  LabelOne,
  LabelTwo,
}) => {
  return (
    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
      {buttonOne && buttonTwo ? (
        <>
          <ButtonOne LabelOne={LabelOne} srcOne={srcOne} />
          <ButtonTwo LabelTwo={LabelTwo} srcTwo={srcTwo} />
        </>
      ) : buttonOne ? (
        <ButtonOne LabelOne={LabelOne} srcOne={srcOne} />
      ) : null}
    </div>
  )
}

export const ImageRight = ({
  srcOne,
  srcTwo,
  buttonOne,
  buttonTwo,
  LabelOne,
  LabelTwo,
  title,
  description,
}) => {
  return (
    <section className="flex">
      <div className="flex flex-col max-w-4xl px-2 py-8 mx-auto lg:w-1/2 lg:max-w-full lg:px-12 lg:py-12">
        <img
          className="self-center object-cover object-bottom w-full h-64"
          src={logo}
          alt="overseer"
        />
        <img
          className="self-center object-cover w-full mt-6 rounded-lg shadow-xl lg:hidden h-72 object:center"
          src={srcImg}
          alt="house"
        />
        <h1 className="mt-6 text-2xl font-bold leading-tight text-gray-900">
          {title}
        </h1>
        <p className="mt-2 text-gray-600">{description}</p>
        <Buttons
          srcOne={srcOne}
          srcTwo={srcTwo}
          buttonOne={buttonOne}
          buttonTwo={buttonTwo}
          LabelOne={LabelOne}
          LabelTwo={LabelTwo}
        />
      </div>
      <div className="hidden lg:block lg:w-1/2 lg:relative">
        <img
          className="inset-0 object-cover w-full h-full"
          src={srcImg}
          alt="bikes"
        />
      </div>
    </section>
  )
}

ImageRight.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  srcOne: PropTypes.string,
  srcTwo: PropTypes.string,
  LabelOne: PropTypes.string,
  LabelTwo: PropTypes.string,
  buttonOne: PropTypes.bool,
  buttonTwo: PropTypes.bool,
}

ImageRight.defaultProps = {
  title: "Masthead with image on the right",
  description: "Place description here",
  srcOne: "/",
  srcTwo: "/",
  LabelOne: "Link",
  LabelTwo: "Link",
}
