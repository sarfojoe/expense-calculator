import React from "react";
import { Header } from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import Transaction from "./components/Transaction";
import TransactionList from "./components/TransactionList";

import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <Transaction />
        <TransactionList />
      </div>
    </div>
  );
};

export default App;
