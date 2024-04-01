import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
    ChartOptions,
    ArcElement,
    PointElement,
    LineElement,
    Filler

} from "chart.js";

import {Bar, Doughnut, Line, Pie} from "react-chartjs-2";


ChartJS.register(
    CategoryScale,
    LinearScale, 
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
    Filler
)

export const months = ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

interface BarChartProps{
 horizontal?:boolean,
 data_1:number[];
 data_2:number[];
 title_1:string;
 title_2:string;
 bgColor_1:string;
 bgColor_2:string;
 labels?:string[];
}

export const BarChart = ({
    data_1=[],
    data_2=[],
    title_1,
    title_2,
    bgColor_1,
    bgColor_2,
    horizontal=false, // true : vertical : horizontal
    labels=months
}:BarChartProps) => {

    const options:ChartOptions<"bar"> = {
        responsive:true,
        indexAxis:horizontal ? "y" : "x",

        plugins:{
            legend: {
                display:true
            },
            title: {
                display:true,
                text:"Chart.js Bar Chart",
            }
        },
        scales:{
            y:{
                beginAtZero:true,
                grid:{
                    display:false
                }
            },
            x:{
                grid:{
                    display:false
                }
            }
        }
    }
                        // genraric basicali
    const barData:ChartData<"bar",number[],string> = {
    labels,
     datasets: [
        {
            label:title_1,
            data:data_1,
            backgroundColor:bgColor_1,
            barThickness:"flex",
            barPercentage:1,
            categoryPercentage:0.5
        },{
            label:title_2,
            data:data_2,
            backgroundColor:bgColor_2,
            barThickness:"flex",
            barPercentage:1,
            categoryPercentage:0.5
        }
     ]
}


  return <Bar width={horizontal ? "200%": ""} options={options} data={barData} />
}

{/* --------------------------END--------------------------*/}

// not horizontal and verticle 
interface DoughnutChartProps {
    labels?:string[]; // // ? means optional
    data:number[];
    backgroundColor:string[];
    cutout?:number | string; // number or string
    legends?:boolean;
    offset?:number[] // offset to set how many distance cutout
}



export const DoughnutChart = ({
    labels,
    data,
    backgroundColor,
    cutout,
    legends=true,
    offset
}:DoughnutChartProps) => {

// data 
const doughnutData:ChartData<"doughnut",number[],string> = {
    labels,
    datasets:[
        {
            data,
            backgroundColor,
            borderWidth:0,
            offset
        }
    ]
}

// options
const doughnutOptions:ChartOptions<"doughnut"> = {
    responsive:true,
    plugins:{
        legend:{
            display:legends,
            position:"bottom", // left right , top , bottom
            labels:{
               padding:40,  
            }
        }
    },
    cutout
}

  return <Doughnut data={doughnutData} options={doughnutOptions}  />
}

// Pie Chart
interface PieChartProps {
    labels?:string[]; // // ? means optional
    data:number[];
    backgroundColor:string[];
    offset?:number[] // offset to set how many distance cutout
}

export const PieChart = ({
    labels,
    data,
    backgroundColor,
    offset
}:PieChartProps) => {

// data 
const pieChartData:ChartData<"pie",number[],string> = {
    labels,
    datasets:[
        {
            data,
            backgroundColor,
            borderWidth:1,
            offset
        }
    ]
}

// options
const pieChartOptions:ChartOptions<"pie"> = {
    responsive:true,
    plugins:{
        legend:{
            display:false,
        }
    },
}

  return <Pie data={pieChartData} options={pieChartOptions}  />
}

interface LineChartProps {
    data: number[];
    label: string;
    backgroundColor: string;
    borderColor: string;
    labels?: string[];
}

export const LineChart = ({
    data,
    label,
    backgroundColor,
    borderColor,
    labels = [] // Default empty array if not provided
}: LineChartProps) => {

    const options: ChartOptions<'line'> = {
        responsive: true,
        plugins: {
            legend: {
                display: true
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    };

    const lineChartData: ChartData<'line', number[], string> = {
        labels,
        datasets: [
            {
                fill:true,
                label,
                data,
                backgroundColor,
                borderColor,
            }
        ]
    };

    return <Line options={options} data={lineChartData} />;
};
