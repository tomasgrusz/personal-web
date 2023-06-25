import Model from 'components/three';
import './index.scss'

import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {BiLinkExternal} from 'react-icons/bi';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className='LandingPage'>
            <div className='logo'>
                <svg viewBox="80.844 83.905 316.107 295.862" width="316.107" height="295.862">
                    <path d="M 80.844 251.627 C 86.379 251.627 121.07 230.862 133.993 222.105 C 170.789 197.169 202.454 173.462 235.888 144.033 C 271.071 113.064 287 83.671 287.263 83.906 C 287.7 84.297 277.167 105.908 274.221 111.795 C 258.036 144.148 244.675 178.568 233.906 213.104 C 220.393 256.444 203.723 300.6 189.715 343.756 C 186.227 354.5 173.947 382.889 175.743 377.704 C 180.378 364.323 189.684 334.956 194.012 321.484 C 206.975 281.132 219.339 240.875 228.27 199.412 C 231.007 186.706 235.593 160.794 222.744 151.613 C 188.201 126.932 145.629 178.956 175.367 208.694 C 204.495 237.822 245.157 239.414 284.089 240.704 C 297.777 241.158 316.288 240.827 332.769 238.86 C 349.25 236.893 372.863 227.793 372.863 227.793 C 372.863 227.793 407.293 217.469 393.827 197.928 C 380.361 178.387 372.631 227.389 372.631 227.389 C 372.631 227.389 356.041 284.391 366.512 330.994 C 376.983 377.597 387.001 379.767 387.001 379.767 C 387.001 379.767 218.999 273.777 307.326 178.672 C 395.653 83.567 282.099 239.978 80.844 251.627 Z"></path>
                </svg>
            </div>
            <div className='links'>
                <div className='linkedin'>
                    <Link to={'https://www.linkedin.com/in/tomasgrusz/'} target="_blank" rel="noopener noreferrer"><BsLinkedin /></Link>
                </div>
                <div className='github'>
                    <Link to={'https://github.com/tomasgrusz'} target="_blank" rel="noopener noreferrer"><BsGithub /></Link>
                </div>
            </div>
            <h1 className='welcome-heading'>Welcome to my website!</h1>
            <div className='model-wrapper'>
                <Model />
            </div>
            <div className='bottom-content'>
                <h2>The website is currently in development, stay tuned!</h2>
                <Link to={'https://github.com/tomasgrusz/personal-web'} target="_blank" rel="noopener noreferrer">
                    <h3>Check out the progress on my GitHub <BiLinkExternal /></h3>
                </Link>
            </div>
            <label className='copyright'>©2023 Tomas Grusz</label>
        </div>
    )
}

export default LandingPage;