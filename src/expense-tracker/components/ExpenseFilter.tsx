import React from "react";
import { useState } from "react";
import categories from "../categories";

interface Props {
  onSelectCategorie: (categorie: string) => void;
}

const ExpenseFilter = ({ onSelectCategorie }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategorie(event.target.value)}
    >
      <option value="">All categories</option>
      {categories.map((categorie) => (
        <option key={categorie} value={categorie}>
          {categorie}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
