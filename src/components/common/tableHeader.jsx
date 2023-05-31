import React from "react";
import { arrayOf, shape, string } from "prop-types";

const TableHeader = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.label}>{column.label}</th>
        ))}
      </tr>
    </thead>
  );
};
TableHeader.propTypes = {
  columns: arrayOf(
    shape({
      label: string.isRequired,
    })
  ).isRequired,
};
export default TableHeader;
