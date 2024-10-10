import React from "react";

export default function Table() {
  return (
    <div className="timeTable">
      <table>
        <tbody>
          <tr>
            <th>Lundi</th>
            <td>
              <p>Fermé</p>
            </td>
          </tr>
          <tr>
            <th>Mardi</th>
            <td>
              <p>Fermé</p>
            </td>
          </tr>
          <tr>
            <th>Mercredi</th>
            <td>
              <p>17h30 - 21h30</p>
            </td>
          </tr>
          <tr>
            <th>Jeudi</th>
            <td>
              <p>17h30 - 21h30</p>
            </td>
          </tr>
          <tr>
            <th>Vendredi</th>
            <td>
              <p>17h30 - 21h30</p>
            </td>
          </tr>
          <tr>
            <th>Samedi</th>
            <td>
              <p>17h30 - 21h30</p>
            </td>
          </tr>
          <tr>
            <th>Dimanche</th>
            <td>
              <p>17h30 - 21h30</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
