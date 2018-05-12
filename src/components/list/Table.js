import React from 'react'

export default (props) => {
  return (
<div>
    <div className="Table-container">
        <table className="Table">
        <thead className="Table-head">
        <tr>
          <th>Title </th>
          <th>Platform</th>
          <th>Score</th>
          <th>Genre</th>
          <th>Editors Choice</th>
          <th>Release Year</th>
        </tr>

        </thead>
        <tbody className="Table-body">
        {props.game.map((data,index)=>(<tr key={index}>

         <td> {data.title}</td>
         <td> {data.platform}</td>
         <td>{data.score}</td>
         <td>{data.genre}</td>
         <td>{props.renderchoice(data.editors_choice)}</td>
         <td>{data.release_year}</td>

         </tr>))}
        </tbody>
        </table>
      </div>
      </div>
  )
}
