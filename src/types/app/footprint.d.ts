export interface Footprint {
    id: number;
    title: string;
    address: string;
    content: string;
    position: string;
    images: string[];
    createTime?: string;
}

export interface FilterFootprint {
    key?: string | null;
    startDate?: string | null;
    endDate?: string | null;
}

export interface FilterForm {
    address?: string;
    createTime?: [moment.Moment, moment.Moment];
}