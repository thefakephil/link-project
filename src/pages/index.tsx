import Nav from '../components/nav'
import Hero from '../components/hero'
import Table from '../components/table'

export default function Home() {
  return (
    <>
      <Nav /> 
      <Hero /> 
      <div className="container mx-auto pl-32 pr-32"> 
        <Table /> 
      </div>
    </>

  )
}
