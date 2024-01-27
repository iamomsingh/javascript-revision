//**************************How to create Promise************************************************************************** */

//1. First way to create promise

//promise creating
//promise has a callback fn which contain two parameter resolve & reject.
const promiseOne = new Promise(function (resolve, reject) {
  //Do async task
  //Db call task, cryptography, network

  setTimeout(function () {
    console.log("async task 1...");
    resolve();
  }, 1000);
});

// promise consumed
//then also has a callback fn & are directly connected to a resolve, when promise is complete it value is return to then.
promiseOne.then(function () {
  console.log("Async task 1 resolved");
});

// 2. second way to create Promise

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2.....");
    resolve();
  }, 2000);
}).then(() => {
  console.log("Async task 2 resolved");
});

//3. Third way to create Promise

//here we are sending data through resolve & data are consumed by then.

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "om singh", email: "om123@gmail.com" }); //data are mostly sent in object form
  }, 3000);
});

promiseThree.then((data) => {
  console.log(data);
});

//4. Fourth way to create Promise

//here we are checking the error

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = false;

    if (!error) {
      resolve({ name: "yasika singh", email: "yasika123@gmail.com" });
    } else {
      reject("Error: something went wrong."); //here reject is connected to catch
    }
  }, 4000);
});

//catch also has a callback fn & are directly connected to a reject, when promise is Incomplete it value is return to catch.
promiseFour
  .then((data) => {
    console.log(data);
    return data.name;
  })
  .then((name) => {
    console.log(name);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected...");
  });

// 5. Fifth way to create Promise using Async & await

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = false;

    if (!error) {
      resolve({ course: "javascript", email: "js123@gmail.com" });
    } else {
      reject("Error: JS went wrong."); //here reject is connected to catch
    }
  }, 5000);
});

//consume promise through async & await method.

// async function consumePromiseFive() {
//   const response = await promiseFive;
//   console.log(response);
// }

//Note:-
//If we not use try catch block in async handling then it through error "UnhandledPromiseRejection"
//it means when promise get rejected then there is no catch to handle the rejection.
// async & await not catch error automatically, we have to use try catch block.

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

//6. In this we do how  to fetch data from api using async & await.

async function getAllUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await fetch(url);

    const data = await response.json(); //here we use await again bc it also take time to convert data from string to json.
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getAllUsers();

//7. In this we do how to fetch data from api using then & catch.

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log("Error:", error));

/*
Q. what is Fetch?

-> The Fetch API provides an interface for fetching resources (including across the network) 
-> fetch is a promise object, which return promise.
-> It does not directly return the JSON response body but instead returns a promise that resolves with a Response object.
-> to extract the JSON body content from the Response object, we use the json() method.

-> Fetch also integrates advanced HTTP concepts such as CORS and other extensions to HTTP.
->
-> 

Q. working of fetch Api ?

Q. How request in fetch method run faster than normal fetching process(async process).

1. visit the working inside execution context notes.
2. on there callback is introduce in web API/Node Api.
3. callback has a "special queue" in which call back fn goes in queue.
4. the special queue has a name [Micro task queue or priority Queue].
5. this queue has a higher priority to send callback fn to "call stack" rarher than normal task Queue.

Q. Inside of fetch.

-> response = fetch('something',{});

    it has two working system inside it.
    1. Web browser/node:- one part goes to handle api request in web browser/node.
    2. Data :- anathor part goes for  making space reserve in memory for the variable or data.

    Data---
    onfulfilled[fn]  -> it is a array which is equal to "resolve" of promise.
    on Rejection[fn]  -> it is equivalent to "rejection" of promise.

    -> we can't directly access or push data to these three field bc they are private key .
    
    web browser/node :- it access the api & send to "network request"
    from network request if we get response then send to onfulfilled().
    if not then send to onRejection();

    from both these value send to the "data" variable which is reserved in memory to fulfill the value.
    after thar data send the value to the variable "response".

*/
