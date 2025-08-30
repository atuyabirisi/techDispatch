export const usePagination = (
  data: any[],
  itemsPerPage: number,
  currentPage: number
) => {
  const indexOfLastPost = currentPage * itemsPerPage,
    indexOfFirstPost = indexOfLastPost - itemsPerPage;

  return data.slice(indexOfFirstPost, indexOfLastPost);
};
