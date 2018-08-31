// /// <reference path="kendo.all.d.ts" />


// This definition based on
// https://www.telerik.com/kendo-react-ui/components/grid/


declare var React: typeof import("react");
declare var ReactDOM: typeof import("react-dom");

//declare var Grid: typeof import("kendo-ui");

// Kendo uses different namespaces in its index.d.ts file!
// If you need a type, make sure you get the right namespace.
// C:\Decideware\trials\moduletest\node_modules\@types\kendo-ui\index.d.ts

// Note that the index.d.ts file gets loaded automatically by virtue of sitting in
// node_modules/@types

declare var GridCell: kendo.ui.GridColumn;

export interface CustomCellProps { message: string; }

export class CustomCell implements kendo.ui.GridColumn {
    render() {
        return (
            <td>
                <input disabled type="checkbox" checked={this.props.dataItem[this.props.field]} />
            </td>
        );
    }
}

