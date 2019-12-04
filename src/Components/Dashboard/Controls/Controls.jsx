import React from 'react';
import PropTypes from 'prop-types';
import css from './controls.module.scss';

const Controls = ({ createTransaction, handleInput }) => (
  <section className={css.controls}>
    <form onSubmit={e => e.preventDefault()}>
      <input
        type="number"
        name="amount"
        onChange={e => handleInput(e.target.value)}
      />
      <button type="button" name="deposit" onClick={createTransaction}>
        Deposit
      </button>
      <button type="button" name="withdraw" onClick={createTransaction}>
        Withdraw
      </button>
    </form>
  </section>
);

Controls.propTypes = {
  createTransaction: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
};

export default Controls;
