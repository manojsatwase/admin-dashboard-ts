import { BarChart } from "../../components/Charts"
import AdminSidebar from "../../components/admin/AdminSidebar"

const BarCharts = () => {
  return (
    <div className="admin-container">
      <AdminSidebar/>
      <main className="chart-container">
        <h1>Bar Charts</h1>
        <section>
            <BarChart
               data_1={[200,400,444,525,300,900,1100,1000]}
               data_2={[119,220,445,665,343,555,777,600]} 
               title_1="Products" title_2="Users" 
               bgColor_1={"hsl(260,50%,30%)"}
               bgColor_2={"hsl(360,90%,90%)"}
                />
            <h2>Top Selling Products & Top Customers</h2>
        </section>

        <section>
            <BarChart
               horizontal={true}
               data_1={[200,400,444,525,300,900,1100,1000,700,500,800,1000]}
               data_2={[]} 
               title_1="Products" title_2="" 
               bgColor_1={"hsl(189,40%,50%)"}
               bgColor_2=""
                />
            <h2>Top Selling Products & Top Customers</h2>
        </section>

       </main>
    </div>
  )
}

export default BarCharts