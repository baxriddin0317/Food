import React, { useState } from 'react'
import "./Table.scss";
import MOCK_DATA from "../../assets/Baza/MOCK_DATA.json";

function Table() {
  const [data, setData] = useState(MOCK_DATA);
  const [sort, setSort] = useState("ASC");

  const sorting = (col) => {
    if(sort === "ASC"){
      const sorted = [...data].sort((a,b) => {
        return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      })  
      setData(sorted);
      setSort("DESC");
    }
    if(sort === "DESC"){
      const sorted = [...data].sort((a,b) => {
        return a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      })  
      setData(sorted);
      setSort("ASC");
    }
  }

  return (
    <div className='table'>
      <div className="table__box">
        <h2>
          Order Report
        </h2>
        <span onClick={() => sorting("username")}>
          Filter order
        </span>
      </div>
      <div className="table__tab">
        <div className="table__tr">
          <span className="table__tr-td" onClick={() => sorting("username")}>
            Customer
          </span>
          <span className="table__tr-td" onClick={() => sorting("menu")}>
            Menu
          </span>
          <span className="table__tr-td">
            Total Payment
          </span>
          <span className="table__tr-td">
            Status
          </span>
        </div>

        <div className="table__block">
          {data.length > 0 && data.map(d => (
            <div className="table__tb" key={d.id}>
              <span className="table__td">
                <img src={d.avatar} alt="avatar" />
                {d.username}
              </span>
              <span className="table__td">
                {d.menu}
              </span>
              <span className="table__td">
                {d.money}
              </span>
              <span className={d.status}>
                {d.status}
              </span>
            </div>
        ))}
        </div>

      </div>
    </div>
  )
}

export default Table
