import Head from 'next/head'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Servicios from '../components/Servicios';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Gabriel Mauas | ASESORÍA GRATUITA</title>
        <meta name="description" content="Desarrollos Web | Construimos los sitios que construyen tu negocio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Servicios />
    </div>
  )
}
