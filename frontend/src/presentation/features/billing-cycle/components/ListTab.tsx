import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../core/store/hooks";
import { selectBillingCycles, selectBillingCyclesStatus } from "../store/billingCyclesSlice";
import { fetchBillingCycles } from "../store/billingCyclesThunks";

export const ListTab = () => {
    const dispatch = useAppDispatch();
    const billingCyclesData = useAppSelector(selectBillingCycles);
    const billingCyclesStatus = useAppSelector(selectBillingCyclesStatus);

    useEffect(() => {
        if (billingCyclesStatus === 'idle') {
            dispatch(fetchBillingCycles());
        }
    }, [billingCyclesStatus, dispatch]);

    console.log(billingCyclesData);

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Month</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    );
}