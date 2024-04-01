import { lazy, Suspense,ComponentType,FC } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoutes";
import Loading from './components/Loading'; // Import your loading indicator component
import ErrorComponent from "./pages/ErrorComponent";

// Import Daynamic Route
// by default react load all component

const Dashboard = lazy(()=>import("./pages/Dashboard"));
const Products = lazy(()=> import("./pages/Products"))
const Customers = lazy(()=> import("./pages/Customers"));
const Transaction = lazy(()=> import("./pages/Transaction"));

// management
const NewProduct = lazy(()=> import("./pages/management/NewProduct"));
const ProductManagement = lazy(()=> import("./pages/management/ProductManagement"));
const TransactionManagement = lazy(()=> import("./pages/management/TransactionManagement"));

// charts
const BarCharts = lazy(()=> import("./pages/charts/BarCharts"));
const PieCharts = lazy(()=> import("./pages/charts/PieCharts"));
const LineCharts = lazy(()=> import("./pages/charts/LineCharts"));

// apps
const Stopwatch = lazy(()=> import("./pages/apps/Stopwatch"));
const Coupen = lazy(()=> import("./pages/apps/Coupen"));
const Toss = lazy(()=> import("./pages/apps/Toss"));


const AppLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

interface LazyLoadingComponentProps {
  component: ComponentType<any>; // Define the type of the 'component' prop
}

const LazyLoadingComponent: FC<LazyLoadingComponentProps> = ({ component: LazyComponent }) => {
  return (
    <Suspense fallback={<Loading />} >
      <LazyComponent />
    </Suspense> 
  );
}

interface MyCustomError extends Error {
  status: number;
  statusText: string;
}

// Create an instance of MyCustomError
const error: MyCustomError = new Error('Not Found') as MyCustomError; // Type assertion to MyCustomError
error.status = 404;
error.statusText = 'Resource not found';

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComponent error={error} />,
    children: [
      {
        element: <ProtectedRoute role="admin" />,
        children: [

          {/*  Admin  */},

          {
            path: "/admin/dashboard",
            element: <LazyLoadingComponent component={Dashboard} />,
          },
          {
            path: "/admin/product",
            element: <LazyLoadingComponent component={Products} />,
          },
          {
            path: "/admin/customer",
            element: <LazyLoadingComponent component={Customers} />,
          },
          {
            path: "/admin/transaction",
            element: <LazyLoadingComponent component={Transaction} />,
          },

          {/*  Charts   */},

          {
            path:"/admin/chart/bar",
            element:<LazyLoadingComponent component={BarCharts} />
          },
          {
            path:"/admin/chart/pie",
            element:<LazyLoadingComponent component={PieCharts} />
          },
          {
            path:"/admin/chart/line",
            element:<LazyLoadingComponent component={LineCharts} />
          },

          {/* Apps*/},

          {
            path:"/admin/app/stopwatch",
            element:<LazyLoadingComponent component={Stopwatch} />
          },{
            path:"/admin/app/coupon",
            element:<LazyLoadingComponent component={Coupen} />
          },{
            path:"/admin/app/toss",
            element:<LazyLoadingComponent component={Toss} />
          },

          {/* Management */},

          {
            path:"/admin/product/new",
            element: <LazyLoadingComponent component={NewProduct} />
          },{
            path:"/admin/product/:id",
            element: <LazyLoadingComponent component={ProductManagement} />
          },
          {
            path:"/admin/transaction/:id",
            element: <LazyLoadingComponent component={TransactionManagement} />
          }
        ],
      },
    ],
  },
]);
