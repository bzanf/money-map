
import DashboardPage from "../../features/dashboard/pages/DashboardPage";
import BillingCyclesPage from "../../features/billing-cycle/pages/BillingCyclesPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import BaseLayout from "../pages/BaseLayout";

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<BaseLayout />}>
                <Route index element={<DashboardPage />}></Route>
                <Route path="/billing-cycles" element={<BillingCyclesPage />}></Route>
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </BrowserRouter>
)

export default AppRouter;