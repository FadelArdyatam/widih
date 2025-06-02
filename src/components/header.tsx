"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { menuItems } from "./menu-items"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu)
  }

  const closeAllDropdowns = () => {
    setActiveDropdown(null)
    setIsMenuOpen(false)
  }

  // Render navigation items (both desktop and mobile)
  const renderNavItems = (isMobile = false) => {
    return Object.entries(menuItems).map(([key, item]) => (
      <div key={key} className={isMobile ? "w-full" : "relative group"}>
        {item.dropdown ? (
          <>
            <button
              className={`flex items-center justify-between w-full ${
                isMobile ? "py-2 border-b border-gray-100" : ""
              } text-gray-700 transition-colors hover:text-[#92793f]`}
              onClick={() => toggleDropdown(isMobile ? `${key}Mobile` : key)}
            >
              <span>{item.label || key}</span>
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    activeDropdown === (isMobile ? `${key}Mobile` : key)
                      ? "M5 15l7-7 7 7"
                      : "M19 9l-7 7-7-7"
                  }
                />
              </svg>
            </button>
            
            {(activeDropdown === (isMobile ? `${key}Mobile` : key)) && (
              <div
                className={`${
                  isMobile
                    ? "pl-4 mt-2 space-y-2"
                    : "absolute left-0 w-56 py-2 mt-2 bg-white rounded-md shadow-lg"
                }`}
              >
                {item.dropdown.map((subItem, index) => (
                  <Link
                    key={index}
                    href={subItem.href}
                    className={`block ${
                      isMobile ? "py-2" : "px-4 py-2 hover:bg-amber-50"
                    } text-gray-700 hover:text-[#FFB200]`}
                    onClick={closeAllDropdowns}
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </>
        ) : (
          <Link
            href={item.mainLink}
            className={`block ${
              isMobile ? "py-2 border-b border-gray-100" : ""
            } text-gray-700 transition-colors hover:text-[#FFB200]`}
            onClick={closeAllDropdowns}
          >
          </Link>
        )}
      </div>
    ))
  }

  // Render login dropdown
  const renderLoginDropdown = (isMobile = false) => {
    const loginItems = [
      { name: "Login User", href: "/login" },
      { name: "Login Admin", href: "/admin/login" },
      { name: "Daftar Akun", href: "/register" },
    ]

    return (
      <div className={isMobile ? "w-full" : "relative hidden md:block"}>
        {isMobile ? (
          <>
            <button
              className="flex items-center justify-between w-full py-2 text-gray-700 transition-colors border-b border-gray-100 hover:text-[#FFB200]"
              onClick={() => toggleDropdown("loginMobile")}
            >
              Masuk
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    activeDropdown === "loginMobile"
                      ? "M5 15l7-7 7 7"
                      : "M19 9l-7 7-7-7"
                  }
                />
              </svg>
            </button>
            {activeDropdown === "loginMobile" && (
              <div className="pl-4 mt-2 space-y-2">
                {loginItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block py-2 text-gray-700 hover:text-[#FFB200]"
                    onClick={closeAllDropdowns}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            <Button
              variant="outline"
              className="text-[#7a5600] border-[#553c00] hover:text-white hover:bg-[#a58d56]"
              onClick={() => toggleDropdown("login")}
            >
              Masuk
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    activeDropdown === "login"
                      ? "M5 15l7-7 7 7"
                      : "M19 9l-7 7-7-7"
                  }
                />
              </svg>
            </Button>
            {activeDropdown === "login" && (
              <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-md shadow-lg">
                {loginItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-[#92793f]"
                    onClick={closeAllDropdowns}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full py-4 border-b border-gray-100 shadow-sm bg-white/90 backdrop-blur-sm">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-[#b1892d]"
            onClick={closeAllDropdowns}
          >
            SIDAYA
          </Link>

          {/* Desktop Navigation */}
          <nav className="items-center hidden space-x-6 md:flex">
            {renderNavItems()}
          </nav>

          <div className="flex items-center space-x-4">
            {renderLoginDropdown()}

            {/* Mobile Menu Button */}
            <Button
              className="p-2 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="py-4 bg-white border-t border-gray-100 md:hidden">
          <div className="container flex flex-col px-4 mx-auto space-y-4">
            {renderNavItems(true)}
            {renderLoginDropdown(true)}
          </div>
        </div>
      )}
    </header>
  )
}