import LinkNav from '../components/linkNav'
import Background from '@/components/background'
import Table from '../components/table'
import { useRouter } from 'next/router'

export default function Home({ data }) {
  console.log('data', data)
  return (
    <div>
      <LinkNav /> 
      <Background /> 
      <div className="container mx-auto pl-32 pr-32 pt-20 sm:pt-48 align-middle h-2/3"> 
        <Table userID={data}/> 
      </div>
    </div>

  )
}

export async function getServerSideProps( context ) {
    console.log('pid', context.query.user)
    return {
      props: {data: context.query.user}, // will be passed to the page component as props
    }
  }