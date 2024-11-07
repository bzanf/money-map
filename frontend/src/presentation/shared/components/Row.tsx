import { ReactNode } from "react"

interface RowProps {
    children?: ReactNode;
}

const Row = (props: RowProps) => (
    <div className="row">{props.children}</div>
)

export default Row;