import { BsSearch } from "react-icons/bs"
import AdminSidebar from "../components/admin/AdminSidebar"
import { FaRegBell } from "react-icons/fa"
import userImg from "../assets/userpic.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../assets/data.json";
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import Table from "../components/DashboardTable";

const Dashboard = () => {
  return (
    <div className="admin-container">
       <AdminSidebar />
       <main className="dashboard">
          <div className="bar">
            <BsSearch />
            <input type="text" placeholder="Search for data, users , docs" />
            <FaRegBell />
            <img src={userImg} alt="User" />
          </div>
          <section className="widget-container">
            <WidgetItem 
              heading="Revenue"
              amount={true}
              value={34000}
              percent={60}
              color="rgb(0,115,255)"
             />
              <WidgetItem 
                heading="User"
                value={400}
                percent={-20}
                color="rgb(255, 0, 0)"
             />
              <WidgetItem 
                heading="Transaction"
                value={23000}
                percent={80}
                color="rgb(255 196 0)"
             />
              <WidgetItem 
                heading="Products"
                value={1000}
                percent={30}
                color="rgb(75 0 250)"
             />
          </section>
          <section className="graph-container">
            {/* section one */}
            <div className="revenue-chart">
               <h2>R evenue & Transaction</h2>
               {/* Graph here*/}
               <BarChart 
                 data_1={[300,144,433,665,1237,755,190,1000,2123,543,2345,3232]}
                 data_2={[200,144,1333,565,837,555,1990,1300,232,545,345,3433]}
                 title_1="Revanue"
                 title_2="Transaction"
                 bgColor_1="rgb(0,115,255)"
                 bgColor_2="rgba(53,162,235,0.8)"
               />
            </div>
             {/* section two */}
             <div className="dashboard-categories">
                  <h2>Inventory</h2>
                  <div>
                    {
                      data?.categories.map(({heading,value})=>(
                        <CategoryItem
                          key={heading}
                          heading={heading}
                          value={value}
                          color={`hsl(${value * 4}, ${value}%, 50%)`}
                        />   
                      ))
                    }
                  </div>
                </div>
          </section>
          <section className="transaction-container">
            {/* gender male and female  */}
              <div className="gender-chart">
                 <h2>Gender Ratio</h2>
                 {/* Doughnut Chart */}
                    <DoughnutChart
                     labels={["Female","Male"]}
                     data={[12,19]}
                     backgroundColor={[`hsl(340,82%,56%)`,`rgba(53,162,235,0.8)`]}
                     cutout={80}
                     />
                 <p><BiMaleFemale/></p>
              </div>
            {/* end div  gender male and female  */}
            {/* Start Table */}
            <Table data={data.transaction} />
          </section>
       </main>
    </div>
  )
}

  // widget items
  interface WidgetItemProps {
  heading:string;
  value:number;
  percent:number;
  color:string;
  amount?:boolean // optional
  }

const WidgetItem = ({heading,value,percent,color,amount=false}:WidgetItemProps) => (
  <article className="widget-item">
      <div className="widget-info">
          <p>{heading}</p>
          <h4>{amount ? `$${value}`:value}</h4>
          {
            percent > 0 ? (
              <span className="green">
              <HiTrendingUp /> + {percent}%
            </span>
            ) : (
              <span className="red">
                <HiTrendingDown /> {percent}%
              </span>
            ) 
          }
      </div>
      <div className="widget-circle"
           style={{
            background: `conic-gradient(
                ${color} ${(Math.abs(percent) / 100) * 360}deg,
                rgba(205, 198, 198, 0.5) 0
            )`,
          }}
        >
      <span
        style={{
          color,
        }}
      >
        {percent}%
      </span>
    </div>
   </article>
)

// line bar
interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

// const CategoryItem: React.FC<CategoryItemProps> = ({ heading, value, color }) => {
const CategoryItem= ({ heading, value, color }:CategoryItemProps) => {
  return (
    <div className="category-item">
      <h5>{heading}</h5>
      {/* line bar */}   
      <div className="outer-bg-fill">
        <div 
          className="inner-color-fill"
          style={{
          backgroundColor: color,
          width: `${value}%`
        }}></div>
      </div>
      <span>{value}%</span>
    </div>
  );
}




export default Dashboard