import { mount } from 'dashboard/DashboardApp';
import React, { useEffect, useRef } from 'react';


const DashboardApp: React.FC = () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    }, []);

    return <div ref={ref} />;
};


export default DashboardApp;
