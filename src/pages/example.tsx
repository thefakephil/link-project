import LinkNav from '../components/linkNav'
import Background from '@/components/background'
import Table from '../components/table'

export default function Home() {
  return (
    <div>
      <LinkNav /> 
      <Background /> 
      <div className="container mx-auto pl-32 pr-32"> 
        <Table /> 
      </div>
    </div>

  )
}