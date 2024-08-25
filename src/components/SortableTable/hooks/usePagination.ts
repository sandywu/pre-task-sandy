import { useState, useMemo } from 'react';

export const usePagination = (items: any[], pageSize: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return items.slice(startIndex, endIndex);
  }, [currentPage, items, pageSize]);

  const totalPages = useMemo(
    () => Math.ceil(items.length / pageSize),
    [items.length, pageSize],
  );

  return { paginatedItems, totalPages, currentPage, setCurrentPage };
};
