import React from 'react'
import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import xIconLight from '../../assets/twitter-light.svg'
import xIconDark from '../../assets/twitter-dark.svg'
import linkedInIconLight from '../../assets/linkedin-light.svg'
import linkedInIconDark from '../../assets/linkedin-dark.svg'
import githubIconLight from '../../assets/github-light.svg'
import githubIconDark from '../../assets/github-dark.svg'
import CV from '../../assets/CV-Ali.pdf'
import { useTheme } from '../../common/ThemeContext'

const Hero = () => {
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme === 'light' ? sun: moon;
    const xIcon = theme === 'light' ? xIconLight: xIconDark;
    const linkedInIcon = theme === 'light' ? linkedInIconLight: linkedInIconDark;
    const gitubIcon = theme === 'light' ? githubIconLight: githubIconDark;
  return (
<section id="hero" className={styles.container} >
    <div className={styles.colorModeContainer}>
        <img className={styles.hero}src={heroImg} alt="Animated illustration of Ali" />
        <img className={styles.colorMode} src={themeIcon} alt="Color Mode Icon" onClick={toggleTheme} />
    </div>
    <div className={styles.info}>
        <h1>Ali<br />Rehman</h1>
        <h2>Front-End Developer</h2>
        <span>
            <a href="https://x.com/" target ="_blank">
                <img src={xIcon} alt="X logo" />
            </a>
            <a href="https://github.com/RdevAli" target ="_blank">
                <img src={gitubIcon} alt="Github logo" />
            </a>
            <a href="https://www.linkedin.com/in/ali-rehman0" target ="_blank">
                <img src={linkedInIcon} alt="LinkedIn logo" />
            </a>
        </span>
        <p className={styles.description} > Mastering the MERN stack, one line of code at a time.</p>
        <a href={CV} download >
            <button className="hover">Resume</button>
        </a>
    </div>
</section>

)
}

export default Hero