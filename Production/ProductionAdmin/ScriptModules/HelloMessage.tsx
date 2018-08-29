﻿import { SystemMessage } from "./SystemMessage.js";

declare var React: typeof import("react");
declare var ReactDOM: typeof import("react-dom");



export interface HelloMessageProps { name: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
// See https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
export class HelloMessage extends React.Component<HelloMessageProps, {}> {
    render() {
        return (
            <p>
                <span>Hello !</span>
                <SystemMessage message={this.props.name} />
            </p>
        );
    }
}
