import { useEffect } from "react";
import Row from "../../../shared/components/Row";
import ValueBox from "../../../shared/components/ValueBox";
import { useAppDispatch, useAppSelector } from "../../../core/store/hooks";
import { selectSummary, selectSummaryStatus } from "../store/dashboardSlice";
import { fetchSummary } from "../store/dashboardThunks";

const DashboardPage = () => {
    const dispatch = useAppDispatch();
    const { credit, debit } = useAppSelector(selectSummary);
    const netBalance = credit - debit;
    const summaryStatus = useAppSelector(selectSummaryStatus);

    useEffect(() => {
        if (summaryStatus === 'idle') {
            dispatch(fetchSummary());
        }
    }, [summaryStatus, dispatch]);

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