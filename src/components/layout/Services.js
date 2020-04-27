import React from "react";
import App from "../../App";

const Services = () => {
  return (
    <div className="" style={{ width: "100%" }}>
      <img src="/img/services-banner.png" alt="" style={{ width: "100%" }} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Examples</th>
            <th>Item Price</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Small/Average sized figured</td>
            <td>small infantry, DnD small Minis</td>
            <td>$5.00</td>
          </tr>
          <tr>
            <td>Special Jobs</td>
            <td>non basic minis, and special paint jobs</td>
            <td>$10.00</td>
          </tr>
          <tr>
            <td>Small Dragon Size</td>
            <td>Smaller Dragon figures, larger tanks</td>
            <td>$20.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Services;
