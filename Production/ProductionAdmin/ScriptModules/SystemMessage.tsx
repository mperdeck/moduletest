declare var React: typeof import("react");
declare var ReactDOM: typeof import("react-dom");

export interface SystemMessageProps { message: string; }

export class SystemMessage extends React.Component<SystemMessageProps, {}> {
    render() {
        return (
            <h1> {this.props.message} </h1>
        );
    }
}

