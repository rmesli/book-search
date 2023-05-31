import React from "react";
import { array, arrayOf, func, shape, string } from "prop-types";

import _ from "lodash";

const TableBody = ({ columns, data }) => {
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          {columns.map((column) => (
            <td key={`${item.id}${column.path}`}>{renderCell(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
TableBody.propTypes = {
  columns: arrayOf(
    shape({
      content: func,
      path: string.isRequired,
    })
  ).isRequired,
  data: array.isRequired,
};
export default TableBody;
