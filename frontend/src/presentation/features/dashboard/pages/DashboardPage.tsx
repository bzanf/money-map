import Row from "../../../shared/components/Row";
import ValueBox from "../../../shared/components/ValueBox";

const DashboardPage = () => (
    <Row>
        <ValueBox
            columns="12 4"
            color="green"
            icon="bank"
            value="R$ 10"
            text="Total credits"
        />

        <ValueBox
            columns="12 4"
            color="red"
            icon="credit-card"
            value="R$ 10"
            text="Total debts"
        />

        <ValueBox
            columns="12 4"
            color="blue"
            icon="money-check-dollar"
            value="R$ 0"
            text="Net balance"
        />
    </Row>
)

export default DashboardPage;