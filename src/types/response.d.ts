interface ResponseData<T> {
    code: number,
    message: string
    data: T
}

interface Paginate<T> {
    next: boolean,
    prev: boolean,
    page: number,
    size: number,
    pages: number,
    total: number,
    result: T
}

interface Page {
    pageNum?: number,
    pageSize?: number,
}

interface FilterData {
    key?: string | null,
    startDate?: string | null,
    endDate?: string | null
}

interface QueryData {
    // 通用的
    sort?: 'asc' | 'desc',
    pattern?: 'list' | 'tree',
    query?: FilterData,
    pagination?: Page,
}