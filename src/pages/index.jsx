import Nav from '../components/nav'
import Hero from '../components/hero'
import Table from '../components/table'
import CardView from '../components/cardview'
import ProductDemo from '../components/productDemo'


export default function Home() {
  return (
    <>
      <Nav /> 
      <Hero /> 
      <ProductDemo /> 
      {/* <CardView /> */}
      <div className="container mx-auto pl-32 pr-32"> 
      </div>
    </>

  )
}
