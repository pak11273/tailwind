import { FaCog } from 'react-icons/fa'
import PropTypes from 'prop-types'
import React from 'react'

/* Add this css snippet to your main styles.css

.rotate-center {
    -webkit-animation: rotate-center 1.5s linear infinite;
    animation: rotate-center 1.5s linear infinite;
}

@-webkit-keyframes rotate-center {
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes rotate-center {
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
} */

export const LoaderCog = ({ color, custom, size }) => (
    <FaCog
        className={`transform rotate-45 text-${color} rotate-center mx-auto`}
        color={custom}
        size={size}
    />
)

LoaderCog.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
    custom: PropTypes.string
}

LoaderCog.defaultProps = {
    color: 'gray',
    size: 30
}
