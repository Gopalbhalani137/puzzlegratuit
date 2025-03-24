import React from 'react'
import Hero from './Hero'
import Cards from './Cards'
import About from './About'
import { Helmet } from 'react-helmet'
function Home() {
  return (
    <>
    <Helmet>
        <title>Accueil | Puzzle en ligne gratuit</title>
        <meta 
          name="description" 
          content="Plongez dans notre plateforme de puzzle en ligne gratuit, découvrez nos cartes, et apprenez-en plus sur nos services." 
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Accueil | Puzzle en ligne gratuit" />
        <meta 
          property="og:description" 
          content="Découvrez une multitude de puzzles, leurs histoires, et profitez d’une expérience immersive pour tous les âges." 
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
    <div>
       <Hero />
       <Cards />
        <About />
    </div>
    </>
    
  )
}

export default Home
