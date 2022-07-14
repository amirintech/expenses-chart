const columnsContainer = document.querySelector("#columns-container");
const columns = document.querySelectorAll(".column");

const initializeColumns = async () => {
  let expenses;

  await fetch("data.json")
    .then((res) => res.json())
    .then((json) => (expenses = json));

  // Mapping the expenses to columns
  const expensesColumns = expenses.map((expense) => {
    const expenseColumn = document.createElement("div");
    expenseColumn.classList.add("column");

    const factor = 1.5; // Just for making the column looks taller
    const { day, amount } = expense;
    expenseColumn.style = `padding: ${amount * factor}px 0`;

    // Thoes two attributes will be used to set the values for
    // the day and the amount of each column
    expenseColumn.setAttribute("column-value", amount);
    expenseColumn.setAttribute("column-title", day);

    // Useless line just to add special styles (for the challenge)
    if (day === "wed") expenseColumn.classList.add("column--current");

    return expenseColumn;
  });

  // Rendering the expenses columns
  expensesColumns.forEach((column) => {
    columnsContainer.appendChild(column);
  });
};

initializeColumns();
