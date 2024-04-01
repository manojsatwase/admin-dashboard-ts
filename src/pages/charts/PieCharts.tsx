import { DoughnutChart, PieChart } from "../../components/Charts"
import AdminSidebar from "../../components/admin/AdminSidebar"
import {categories} from "../../assets/data.json";

const PieCharts = () => {
  return (
    <div className="admin-container">
      <AdminSidebar/>
      <main className="chart-container">
        <h1>Pie & Doughnut Charts</h1>
        <section>
           <div>
              <PieChart 
                labels={["Processing","Shipped","Delivered"]}
                data={[12,15,20]}
                backgroundColor={[
                    'hsl(110,80%,80%)',
                    'hsl(110,80%,50%)',
                    'hsl(110,40%,50%)'
                ]}
                offset={[0,0,50]}
              />
           </div>
           <h2>Order Fulfillment Ratio</h2>
        </section>
        <section>
           <div>
              <DoughnutChart 
                labels={categories.map(item=> item.heading)}
                data={categories.map(item=>item.value)}
                backgroundColor={categories.map(item=>`hsl(${item.value * 4},${item.value}%,50%)`)}
                legends={false}
                offset={[0,0,0,80]}
              />
           </div>
           <h2>Product Categories Ratio</h2>
        </section>
        <section>
           <div>
              <DoughnutChart 
                labels={["In Stock","Out Of Stock"]}
                data={[40,20]}
                backgroundColor={[
                    "hsl(269,80%,40%)",
                    "rgb(53,162,255)"
                ]}
                legends={false} 
                offset={[0,80]}
                cutout={"70%"}
              />
           </div>
           <h2>Stock Availability</h2>
        </section>
        <section>
           <div>
              <DoughnutChart 
                labels={["Marketing Cost",
                "Discount",
                "Burnt",
                "Production Cost",
                "Net Margin"]}
                data={[32,28,50,40,34]}
                backgroundColor={[
                    "hsl(110,80%,40%)",
                    "hsl(19,80%,40%)",
                    "hsl(69,80%,40%)",
                    "hsl(300,80%,40%)",
                    "rgb(53,162,255)"
                ]}
                legends={false} 
                offset={[20,30,20,30,80]}
              />
           </div>
           <h2>Revenue Distribution</h2>
        </section>
        <section>
           <div>
              <PieChart 
                labels={["Teenger (Below 20)","Adult (20-40)","Order (above 40)"]}
                data={[102,250,100]}
                backgroundColor={[
                    'hsl(210, 70%, 50%)',
                    'hsl(30, 70%, 50%)',
                    'hsl(0, 70%, 50%)'
                ]}
                offset={[0,0,50]}
              />
           </div>
           <h2>User Age Groups</h2>
        </section>
        <section>
           <div>
              <DoughnutChart 
                labels={["Admin","Customer"]}
                data={[40,200]}
                backgroundColor={[
                    "hsl(210, 70%, 50%)",
                    "hsl(120, 70%, 50%)"
                ]}
                offset={[0,80]}
              />
           </div>
        </section>
       </main>
    </div>
  )
}

export default PieCharts;