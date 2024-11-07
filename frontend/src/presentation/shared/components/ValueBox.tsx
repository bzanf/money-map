import Grid from "./Grid"

interface ValueBoxProps {
    columns: string;
    color: string;
    icon: string;
    value: string;
    text: string;
}

const ValueBox = (props: ValueBoxProps) => (
    <Grid columns={props.columns}>
        <div className={`small-box bg-${props.color}`}>
            <div className="inner">
                <h3>{props.value}</h3>
                <p>{props.text}</p>
            </div>
            <div className="icon">
                <i className={`fa fa-${props.icon}`}></i>
            </div>
        </div>
    </Grid>
)

export default ValueBox;