class Printer {
  printStatement(transactions) {
    let statement = 'date || credit || debit || balance\n';
    
    transactions.forEach(transaction => {
      statement += `${new Date(transaction.date).toLocaleDateString()} || ${transaction.credit} || ${transaction.debit} || ${transaction.updatedBalance}\n`;
    });

    return statement;
  };
};

module.exports = Printer;
