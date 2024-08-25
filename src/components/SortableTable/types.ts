export interface Column {
  title: string;
  dataIndex: string;
  key: string;
  sortable?: boolean;
  width?: number; // 新增属性
  fixed?: 'left' | 'right'; // 新增属性
}
export interface Data {
  [key: string]: any;
}
