import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

 //import 'bootstrap/scss/bootstrap.scss';
 //import '../../../pages/scss/pages.scss';
import PageContentSidebar from './PageContent/Sidebar';

const AdminPageSidebar = () => {
    return (
        <>
            <Sidebar/>
            <div className="page-container">
                <div className="header">
                    <Header/>
                </div>
                <div className="page-content-wrapper">
                    <div className="content">
                        <PageContentSidebar/>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default AdminPageSidebar