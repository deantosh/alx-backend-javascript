// Import RowID and RowElement types from interface.ts
import { RowID, RowElement } from '../interface';

// Declare the CRUD functions with their respective types
declare module 'crud' {
    function insertRow(row: RowElement): RowID;
    function updateRow(id: RowID, row: RowElement): void;
    function deleteRow(id: RowID): void;
}
