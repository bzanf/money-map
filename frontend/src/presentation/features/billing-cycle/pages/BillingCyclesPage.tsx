import { useAppSelector } from "../../../core/store/hooks";
import TabsCard, { TabsCardProps } from "../../../shared/components/TabsCard";
import { ListTab } from "../components/ListTab";
import { selectTabs } from "../store/tabsSlice";

const TABS: TabsCardProps['tabs'] = [
    {
        key: 'list',
        label: 'List',
        children: <ListTab />
    },
    {
        key: 'insert',
        label: 'Insert',
        children: <span>insert test</span>
    },
    {
        key: 'update',
        label: 'Update',
        children: <span>update test</span>
    },
    {
        key: 'delete',
        label: 'Delete',
        children: <span>delete test</span>
    },
];

const BillingCyclesPage = () => {
    const tabs = useAppSelector(selectTabs);
    console.log('const tabs = useAppSelector(selectTabs);');

    return (
        <TabsCard tabs={TABS.filter(x => (tabs as string[]).includes(x.key))}></TabsCard>
    );
}

export default BillingCyclesPage;