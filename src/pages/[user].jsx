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
      <div className="container mx-auto sm:px-16 px-4 pt-20 pt-48 align-middle h-2/3"> 
      {data && <Table userData={data}/>}
        {/* add 404 component here */}
      </div>
    </div>

  )
}


export async function getServerSideProps( context ) {
    const res = await fetch('https://userdata-test-52c35-default-rtdb.firebaseio.com/data.json')
    const posts = await res.json()
    if (!posts[context.query.user]) {
      return {
        redirect: {
          destination: '/404',
          permanent: false,
        }
    }
  }
    const exactData = posts[context.query.user]
    return {
      props: {data: exactData}, // will be passed to the page component as props
    }
  }