import { useState } from 'react'
import {Link, Navigate, Outlet} from "react-router-dom";
import MenuItems from './MenuItems.js'

export default function DefaultLayout() {
    const [activePath, setActivePath] = useState('/gateways')

    const renderMenuItems = () => {
        return MenuItems.map((item) => {
            const Icon = item.icon
            return (
                <Link
                    onClick={() => setActivePath(item.path)}
                    className={`menuItem ${activePath === item.path ? 'activeMenuItem' : ''}`} to={item.path}
                >
                    <Icon className={`menuItemIcon ${activePath === item.path ? 'activeMenuItemIcon' : ''}`} />
                    {item.name}
                </Link>
            )
        })
    }

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <aside style={{ flex: 1 }}>
                {renderMenuItems()}
            </aside>
            <div className="content" style={{ flex: 5, backgroundColor: '#f5f5f5' }}>
                <header>
                    <div style={{ backgroundColor: '#8d83f3', height: 60, display: "flex", alignItems: 'center', padding: 15 }}>
                        Header
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
