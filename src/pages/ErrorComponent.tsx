import { FC } from "react";
import { useRouteError } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";

// Define the props type for the ErrorComponent
interface ErrorComponentProps {
  error: MyCustomError;
}

// Define a custom error interface that extends Error
interface MyCustomError extends Error {
  status: number;
  statusText: string;
}

const ErrorComponent: FC<ErrorComponentProps> = () => {
  const error = useRouteError() as MyCustomError; // Assert the type to MyCustomError
  // console.log(error);
  return (
    <div className="admin-container">
    <AdminSidebar/>
    <main className="dashboard">
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif", // Font family
      fontSize: "18px", // Font size
    }}>
      <div style={{
        textAlign: "center",
        padding: "20px", // Padding around the content
      }}>
        <p style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "10px", color: "#ff6347" }}>Opps! {error?.status} Page {error?.statusText}</p>
        <p style={{ color: "#696969" }}>Something went wrong!!</p>
        <img style={{width:"100%"}} src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="error"/>
      </div>
    </div>
    </main>
    </div>
  );
};

export default ErrorComponent;
