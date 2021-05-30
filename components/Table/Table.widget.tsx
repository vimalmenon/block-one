import React from 'react';

import {FooterProps, TableProps, TableRowProps} from "./Table";


export const TableRow:React.FC<TableRowProps> = ({column, item, index}) => {
  return (
    <td className="p-2" >{column.template? column.template({item, column, index}): item[column.accessor]}</td>
  );
}

export const TableFooter:React.FC<{footers:FooterProps[]}> = ({footers}) => {
  return (
    <tfoot>
      <tr className="bg-gray-500 text-white">
          {footers.map((footer, key) => {
            return (
              <td className="p-2" colSpan={footer.colSpan||1} key={key}>{footer.value}</td>
            )
          })}
      </tr>
    </tfoot>
  );
}

export const Table:React.FC<TableProps> = ({items, columns,footer, onRowClick}) => {
    return (
        <table className="w-full rounded">
          <thead>
            <tr className="bg-blue-500 text-white" >
              {columns.map((column, key) => {
                return (
                    <th className="text-left p-2 font-medium" key={key}>{column.header}</th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr className={`text-gray-600 ${index%2?"bg-blue-50": "bg-gray-50"}`} key={index} onClick={() => onRowClick && onRowClick(item)}>
                  {columns.map((column, innerKey) => {
                    return (
                        <TableRow column={column} item={item} index={index} key={innerKey}/>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
          {footer ? <TableFooter footers={footer} /> : null}
        </table>
    )
};