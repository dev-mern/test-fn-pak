import React from 'react';
import dashST from "../../../styles/dashboard.module.css";
import HaderMeta from '../layout/HaderMeta';
import SideNavDashboard from './SideNavDashboard';
import ViewNavDashboard from './ViewNavDashboard';

const dashMeta = {
    title:"Dashboard"
}

const LayoutDashboard = ({children}) => {
    return (
        <div className={dashST.dash_container}>
            <HaderMeta metaInfo={dashMeta}></HaderMeta>
            <aside className={dashST.dash_nav_wrapper}>
                <SideNavDashboard></SideNavDashboard>
            </aside>
            <section className={dashST.dash_view_wrapper}>
                <ViewNavDashboard></ViewNavDashboard>
                <div className={dashST.dash_view_child_container}>
                    {children}
                </div>
            </section>
        </div>
    );
};

export default LayoutDashboard;