import { Component, ReactNode } from "react";

interface GridProps {
    columns: string;
    children?: ReactNode;
}

export default class Grid extends Component<GridProps> {

    toCssClasses(numbers: string) {
        const columns = numbers ? numbers.split(' ') : [];
        let classes = '';

        if (columns[0]) classes += `col-xs-${columns[0]} `;
        if (columns[1]) classes += `col-sm-${columns[1]} `;
        if (columns[2]) classes += `col-md-${columns[2]} `;
        if (columns[3]) classes += `col-lg-${columns[3]} `;

        return classes;
    }

    render() {
        return (
            <div className={this.toCssClasses(this.props.columns ?? '12')}>
                {this.props.children}
            </div>
        );
    };
}