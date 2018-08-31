// This definition based on
// https://www.telerik.com/kendo-react-ui/components/grid/

declare var React: typeof import("react");
declare var ReactDOM: typeof import("react-dom");

declare var GridCell: typeof import("@progress/kendo-react-grid").GridCell;

export class CustomCell extends GridCell {
    render() {
        return (
            <td>
                <input disabled type="checkbox" checked={this.props.dataItem[this.props.field]} />
            </td>
        );
    }
}

