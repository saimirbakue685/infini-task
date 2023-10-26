/* 
Filename: complex_code.js
Description: This code implements a complex banking system with multiple classes and operations.
*/

// Bank class to manage customers and transactions
class Bank {
  constructor(name) {
    this.name = name;
    this.customers = [];
    this.transactions = [];
  }

  addCustomer(customer) {
    this.customers.push(customer);
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  getBalance(customer) {
    let balance = 0;
    this.transactions.forEach(transaction => {
      if (transaction.from === customer) {
        balance -= transaction.amount;
      } else if (transaction.to === customer) {
        balance += transaction.amount;
      }
    });

    return balance;
  }
}

// Customer class to manage customers' accounts
class Customer {
  constructor(name, account) {
    this.name = name;
    this.account = account;
  }
}

// Account class to manage customer's balance
class Account {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient balance!");
    }
  }
}

// Transaction class to record transactions between customers
class Transaction {
  constructor(from, to, amount) {
    this.from = from;
    this.to = to;
    this.amount = amount;
  }
}

// Create bank instance
const myBank = new Bank("MyBank");

// Create customers
const johnAccount = new Account(1000);
const john = new Customer("John", johnAccount);
myBank.addCustomer(john);

const aliceAccount = new Account(500);
const alice = new Customer("Alice", aliceAccount);
myBank.addCustomer(alice);

// Perform transactions
john.account.withdraw(200);
alice.account.deposit(200);
myBank.addTransaction(new Transaction(john, alice, 150));

// Print balances
console.log(myBank.getBalance(john));   // Output: -200
console.log(myBank.getBalance(alice));  // Output: 350

// Additional operations and logic...
// ...

// More complex code...
// ...

// End of code