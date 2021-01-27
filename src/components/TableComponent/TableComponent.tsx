import React, {useEffect, useState} from 'react';
import { Table } from 'reactstrap';

const TableComponent = (props:any) => {
   
	const getDataList = props.data.map((item:any)=>{
		return <tr>
			<td><span className="font-weight-bold">{item.id}</span></td>
			<td>{item.name}</td>
			<td>{item.body}</td>
			</tr>
	})

  return (
	<div className="container p-4">
    <Table className="data-table" responsive striped>
      <thead className="bg-black">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
		  {getDataList}
      </tbody>
    </Table>
		  </div>
  );
}

export default TableComponent;
