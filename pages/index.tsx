import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from './Navbar'
import Intro from './Intro'
import About from './About'
import Services from './Services'
import Process from './Process'
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar/>
      <Intro />
      <About />
      <Services />
      <Process />
      <Footer />
    </>
  )
}
