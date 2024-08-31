import React, { useState } from 'react';
import './App.css';

function App() {
  const initialTableData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ];

  const [tableData, setTableData] = useState(initialTableData);

  const dateSort = () => {
    const sortedData = [...tableData].sort((a, b) => new Date(a.date) - new Date(b.date));
    setTableData(sortedData);
  };

  const viewSort = () => {
    const sortedData = [...tableData].sort((a, b) => a.views - b.views);
    setTableData(sortedData);
  };

  return (
    <div className="App">
      <div className='sortBtn'>
        <button onClick={dateSort}>Sort by date</button>
        <button onClick={viewSort}>Sort by views</button>
      </div>
      <table>
        <thead>
          <tr>
            <td><strong>Date</strong></td>
            <td><strong>Views</strong></td>
            <td><strong>Article</strong></td>
          </tr>
        </thead>
        <tbody>
          {tableData.map((ele, index) => (
            <tr key={index}>
              <td>{ele.date}</td>
              <td>{ele.views}</td>
              <td>{ele.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;