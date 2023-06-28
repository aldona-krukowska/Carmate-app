export interface RowData {
     date: string
     reviewTitle: string
     mileage: number
     description: string
   }
   
 export interface TableColumn {
     field: string
     header: string
   }
   
 export interface TableProps {
     data: RowData[]
     columns: TableColumn[]
   }