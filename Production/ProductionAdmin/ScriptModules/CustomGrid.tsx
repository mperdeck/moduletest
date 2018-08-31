// This definition based on
// https://www.telerik.com/kendo-react-ui/components/grid/
//
// Component App in that file has been renamed to CustomGrid in this file.


declare var React: typeof import("react");
declare var ReactDOM: typeof import("react-dom");

// There are 2 ways to get the Kendo types:
// 
// 1) Install the types (a .d.ts file) using
//    npm install --save @types/kendo-ui
// 
//    This install a kendo-ui/index.d.ts file in the @types directory in your node_modules dir.
//    These types are implicitly available in your code (no need to import).
//    You can now write:
//
//    declare var Grid: kendo.ui.Grid;
//
//    Note however that almost all definitions you get this way are interfaces!
//    So you can't instantiate them.
//    Also, not all definitions have the "kendo.ui" namespace.
//
// 2) Install the actual npm packages, and then use typedef import
//    to get the types out of those packages. This gives you actual classes
//    that can be instantiated.
// 
// npm install--save @progress/kendo-data-query
// npm install--save @progress/kendo-drawing
// npm install--save @progress/kendo-grid-react-wrapper
// npm install--save @progress/kendo-react-dateinputs
// npm install--save @progress/kendo-react-dropdowns
// npm install--save @progress/kendo-react-grid
// npm install--save @progress/kendo-react-inputs
// npm install--save @progress/kendo-react-intl
// npm install--save @progress/kendo-react-pdf
// npm install--save @progress/kendo-theme-material
// npm install--save @progress/kendo-ui
//
// Now you can write this:
declare var Grid: typeof import("@progress/kendo-react-grid").Grid;
declare var Column: typeof import("@progress/kendo-react-grid").GridColumn;

import { Product } from "./Product.js"
import { products } from './products.js';
import { CustomCell } from "./CustomCell.js";

export interface CustomGridProps { }
export interface CustomGridState { gridData: Product[]; }

export class CustomGrid extends React.Component<CustomGridProps, CustomGridState> {
    constructor(props) {
        super(props);
        this.state = {
            gridData: products
        };
    }
    render() {
        return (
            <div>
                <Grid
                    style={{ height: '400px' }}
                    data={this.state.gridData}
                >
                    <Column field="ProductID" title="ID" width="40px" />
                    <Column field="ProductName" title="Name" width="250px" />
                    <Column field="Category.CategoryName" title="CategoryName" />
                    <Column field="UnitPrice" title="Price" width="80px" />
                    <Column field="UnitsInStock" title="In stock" width="80px" />
                    <Column field="Discontinued" title="Discontinued" width="120px" cell={CustomCell} />
                </Grid>
            </div>
        );
    }
}