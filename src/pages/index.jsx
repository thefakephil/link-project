import Nav from '../components/nav'
import Hero from '../components/hero'
import Table from '../components/table'


const grabData = () => {
  return fetch('https://userdata-test-52c35-default-rtdb.firebaseio.com/');
}


export default function Home() {
let firebaseData = grabData();
console.log(firebaseData)
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
