import { RootState } from "../../../core/store/store";
import Row from "../../../shared/components/Row";
import ValueBox from "../../../shared/components/ValueBox";
import { useSelector } from "react-redux";

const DashboardPage = () => {
    const { credit, debit } = useSelector((state: RootState) => state.dashboard.summary);
    const netBalance = credit - debit;

    return (
        <Row>
            <ValueBox
                columns="12 4"
                color="green"
                icon="bank"
                value={`R$ ${credit}`}
                text="Total credits"
            />

            <ValueBox
                columns="12 4"
                color="red"
                icon="credit-card"
                value={`R$ ${debit}`}
                text="Total debts"
            />

            <ValueBox
                columns="12 4"
                color="blue"
                icon="money-check-dollar"
                value={`R$ ${netBalance}`}
                text="Net balance"
            />
        </Row>
    )
}

export default DashboardPage;