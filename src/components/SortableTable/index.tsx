import React from 'react';
import { Column, Data } from './types';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import Pagination from './Pagination';
import { useSortableData } from './hooks/useSortableData';
import { usePagination } from './hooks/usePagination';
import './index.less';

interface TableProps {
  columns: Column[];
  data: Data[];
  pageSize?: number;
  scroll?: { x?: number; y?: number };
}

const SortableTable: React.FC<TableProps> = ({
  columns,
  data,
  pageSize = 10,
  scroll,
}) => {
  const { items: sortedData, requestSort, sortConfig } = useSortableData(data);
  const { paginatedItems, totalPages, currentPage, setCurrentPage } =
    usePagination(sortedData, pageSize);

  return (
    <>
      <div
        className="table-container"
        style={{
          maxHeight: scroll?.y ? `${scroll.y}px` : 'none',
        }}
      >
        <table style={{ minWidth: scroll?.x ? `${scroll.x}px` : 'auto' }}>
          <TableHeader
            columns={columns}
            sortConfig={sortConfig}
            onSort={requestSort}
          />
          <TableBody columns={columns} data={paginatedItems} />
        </table>
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default SortableTable;
