import data from '../data/user2.json'
import Table from '../components/table'


export default function ProductDemo() {
    return (
        <div className="grid grid-rows-3 grid-flow-col gap-4 items-center"> 
            <div className="md:row-span-4"> col 1 </div>
            <div className="md:row-span-4 mx"> <Table userData={data}/></div>
        </div>
    )
}

