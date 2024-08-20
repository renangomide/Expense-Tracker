import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import categories from "./expense-tracker/categories";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpense] = useState<
    { id: number; description: string; amount: number; category: string }[]
  >([]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(newExpense) =>
            setExpense([
              ...expenses,
              { ...newExpense, id: expenses.length + 1 },
            ])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategorie={(category) => setSelectedCategory(category)}
        />
      </div>
      <div>
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) =>
            setExpense(expenses.filter((expense) => expense.id !== id))
          }
        />
      </div>
    </div>
  );
}

export default App;
