import transactionHistory from "./data/transactions.js"; //--> import helps to take the data from other js file

const makeTransactionTableRowMarkup = ({ //  callback function
    id,
    amount,
    date,
    business,
    type,
    name,
    account,
}) => {
    return `
    <tr>
        <th class='table-element'>${id}</th>
        <th class='table-element'>${amount}</th>
        <th class='table-element'>${date}</th>
        <th class='table-element'>${business}</th>
        <th class='table-element'>${type}</th>
        <th class='table-element'>${name}</th>
        <th class='table-element'>${account}</th>
    </tr>
    `;
    // for code creation it is better to use ``
};
console.log(transactionHistory);

const tableEl = document.querySelector('.js-transaction-table');
const makeTransactionTableRow = transactionHistory.map(makeTransactionTableRowMarkup).join('');
// join are used for joining the whole code together (without any missed spaces)

tableEl.insertAdjacentHTML('beforeend', makeTransactionTableRow);

console.log(makeTransactionTableRow);

