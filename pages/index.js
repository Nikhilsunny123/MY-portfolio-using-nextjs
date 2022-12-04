import Head from 'next/head'
import Header from '../components/Header'
import HeroSection from '../components/Hero.section'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Nikhil Sunny</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/*Header */}
      <Header/>
      {/*Hero Section */}
      <HeroSection/>
       {/*Skills */}
      <Skills/>
    </div>
  )
}
