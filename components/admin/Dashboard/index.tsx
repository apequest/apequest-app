import Link from "next/link"



interface DashboardPros {
    address: string | any
}


const Dashboard: React.FC<DashboardPros> = ({ address }) => {


    return (
        <div>
            <Link href="/admin/create-quizz">New Quizz</Link>
            List of previous Hacksthons that he conducted
        </div>
    )


}

export default Dashboard