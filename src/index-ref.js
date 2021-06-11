import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Creating using html tag with static value
// const element = <h1>Hello, world!</h1>;

//Creating element using html tags with dynamic value
// const name = 'Maruti Kutre';
// const element = <h1>Hello, {name}</h1>;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

//Creating an element with conditions if the object is null then show message "Hello, Stranger." else show hello User.firstname user.lastname

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Maruti',
//   lastName: 'Kutre'
// };
// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}</h1>;  }
//   return <h1>Hello, Stranger.</h1>;}


//Creating an element using html tags with multiple headers
// const element = (
//   <div>
//   <h1>Hello!</h1>
//   <h2>Good to see you here.</h2>
// </div>
// );

//Creating an element using React
// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );

// Creating an element using html tags
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);


ReactDOM.render(
  element,
  document.getElementById('root')
);


/*Comment above line now
//Creating an element using html tags with current time refreshed every second
// Enable setInterval function as well
function tick() {
  var time = new Date().toLocaleTimeString();
  const element = (
    
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {time}.</h2>
    </div>
  );
  console.log("current time is " + time )
  ReactDOM.render(element, document.getElementById('root'));
}
  
setInterval(tick, 1000);
*/