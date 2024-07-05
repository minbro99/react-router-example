import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css"; // ag-grid-community에서 스타일 가져오기
import "ag-grid-community/styles/ag-theme-quartz.css"; // 기본 테마 중 하나를 사용


import { useMemo, useState } from 'react';

const MyCellComponent = p => {
  return <>
  
  {p.value}
  </>
};

function People() {

  const defaultColDef = useMemo( ()=> {
    return {
      flex: 1,
      filter: true,
      editable: true,
      flaotingFilter: true,
      
    };
  });

  const [rowData, setRowData] = useState([
    { make: "1팀", model: "0789", price: 64950, electric: true },
    { make: "1팀", model: "0777", price: 33850, electric: false },
    { make: "1팀", model: "0755", price: 29600, electric: false },
    { make: "1팀", model: "0785", price: 48890, electric: true },
    
  ]);

  const [colDefs, setColDefs] = useState([
    { field: 'make',
      cellRenderer: MyCellComponent,
      checkboxSelection: true
     },
    { field: "model"},
    { field: "price",
      valueFormatter: p => "£" + p.value.toLocaleString() },
    { field: "electric" },
  ]);

  return (
    <div className='ag-theme-quartz' style={{height: 500}}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} defaultColDef={defaultColDef} rowSelection={'multiple'} pagination={true} paginationAutoPageSize={10} />
    </div>
  );
}

export default People;
