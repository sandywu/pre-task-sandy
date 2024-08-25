import React from 'react';
import { Column } from './types';

interface TableHeaderProps {
  columns: Column[];
  sortConfig: { key: string; direction: 'ascending' | 'descending' } | null;
  onSort: (key: string) => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({
  columns,
  sortConfig,
  onSort,
}) => {
  return (
    <thead>
      <tr>
        {columns.map((column, index) => (
          <th
            key={column.key}
            className={`column-header ${column.fixed ? 'fixed-column' : ''}`}
            style={{
              position: column.fixed ? 'sticky' : undefined,
              left:
                column.fixed === 'left'
                  ? `${index * (column.width || 150)}px`
                  : undefined,
              right:
                column.fixed === 'right'
                  ? `${(columns.length - index - 1) * (column.width || 150)}px`
                  : undefined,
              width: column.width ? `${column.width}px` : 'auto',
              zIndex: column.fixed ? 2 : 1,
            }}
            onClick={() => column.sortable && onSort(column.dataIndex)}
          >
            {column.title}
            {sortConfig?.key === column.dataIndex &&
              (sortConfig.direction === 'ascending' ? ' ▲' : ' ▼')}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
