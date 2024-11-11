import { ReactNode, useState } from "react"

export interface TabsCardProps {
   tabs: {
      key: string;
      label: string;
      children?: ReactNode;
   }[];
}

const TabsCard = (props: TabsCardProps) => {
   const tabs = props.tabs;
   const [activeTab, setActiveTab] = useState(tabs[0].key);

   return (
      <div className="card card-primary card-outline card-outline-tabs">
         <div className="card-header p-0 border-bottom-0">
            <ul className="nav nav-tabs" role="tablist">
               {
                  tabs.map((tab) => (
                     <li key={tab.key} className="nav-item">
                        <a
                           className={`nav-link ${activeTab === tab.key ? 'active' : ''}`}
                           id={`tab-label-${tab.key}`}
                           href={`#tab-content-${tab.key}`}
                           data-toggle="pill"
                           role="tab"
                           aria-controls={`tab-content-${tab.key}`}
                           aria-selected={activeTab === tab.key}
                           onClick={() => setActiveTab(tab.key)}
                        >
                           {tab.label}
                        </a>
                     </li>
                  ))
               }
            </ul>
         </div>

         <div className="card-body">
            <div className="tab-content">
               {
                  tabs.map((tab) => (
                     <div
                        key={tab.key}
                        id={`tab-content-${tab.key}`}
                        className={`tab-pane fade ${activeTab === tab.key ? 'show active' : ''}`}
                        role="tabpanel"
                        aria-labelledby={`tab-label-${tab.key}`}
                     >
                        {tab.children}
                     </div>
                  ))
               }
            </div>
         </div>
      </div>
   )
}

export default TabsCard;