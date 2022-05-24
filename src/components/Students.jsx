import React from "react";

const Students = () => {
  return (
    <div className="home">
      <h1 style={{ textDecoration: "underline", marginBottom: "5vh" }}>
        Student Details
      </h1>
      <table class="table table-secondary table-bordered table-hover">
        <thead>
          <tr class=" table table-primary table-striped-columns">
            <th scope="col">S/N</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Social Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-light">
            <th scope="row">1</th>
            <td>Abhishek</td>
            <td>Badgaiyan</td>
            <td>@instagram</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Shivakant</td>
            <td>Verma</td>
            <td>@facebook</td>
          </tr>
          <tr className="table-light">
            <th scope="row">3</th>
            <td>Akashat</td>
            <td>Tripathi</td>
            <td>@instagram</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Kamal</td>
            <td>Tiwari</td>
            <td>@twitter</td>
          </tr>
          <tr className="table-light">
            <th scope="row">5</th>
            <td>Manoj</td>
            <td>Shukla</td>
            <td>@instagram</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Devesh</td>
            <td>Mishra</td>
            <td>@instagram</td>
          </tr>
          <tr className="table-light">
            <th scope="row">7</th>
            <td>Anmol</td>
            <td>Bhargav</td>
            <td>@instagram</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Kiran</td>
            <td>Dwivedi</td>
            <td>@facebook</td>
          </tr>
          <tr className="table-light">
            <th scope="row">9</th>
            <td>Aman</td>
            <td>Trivedi</td>
            <td>@instagram</td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>Ashish</td>
            <td>Dwivedi</td>
            <td>@facebook</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Students;