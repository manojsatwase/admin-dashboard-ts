import { LineChart, months } from "../../components/Charts"
import AdminSidebar from "../../components/admin/AdminSidebar"

const LineCharts = () => {
  return (
    <div className="admin-container">
    <AdminSidebar/>
    <main className="chart-container">
      <h1>Line Charts</h1>
      <section>
        <LineChart
        // pass months
          data={[200,444,444,556,778,455,990,1444,256,447,1000,1200]}
          label="Users"
          borderColor="rgb(53,162,255)"
          backgroundColor="rgba(53,162,255,0.5)"
          labels={months}
        />
        <h2>Active Users</h2>
      </section>
      <section>
        <LineChart
        // pass months
          data={[40,60,244,100,142,120,41,47,50,56,60,100]}
          backgroundColor={"hsla(269,80%,40%,0.4)"}
          borderColor={"hsl(269,80%,40%)"}
          label="Products"
          labels={months}
        />
        <h2>Total  Products (SKU)</h2>
      </section>
      <section>
        <LineChart
        // pass months
          data={[24000,14400,24100,34300,90000,2000,25600,44700,99000,144400,100000,120000]}
          backgroundColor={"hsla(129,80%,40%,0.4)"}
          borderColor={"hsl(129,80%,40%)"}
          label="Revenue"
          labels={months}
        />
        <h2>Total Revanue Products</h2>
      </section>
      <section>
        <LineChart
        // pass months
          data={[5000,3000,4000,6990,7000,5000,4000,9000,10000,6000,2000,15000]}
          backgroundColor={"hsla(29,80%,40%,0.4)"}
          borderColor={"hsl(29,80%,40%)"}
          label="Discount"
          labels={months}
        />
        <h2>Descount Allotted</h2>
      </section>
    </main>
  </div>
  )
}

export default LineCharts