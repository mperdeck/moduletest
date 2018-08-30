// /// <reference path="kendo.all.d.ts" />

declare var React: typeof import("react");
declare var ReactDOM: typeof import("react-dom");

declare var Grid: typeof import("kendo-ui");



export interface CustomCellProps { message: string; }

export class CustomCell extends GridCell {
    render() {
        return (
            <td>
                <input disabled type="checkbox" checked={this.props.dataItem[this.props.field]} />
            </td>
        );
    }
}

