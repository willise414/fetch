// const users = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(users);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let dataReturned = "<h2>Users</h2>";
    data.forEach((user) => {
      dataReturned += `
<table>
  <tr>
    <th>Name:</th>
    <td>${user.name}</td>
  </tr>
  <tr>
    <th>Email:</th>
    <td>${user.email}</td>
  </tr>
  <tr>
    <th>Phone:</th>
    <td>${user.phone}</td>
</tr>
  <br>
</table>
`;

      // output += `

      // <h3>${user.name}</h3>
      // <p>${user.email}</p>
      // <p>${user.phone}</p>
      //
      //<hr>

      // `;
      let test = `${user.name}`;
      console.log(user);
    });
    document.getElementById("userData").innerHTML = dataReturned;
  });
