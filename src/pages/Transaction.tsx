import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/admin/AdminSidebar"
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";

const Transaction = () => {
  interface DataType{
    user:string;
    amount:number;
    discount:number;
    quantity:number;
    status:ReactElement;
    action:ReactElement
  }

  const arr: Array<DataType> = [
    {
      user: "Charas",
      amount: 4500,
      discount: 400,
      status: <span className="red">Processing</span>,
      quantity: 3,
      action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
    },
  
    {
      user: "Xavirors",
      amount: 6999,
      discount: 400,
      status: <span className="green">Shipped</span>,
      quantity: 6,
      action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
    },
    {
      user: "Xavirors",
      amount: 6999,
      discount: 400,
      status: <span className="purple">Delivered</span>,
      quantity: 6,
      action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
    },
  ];

  
  const columns:Column<DataType>[] = [{
    Header:"User",
    accessor:"user"
  },{
    Header:"Amount",
    accessor:"amount"
  },{
    Header:"Discount",
    accessor:"discount"
  },{
    Header:"Quantity",
    accessor:"quantity"
  },{
    Header:"Status",
    accessor:"status"
  },{
    Header:"Action",
    accessor:"action"
  }
  ]

  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(
       columns,
       data,
       "dashboard-table-box",
       "Transaction",
       true
      ),[])

  return (
    <div className="admin-container">
    <AdminSidebar />
    <main>
      <Table/>
    </main>
   </div>
  )
}

export default Transaction