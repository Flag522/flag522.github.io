import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import HomepageFeatures from '../components/HomepageFeatures'
import Head from '@docusaurus/Head'
import HeroImg from '../../static/img/Flags.png'

const svgList = []
const Svg = ({ Svg, color, title, link }) => {
  return (
    <a href={link} target='_blank'>
      <Svg className={styles.svg} style={{ fill: color }} />
    </a>
  )
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <h1 className='hero__title'>{siteConfig.title}</h1>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className='button button--secondary button--lg' to='/Introduction'>
            🖱Click Here!
          </Link>
        </div>
      </div>
    </header>
  )
}

function MyHero() {
  return (
    <div className={styles.myHeroContainer}>
      <div className={styles.leftContainer}>
        <h1 className={styles.leftContainer_h1}>
          烽淋氨埂<br/>
          <span style={{ color: 'var(--ifm-color-primary)' }}>FLAG550</span>
        </h1>
        <h2 className={styles.leftContainer_h2}>
            与其为了哗众取宠胡言乱语昧己瞒心
        </h2>
        <h2 className={styles.leftContainer_h2}>
            不如做个跳梁小丑聊以自娱逍遥自在
        </h2>
        <h2 className={styles.leftContainer_h2}>
            <span style={{ color: 'var(--ifm-color-primary)' }}>妄言妄听</span>
        </h2>
        <div className={styles.buttonContainer}>
            {/* <div className={styles.buttons}>
                <Link className='button button--secondary button--lg' to='/Introduction'>
                👄 妄言妄听 👂
                </Link>
            </div> */}
        </div>
      </div>
      <div className={styles.rightContainer}>
        <img src={HeroImg} alt='FLAG' />
      </div>
    </div>
  )
}
export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title='Home'>
      <main>
        <MyHero />
      </main>
    </Layout>
  )
}