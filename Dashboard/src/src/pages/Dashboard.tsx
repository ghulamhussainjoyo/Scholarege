import React from 'react'
import MySideNavigation from '../components/dashboard/MySideNavigation'
import DashboardRoutes from '../routes/Dashboard'

function Dashboard() {
    return (
        <body className='flex'>
            <aside className='w-64'>
                <MySideNavigation />
            </aside>
            <div className='flex-1'>
                <DashboardRoutes/>
            </div>
        </body>
    )
}

export default Dashboard