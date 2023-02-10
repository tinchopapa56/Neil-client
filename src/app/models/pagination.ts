export interface Pagination {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
}
export class PaginatedResult<T> {
    data: T;    //Activity[]
    pagination: Pagination;

    constructor(data: T, pagination: Pagination){
        this.data = data;
        this.pagination = pagination;
    }
}
export class PagingParams {
    pageNumber;
    pageSize;

    constructor(pageNumber: number = 1, pageSize: number = 6){
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
    }
}