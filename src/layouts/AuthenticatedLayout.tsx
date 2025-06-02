/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, JSX } from 'react';
import { Link, usePage, router } from '@inertiajs/react';
import { User } from '@/types';

interface NavItem {
    name: string;
    href: string;
    current: boolean;
    icon: JSX.Element;
    children?: NavItem[];
}

interface Props {
    children: React.ReactNode;
}

export default function AuthenticatedLayout({ children }: Props) {
    const { auth } = usePage().props as any;
    const user = auth.user as User;

    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});

    const [isMobile, setIsMobile] = useState(false);

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    useEffect(() => {
        const checkSize = () => {
            setIsMobile(window.innerWidth < 1024);
            if (window.innerWidth < 1024) {
                setCollapsed(true);
            }
        };

        window.addEventListener('resize', checkSize);
        checkSize();

        return () => window.removeEventListener('resize', checkSize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const sidebar = document.getElementById('sidebar');
            if (isMobile && mobileOpen && sidebar && !sidebar.contains(event.target as Node)) {
                setMobileOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobile, mobileOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const userMenu = document.getElementById('user-menu');
            if (userMenuOpen && userMenu && !userMenu.contains(event.target as Node)) {
                setUserMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [userMenuOpen]);

    const toggleSidebar = () => {
        if (isMobile) {
            setMobileOpen(!mobileOpen);
        } else {
            setCollapsed(!collapsed);
        }
    };

    const closeSidebar = () => {
        if (isMobile) {
            setMobileOpen(false);
        }
    };

    const handleLogout = (e: React.FormEvent) => {
        e.preventDefault();
        router.post(route('logout'));
    };

    const toggleUserMenu = () => {
        if (!isMobile && collapsed && !userMenuOpen) {
            setCollapsed(false);
        }
        setUserMenuOpen(!userMenuOpen);
    };


    const toggleDropdown = (name: string) => {
        if (!isMobile && collapsed && !openDropdowns[name]) {
            setCollapsed(false);
        }

        setOpenDropdowns(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    };

    const navigation: NavItem[] = [
        {
            name: 'Dashboard',
            href: route('dashboard'),
            current: route().current('dashboard'),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        },
        {
            name: 'SIDAYA',
            href: '#',
            current: false,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            children: [
                {
                    name: 'Data Lansia',
                    href: route('lansia.index'),
                    current: route().current('lansia.index'),
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    )
                },
                {
                    name: 'Pelayanan Kesehatan Lansia',
                    href: route('pkl.index'),
                    current: route().current('pkl.index'),
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    )
                },
                {
                    name: 'Hasil Pendampingan PJP Kader',
                    href: route('pjp.index'),
                    current: route().current('pjp.index'),
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    )
                }
            ]
        },
        {
            name: 'Laporan',
            href: '#laporan',
            current: false,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            name: 'Pengaturan',
            href: '#settings',
            current: false,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
    ];

    const sidebarWidth = collapsed ? 'w-20' : 'w-64';
    const mobileSidebarWidth = 'w-72';
    const mainContentMargin = isMobile ? 'ml-0' : (collapsed ? 'ml-20' : 'ml-64');

    const renderNavItems = (items: NavItem[]) => {
        return items.map((item) => (
            <div key={item.name} className="py-1">
                {item.children ? (
                    <div>
                        <button
                            type="button"
                            onClick={() => toggleDropdown(item.name)}
                            className={`
                                w-full flex items-center py-3 px-3 text-sm font-medium rounded-lg transition-colors
                                ${item.current ? 'bg-yellow-100 text-yellow-800' : 'text-gray-700 hover:bg-gray-100'}
                                ${collapsed && !isMobile ? 'justify-center' : 'justify-between'}
                            `}
                        >
                            <div className="flex items-center">
                                <span className={`${collapsed && !isMobile ? 'mx-auto' : 'mr-3'}`}>
                                    {item.icon}
                                </span>
                                {(!collapsed || isMobile) && <span>{item.name}</span>}
                            </div>
                            {(!collapsed || isMobile) && (
                                <svg className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${openDropdowns[item.name] ? 'transform rotate-180' : ''}`}
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>

                        {(!collapsed || isMobile) && openDropdowns[item.name] && (
                            <div className="mt-1 pl-10 space-y-1 animate-fadeIn">
                                {item.children?.map(child => (
                                    <Link
                                        key={child.name}
                                        href={child.href}
                                        className={`
                                            flex items-center py-2 px-3 text-sm font-medium rounded-lg transition-colors
                                            ${child.current ? 'bg-yellow-50 text-yellow-700' : 'text-gray-600 hover:bg-gray-50'}
                                        `}
                                        onClick={closeSidebar}
                                    >
                                        <span className="mr-3">{child.icon}</span>
                                        <span>{child.name}</span>
                                    </Link>
                                ))}
                            </div>
                        )}

                        {collapsed && !isMobile && openDropdowns[item.name] && (
                            <div className="absolute left-full top-0 ml-2 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-40">
                                <div className="py-1">
                                    {item.children?.map(child => (
                                        <Link
                                            key={child.name}
                                            href={child.href}
                                            className={`
                                                flex items-center py-2 px-3 text-sm font-medium transition-colors
                                                ${child.current ? 'bg-yellow-50 text-yellow-700' : 'text-gray-600 hover:bg-gray-50'}
                                            `}
                                            onClick={closeSidebar}
                                        >
                                            <span className="mr-3">{child.icon}</span>
                                            <span>{child.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link
                        href={item.href}
                        className={`
                            flex items-center py-3 px-3 text-sm font-medium rounded-lg transition-colors
                            ${item.current
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'text-gray-700 hover:bg-gray-100'
                            }
                            ${collapsed && !isMobile ? 'justify-center' : 'justify-start'}
                        `}
                        onClick={closeSidebar}
                    >
                        <span className={`${collapsed && !isMobile ? 'mx-auto' : 'mr-3'}`}>
                            {item.icon}
                        </span>
                        {(!collapsed || isMobile) && <span>{item.name}</span>}
                    </Link>
                )}
            </div>
        ));
    };

    return (
        <div className="flex h-screen bg-gray-50">
            {isMobile && mobileOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20"
                    onClick={closeSidebar}
                />
            )}

            {/* Sidebar */}
            <aside
                id="sidebar"
                className={`${isMobile ? mobileSidebarWidth : sidebarWidth} fixed inset-y-0 left-0 z-30 flex-shrink-0 flex flex-col bg-white shadow-xl transition-all duration-300 ease-in-out ${isMobile ? (mobileOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'}`}
            >
                <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4">
                    <div className={`flex items-center ${collapsed && !isMobile ? 'justify-center w-full' : ''}`}>
                        {(!collapsed || isMobile) && (
                            <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
                        )}
                    </div>

                    {!isMobile && (
                        <button
                            onClick={toggleSidebar}
                            className={`text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 rounded-full p-1 ${collapsed ? 'mx-auto' : ''}`}
                        >
                            {collapsed ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                                </svg>
                            )}
                        </button>
                    )}
                </div>

                {/* Menu Navigasi*/}
                <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                    {renderNavItems(navigation)}
                </div>

                {/* Profil */}
                <div className="border-t border-gray-200 p-4">
                    <div id="user-menu" className="relative">
                        <button
                            onClick={toggleUserMenu}
                            className={`
                                flex items-center w-full text-left py-2 px-2 rounded-lg text-sm
                                ${collapsed && !isMobile ? 'justify-center' : 'justify-between'} 
                                hover:bg-gray-100 transition-colors
                            `}
                        >
                            <div className="flex items-center">
                                <img
                                    className="h-8 w-8 rounded-full ring-2 ring-yellow-500"
                                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'User')}&color=6B7280&background=F3F4F6`}
                                    alt={user?.name}
                                />
                                {(!collapsed || isMobile) && (
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-700 truncate">{user?.name}</p>
                                        <p className="text-xs text-gray-500 truncate">{user?.role || 'User'}</p>
                                    </div>
                                )}
                            </div>
                            {(!collapsed || isMobile) && (
                                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>

                        {userMenuOpen && (
                            <div className="absolute bottom-full mb-2 right-0 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10 w-56">
                                <div className="px-3 py-2 border-b border-gray-100">
                                    <p className="text-xs font-medium text-gray-400">MASUK SEBAGAI</p>
                                    <p className="text-sm font-semibold text-gray-800 mt-1">{user?.role || 'User'}</p>
                                </div>
                                <Link href="#profile" className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    Profil Saya
                                </Link>
                                <Link href="#settings" className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Pengaturan
                                </Link>
                                <div className="border-t border-gray-100 my-1"></div>
                                <form onSubmit={handleLogout}>
                                    <button type="submit" className="flex items-center w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                        Keluar
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </aside>

            {/* Mobile Toggle Button */}
            {/* {isMobile && (
                <button
                    type="button"
                    className="fixed bottom-4 right-4 bg-yellow-600 text-white p-3 rounded-full shadow-lg z-20 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                    onClick={toggleSidebar}
                >
                    {mobileOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            )} */}

            {/* Main Content */}
            <div className={`flex-1 flex flex-col min-h-screen ${mainContentMargin} transition-all duration-300`}>
                <div className="hidden md:block  bg-yellow-600 text-white text-center py-2 text-sm font-medium">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                        Kementerian Kependudukan dan Pembangunan Keluarga/Badan Kependudukan dan Keluarga Berencana Nasional
                    </div>
                </div>

                <header className="bg-white shadow-sm border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16 items-center">
                            {/* Mobile Menu Tombol */}
                            {isMobile && (
                                <button
                                    type="button"
                                    onClick={toggleSidebar}
                                    className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500 rounded-md p-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            )}

                            {/* Page Title - khusus desktop */}
                            <h1 className="text-lg font-medium text-gray-800 hidden md:block">
                                {navigation.find(item => item.current)?.name || ''}
                            </h1>

                            <div className="text-sm text-gray-600 flex items-center ml-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>{formattedDate}</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-grow">
                    {children}
                </main>

                {/* Footer */}
                <footer className="bg-white border-t border-gray-200 py-4">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <p className="text-sm text-gray-500">
                                &copy; {new Date().getFullYear()} SIDAYA - Lansia Berdaya
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                                Kementerian Kependudukan dan Pembangunan Keluarga/Badan Kependudukan dan Keluarga Berencana Nasional
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
} 
