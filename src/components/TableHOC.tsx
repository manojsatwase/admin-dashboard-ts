import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";
import {useTable,Column, TableOptions,useSortBy,usePagination} from "react-table";


 // generic dynamic get props whenewher we use
 // either <T extends {}> use or <T extends Object> both are same
function TableHOC<T extends Object>(
    columns:Column<T>[], // column ki array
    data:T[],
    containerClassname:string,
    heading:string,
    showPagination:boolean=false,
    ){
  return function HOC(){
    const options:TableOptions<T> = {
        columns
        ,data,
        initialState:{
            pageSize:2,
        }
    }
     // replace row with page for pagination
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        pageCount,
        gotoPage,
        state:{pageIndex},
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage
    } = useTable(options,useSortBy,usePagination);

    return (
        <div className={containerClassname}>
            <h2 className="heading">{heading}</h2>
            <table className="table" {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup,index)=>(
                        <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                           {
                            headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render("Header")}
                                    {column.isSorted && <span>
                                    {" "}
                                    {column.isSortedDesc ? (
                                        <AiOutlineSortDescending />
                                    ) : (
                                        <AiOutlineSortAscending />
                                    )}</span>}
                                </th>
                            ))
                           }
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        // replace rows with page
                        page.map(row => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => (
                                        <td {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    ))}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {
                showPagination && (
                    <div className="table-pagination">
                        <button onClick={() => gotoPage(0)}>First</button>
                        <button disabled={!canPreviousPage} onClick={previousPage}>Prev</button>
                        {`${pageIndex + 1} of ${pageCount}`}
                        <button disabled={!canNextPage} onClick={nextPage}>Next</button>
                        <button onClick={() => gotoPage(pageCount-1)}>Last</button>
                    </div>
                )
            }
        </div>
       )
  }
}

export default TableHOC;