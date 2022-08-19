import React from "react";
import { data } from "./Data/Data";
import "./App.css";

function App() {
  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
          {data.map((d, index) => (
            <tr key={index}>
              <td>{d.name}</td>
              <td>{d.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
