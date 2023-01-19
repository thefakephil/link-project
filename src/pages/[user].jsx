import LinkNav from '../components/linkNav'
import Background from '@/components/background'
import Table from '../components/table'
import { useRouter } from 'next/router'
import Avatar from '../components/avatar'

export default function Home({ data }) {
  return (
    <div>
      <LinkNav /> 
      <Background />
      <div className='grid place-items-center pt-20'> 
        <Avatar /> 
      </div> 
      <div className="container mx-auto lg:px-48 px-4 pt-20 align-middle h-2/3"> 
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