import React, { Component } from 'react';
import shortid from 'shortid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Controls from './Controls/Controls';
import Balance from './Balance/Balance';
import TaransactionHistory from './TransactionHistory/TransactionHistory';
import checkCorrectInput from '../../Utils/CheckCorrectInput';

class Dashboard extends Component {
  state = {
    transactions: [],
    balance: 0,
  };

  createTransaction = (target, input) => {
    const { balance } = this.state;
    const inputVal = Number(input);
    target.parentNode.reset();
    if (checkCorrectInput(inputVal, target.name, balance)) {
      const transaction = {
        id: shortid.generate(),
        type: target.name,
        amount: inputVal,
        date: new Date().toLocaleString(),
      };

      this.setState(prevState => ({
        transactions: [...prevState.transactions, transaction],
        balance:
          transaction.type === 'withdraw'
            ? prevState.balance - inputVal
            : prevState.balance + inputVal,
      }));

      if (transaction.type === 'withdraw') {
        toast.success(`Успешно выведено ${inputVal}$!`, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      } else {
        toast.success(`Депозит успешно добавлен!`, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      }
    }
  };

  render() {
    const { transactions, balance } = this.state;
    return (
      <div>
        <Controls createTransaction={this.createTransaction} />
        <Balance transactions={transactions} balance={balance} />
        <TaransactionHistory transactions={transactions} />
        <ToastContainer />
      </div>
    );
  }
}

export default Dashboard;
