# ---- 14️ Event Loop

First, understand one important fact:

JavaScript is single-threaded.

That means JavaScript has one main call stack where synchronous code executes.

For example:

console.log("A");
console.log("B");
console.log("C");

Output:

A
B
C

Everything happens sequentially.

# --- Call Stack

Remember your previous topic:

Call Stack

Example:

function greet() {
    console.log("Hello");
}


greet();

Execution:

        Call Stack
        ┌─────────┐
        │ greet() │
        ├─────────┤
        │ global  │
        └─────────┘

When greet() finishes, it is removed.

But what about asynchronous code?

Consider:

console.log("Start");


setTimeout(() => {
    console.log("Timer");
}, 2000);


console.log("End");

Many beginners expect:

Start
Timer
End

❌ Wrong.

Actual output:

Start
End
Timer

Why?

Because setTimeout() doesn't block the JavaScript thread.

# --- The Event Loop

Think of JavaScript's environment like this:

                  JavaScript Runtime


             ┌───────────────────┐
             │    Call Stack     │
             └─────────┬─────────┘
                       │
                       ↓
                ┌─────────────┐
                │ Event Loop  │
                └──────┬──────┘
                       │
             ┌─────────┴──────────┐
             ↓                    ↓
      Microtask Queue       Callback Queue
             │                    │
             ↓                    ↓
          Promises           setTimeout
          await              events
                             callbacks

The event loop coordinates when queued asynchronous work gets a chance to run after the call stack becomes empty.

# -- 15️ Microtask Queue

The microtask queue is especially important because it has higher priority than the normal callback/task queue.

Common microtasks include:

Promise.then()
Promise.catch()
Promise.finally()
queueMicrotask()

Example:

console.log("A");


Promise.resolve().then(() => {
    console.log("B");
});


console.log("C");

Output:

A
C
B

Why?

First:

console.log("A");

runs.

Then:

Promise.resolve().then(...)

schedules the callback as a microtask.

Then:

console.log("C");

runs.

Once the synchronous call stack is empty, the event loop processes the microtask.

Therefore:

A
C
B
# -- 16️ Callback Queue

The callback queue (often called the task queue or macrotask queue) contains tasks such as callbacks from APIs like:

setTimeout()
setInterval()

Example:

console.log("Start");


setTimeout(() => {
    console.log("Timeout");
}, 0);


console.log("End");

Output:

Start
End
Timeout

Even though we wrote:

setTimeout(..., 0)

it does not mean:

Execute immediately.

It means roughly:

Schedule this callback as a task that can run after the current synchronous work and higher-priority queued microtasks are handled.

# --  Microtask vs Callback Queue

This is an extremely common interview question.

Microtask Queue
    ↓
Higher priority

Callback / Task Queue
    ↓
Processed afterward

Example:

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
Output:

Start
End
Promise
Timeout
Why?

# ============ Step-by-step:

# -1 Synchronous code
Start
End
# -2️ Microtasks
Promise
# -3️ Tasks/callbacks
Timeout

So:

Synchronous
     ↓
Microtasks
     ↓
Next task/callback
# --- 17️ Callbacks

A callback is simply:

A function passed to another function so that it can be called later.

Example:

function greet(name, callback) {


    console.log(`Hello ${name}`);


    callback();

}

function finished() {
    console.log("Finished!");
}

greet("Aditya", finished);
Output:
Hello Aditya
Finished!
Here:
greet("Aditya", finished);
passes finished as a callback.
Callback with setTimeout
console.log("Start");

setTimeout(() => {
    console.log("Finished");
}, 2000);

console.log("End");
The function:

() => {
    console.log("Finished");
}
is a callback.
Output:
Start
End
Finished
# --- Callback Hell 

# -Callbacks can become difficult when operations depend on each other:

getUser(function(user) {


    getOrders(user, function(orders) {


        getPayment(orders, function(payment) {


            sendEmail(payment, function() {


                console.log("Done");


            });


        });


    });


});

This nested structure is often called:

Callback Hell

Promises were introduced to make asynchronous code easier to compose.

# -18️ Promises
A Promise represents the eventual result of an asynchronous operation.
A Promise has three states:
Pending
   ↓
 ┌─┴─────────┐
 ↓           ↓
Fulfilled   Rejected
Pending
Operation hasn't finished.
Fulfilled
Operation succeeded.
Rejected
Operation failed.
Creating a Promise
const promise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }


});

Then:

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

Output:

Operation successful
resolve() and reject()
Think:
resolve()
means:
"It worked."
And:
reject()
means:
"Something went wrong."

Promise example with delay
function getData() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Data received");
        }, 2000);

    });

}


getData().then((data) => {
    console.log(data);
});

After approximately 2 seconds:
Data received
.then()
.then() runs when the Promise is fulfilled.
getData()
    .then((data) => {
        console.log(data);
    });
.catch()
.catch() handles rejection:

getData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
.finally()

finally() runs regardless of success or failure:

getData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Finished");
    });
# -19️ async / await

This is where asynchronous JavaScript becomes much easier to read.
Instead of:
getData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

we can write:
async function loadData() {

    try {

        const data = await getData();

        console.log(data);

    } catch (error) {

        console.log(error);

    }


}
What does async mean?

When you write:

async function loadData() {

}

the function always returns a Promise.

Example:

async function greet() {
    return "Hello";
}

const result = greet();

console.log(result);

result is a Promise.

# -What does await mean?

await waits for a Promise inside an async function and gives you its fulfilled value.

Example:

function getData() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Data received");
        }, 2000);

    });


}


async function loadData() {

    const data = await getData();

    console.log(data);

}


loadData();
Output after the Promise resolves:

Data received
# - Important clarification about await

Don't think:

await blocks the entire JavaScript program.

It doesn't.

It suspends the execution of the current async function while other JavaScript work can continue.

For example:

async function test() {

    console.log("A");

    await Promise.resolve();

    console.log("B");

}

console.log("Start");

test();

console.log("End");
Output:
Start
A
End
B

This is a very useful example.

# -- Event Loop + Promise + async/await

Now connect everything.

console.log("1");


setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");

Output:

1
4
3
2

Why?
              Synchronous
                  ↓
               1 → 4
                  ↓
           Microtask Queue
                  ↓
                 3
                  ↓
          Callback / Task Queue
                  ↓
                 2
# - async/await version
console.log("1");


async function test() {

    console.log("2");

    await Promise.resolve();

    console.log("3");
}


test();

console.log("4");
Output:

1
2
4
3

Why?

Before await:

1
2

Then await pauses the async function.

The rest:

console.log("3");

# - continues later as Promise-related microtask work.

Meanwhile:
console.log("4");
runs synchronously.
Therefore:
1
2
4
3
# - The complete picture

This is what I want you to remember today:

                    JavaScript
                        │
                        ▼
                  Call Stack
                        │
              synchronous code
                        │
                        ▼
                 Event Loop
                        │
             ┌──────────┴──────────┐
             │                     │
             ▼                     ▼
       Microtask Queue       Callback/Task Queue
             │                     │
             │                     │
       Promises/.then()      setTimeout()
       await continuation    setInterval()
             │                     │
             └──────────┬──────────┘
                        ▼
                  Call Stack

And the general priority is:

1. Synchronous code
       ↓
2. Microtasks
       ↓
3. Next task/callback
# --- Interview Questions
# Q1. Is JavaScript single-threaded?

  Yes. JavaScript executes JavaScript code on a single main call stack, while the host environment provides APIs for asynchronous operations.
# Q2. What is the Event Loop?
  The event loop coordinates when queued asynchronous callbacks can be moved toward execution once the call stack is available.
# Q3. Which has higher priority: Promise callbacks or setTimeout() callbacks?
  Promise callbacks (microtasks) are processed before the next task/callback such as a setTimeout() callback.
# Q4. What is a callback?
  A callback is a function passed to another function to be invoked later.
# Q5. What are the states of a Promise?
  Pending
  Fulfilled
  Rejected
# Q6. Why use Promises?
  They provide a structured way to represent and compose asynchronous operations and help avoid deeply nested callback code.
# Q7. What does async do?
  An async function always returns a Promise.
# Q8. What does await do?
  It pauses the current async function until the awaited Promise settles, then resumes with the result or throws the rejection.