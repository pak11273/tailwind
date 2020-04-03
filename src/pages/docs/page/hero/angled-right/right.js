import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'

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
    LabelTwo
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

export const HeroWithAngledImagesOnRight = ({
    titleOne,
    titleTwo,
    srcOne,
    srcTwo,
    srcImg,
    subtitle,
    LabelOne,
    LabelTwo,
    buttonOne,
    buttonTwo
}) => (
    <section
        x-data="{ open: false }"
        className="relative overflow-hidden bg-white"
    >
        <div className="max-w-screen-xl mx-auto ">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <div className="px-4 pt-6 sm:px-6 lg:px-8"></div>
                <div className="max-w-screen-xl px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div className="sm:text-center lg:text-left">
                        <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                            {titleOne}&nbsp;
                            <br className="xl:hidden" />
                            <span className="text-primary-500">{titleTwo}</span>
                        </h2>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            {subtitle}
                        </p>
                        {buttonOne || buttonTwo ? (
                            <Buttons
                                srcOne={srcOne}
                                srcTwo={srcTwo}
                                buttonOne={buttonOne}
                                buttonTwo={buttonTwo}
                                LabelOne={LabelOne}
                                LabelTwo={LabelTwo}
                            />
                        ) : null}
                    </div>
                </div>
                <svg
                    className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
                    fill="currentColor"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <polygon points="50,0 100,0 50,100 0,100" />
                </svg>
            </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
                className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
                src={srcImg}
                alt=""
            />
        </div>
    </section>
)

HeroWithAngledImagesOnRight.propTypes = {
    titleOne: PropTypes.string,
    titleTwo: PropTypes.string,
    srcOne: PropTypes.string,
    srcTwo: PropTypes.string,
    srcImg: PropTypes.string,
    subtitle: PropTypes.string,
    LabelOne: PropTypes.string,
    LabelTwo: PropTypes.string,
    buttonOne: PropTypes.bool,
    buttonTwo: PropTypes.bool
}

HeroWithAngledImagesOnRight.defaultProps = {
    titleOne: 'Hero with angled image',
    srcImg: 'https://via.placeholder.com/900',
    srcOne: '/',
    srcTwo: '/',
    LabelOne: 'Link',
    LabelTwo: 'Link'
}
