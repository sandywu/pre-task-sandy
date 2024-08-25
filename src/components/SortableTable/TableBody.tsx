import React from 'react';
import { Column, Data } from './types';

interface TableBodyProps {
  columns: Column[];
  data: Data[];
}

const TableBody: React.FC<TableBodyProps> = ({ columns, data }) => {
  return (
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {columns.map((column, colIndex) => (
            <td
              key={column.key}
              className={`${column.fixed ? 'fixed-column' : ''}`}
              style={{
                position: column.fixed ? 'sticky' : undefined,
                left:
                  column.fixed === 'left'
                    ? `${colIndex * (column.width || 150)}px`
                    : undefined,
                right:
                  column.fixed === 'right'
                    ? `${(columns.length - colIndex - 1) * (column.width || 150)}px`
                    : undefined,
                width: column.width ? `${column.width}px` : 'auto',
              }}
            >
              {row[column.dataIndex]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
