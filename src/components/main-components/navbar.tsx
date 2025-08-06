"use client"
import * as React from "react"
import Link from "next/link"
import { User, LogIn, LogOut, Menu, X, ChevronDown } from "lucide-react"
// import { ThemeToggleButton } from "@/components/ui/theme-toggle-button"
import ThemeToggleButton from "../ui/theme-toggle-button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const Navbar = () => {
  const [isSignedIn, setIsSignedIn] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [openMobileSection, setOpenMobileSection] = React.useState<string | null>(null)

  const handleSignIn = () => {
    setIsSignedIn(true)
  }

  const handleSignOut = () => {
    setIsSignedIn(false)
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    setOpenMobileSection(null)
  }

  const toggleMobileSection = (section: string) => {
    setOpenMobileSection(openMobileSection === section ? null : section)
  }

  return (
    <div className="absolute top-2 left-4 right-4 z-50">
      <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-orange-200/30 dark:border-orange-700/30 rounded-2xl shadow-[0_12px_40px_rgb(255,138,80,0.25)] dark:shadow-[0_12px_40px_rgb(255,138,80,0.15)] transition-all duration-500 ease-out hover:shadow-[0_20px_50px_rgb(255,138,80,0.35)] dark:hover:shadow-[0_20px_50px_rgb(255,138,80,0.25)] will-change-transform">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5 dark:from-orange-500/10 dark:via-transparent dark:to-orange-500/10 rounded-2xl blur-xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Beautiful Enhanced Logo */}
            <div className="flex-shrink-0 will-change-transform relative group">
              {/* Multiple layered glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-orange-400/10 to-orange-500/20 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300/15 via-orange-200/8 to-orange-300/15 blur-xl rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100" />
              
              <h1 className="relative text-base font-bold transition-all duration-300 ease-out group-hover:scale-105">
                <span className="text-gray-900 dark:text-white drop-shadow-sm">Largify</span>{" "}
                <span className="relative inline-block">
                  {/* Text shadow for depth */}
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 dark:from-orange-400 dark:via-orange-300 dark:to-orange-400 bg-clip-text text-transparent blur-sm opacity-50"></span>
                  <span className="relative bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 dark:from-orange-400 dark:via-orange-300 dark:to-orange-400 bg-clip-text text-transparent transition-all duration-300 ease-out group-hover:from-orange-500 group-hover:via-orange-400 group-hover:to-orange-500 dark:group-hover:from-orange-300 dark:group-hover:via-orange-200 dark:group-hover:to-orange-300">
                    Suite
                  </span>
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out opacity-0 group-hover:opacity-100" />
                </span>
              </h1>
            </div>

            {/* Desktop Navigation Menu - Centered */}
            <div className="hidden md:flex flex-1 justify-center items-center will-change-transform">
              <NavigationMenu>
                <NavigationMenuList className="gap-1 items-center">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent border-none rounded-xl transition-all duration-300 ease-out hover:text-orange-600 dark:hover:text-orange-400 hover:scale-105 active:scale-95 h-8 px-3 text-sm will-change-transform text-gray-700 dark:text-gray-300 font-medium flex items-center justify-center">
                      Dashboard
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="animate-in slide-in-from-top-2 fade-in-0 duration-300 ease-out bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-orange-200/30 dark:border-orange-700/30 shadow-[0_8px_30px_rgb(255,138,80,0.15)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
                      <div className="grid gap-3 p-6 md:w-[420px] lg:w-[520px] lg:grid-cols-[.75fr_1fr] rounded-xl">
                        <div className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              className="flex h-full w-full select-none flex-col justify-end rounded-xl bg-gradient-to-br from-orange-50/60 to-orange-100/40 dark:from-orange-900/20 dark:to-orange-800/30 p-6 no-underline outline-none focus:shadow-md transition-all duration-300 ease-out hover:from-orange-100/70 hover:to-orange-200/50 dark:hover:from-orange-900/30 dark:hover:to-orange-800/40 hover:scale-[1.02] will-change-transform border border-orange-200/30 dark:border-orange-700/30"
                              href="/"
                            >
                              <div className="mb-2 mt-4 text-lg font-semibold text-gray-900 dark:text-white">Dashboard</div>
                              <p className="text-sm leading-tight text-gray-600 dark:text-gray-300">
                                Overview of your business metrics and KPIs
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                        <ListItem href="/analytics" title="Analytics">
                          Detailed business analytics and reports
                        </ListItem>
                        <ListItem href="/reports" title="Reports">
                          Generate and view custom reports
                        </ListItem>
                        <ListItem href="/insights" title="Insights">
                          AI-powered business insights
                        </ListItem>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent border-none rounded-xl transition-all duration-300 ease-out hover:text-orange-600 dark:hover:text-orange-400 hover:scale-105 active:scale-95 h-8 px-3 text-sm will-change-transform text-gray-700 dark:text-gray-300 font-medium flex items-center justify-center">
                      Modules
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="animate-in slide-in-from-top-2 fade-in-0 duration-300 ease-out bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-orange-200/30 dark:border-orange-700/30 shadow-[0_8px_30px_rgb(255,138,80,0.15)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
                      <div className="grid w-[420px] gap-3 p-6 md:w-[520px] md:grid-cols-2 lg:w-[620px] rounded-xl">
                        <ListItem title="Finance" href="/finance">
                          Accounting, invoicing, and financial management
                        </ListItem>
                        <ListItem title="Inventory" href="/inventory">
                          Stock management and warehouse operations
                        </ListItem>
                        <ListItem title="HR" href="/hr">
                          Human resources and employee management
                        </ListItem>
                        <ListItem title="CRM" href="/crm">
                          Customer relationship management
                        </ListItem>
                        <ListItem title="Sales" href="/sales">
                          Sales pipeline and order management
                        </ListItem>
                        <ListItem title="Procurement" href="/procurement">
                          Purchase orders and supplier management
                        </ListItem>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="bg-transparent border-none rounded-xl transition-all duration-300 ease-out hover:text-orange-600 dark:hover:text-orange-400 hover:scale-105 active:scale-95 h-8 px-3 text-sm will-change-transform text-gray-700 dark:text-gray-300 font-medium flex items-center justify-center"
                      href="/reports"
                    >
                      Reports
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="bg-transparent border-none rounded-xl transition-all duration-300 ease-out hover:text-orange-600 dark:hover:text-orange-400 hover:scale-105 active:scale-95 h-8 px-3 text-sm will-change-transform text-gray-700 dark:text-gray-300 font-medium flex items-center justify-center"
                      href="/settings"
                    >
                      Settings
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right Side - Profile, Theme Toggle and Mobile Menu */}
            <div className="flex items-center space-x-2 will-change-transform">
              {/* Theme Toggle Button */}
              <div className="hidden md:flex">
                <ThemeToggleButton showLabel={false} variant="circle" start="top-right" />
              </div>

              {/* Desktop Profile */}
              <div className="hidden md:flex items-center">
                {!isSignedIn ? (
                  <button
                    onClick={handleSignIn}
                    className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium text-orange-700 dark:text-orange-300 bg-orange-100/60 dark:bg-orange-900/30 hover:bg-orange-200/70 dark:hover:bg-orange-800/40 rounded-lg transition-all duration-300 ease-out hover:scale-105 active:scale-95 shadow-sm hover:shadow-md border border-orange-200/50 dark:border-orange-700/50 will-change-transform"
                  >
                    <LogIn className="h-3 w-3 transition-transform duration-300 ease-out" />
                    <span>Sign In</span>
                  </button>
                ) : (
                  <div className="flex items-center space-x-3 transition-all duration-300 ease-out">
                    <div className="flex items-center space-x-2">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-br from-orange-100/60 to-orange-200/50 dark:from-orange-900/40 dark:to-orange-800/30 flex items-center justify-center transition-all duration-300 ease-out hover:scale-110 will-change-transform border border-orange-200/50 dark:border-orange-700/50">
                        <User className="h-3 w-3 text-orange-600 dark:text-orange-400 transition-all duration-300 ease-out" />
                      </div>
                      <span className="text-xs font-medium text-gray-900 dark:text-white transition-all duration-300 ease-out">John Doe</span>
                    </div>
                   
                  </div>
                )}
              </div>

              {/* Mobile Hamburger Menu */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg hover:bg-accent/80 transition-all duration-300 ease-out hover:scale-110 active:scale-95 will-change-transform"
                aria-label="Toggle mobile menu"
              >
                <div className="relative w-4 h-4">
                  <Menu 
                    className={cn(
                      "h-4 w-4 absolute inset-0 transition-all duration-300 ease-out",
                      isMobileMenuOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
                    )} 
                  />
                  <X 
                    className={cn(
                      "h-4 w-4 absolute inset-0 transition-all duration-300 ease-out",
                      isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-75"
                    )} 
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden border-t border-border/30 bg-background/95 backdrop-blur-sm rounded-b-2xl overflow-hidden transition-all duration-500 ease-out will-change-auto",
          isMobileMenuOpen 
            ? "max-h-[80vh] opacity-100 translate-y-0" 
            : "max-h-0 opacity-0 -translate-y-4"
        )}>
          <div className="px-4 py-4 space-y-3">
            {/* Mobile Profile Section */}
            {!isSignedIn ? (
              <button
                onClick={handleSignIn}
                className="flex items-center space-x-2 w-full px-3 py-2 text-sm font-medium text-foreground bg-primary/10 hover:bg-primary/20 rounded-lg transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] will-change-transform"
              >
                <LogIn className="h-4 w-4 transition-transform duration-300 ease-out" />
                <span>Sign In</span>
              </button>
            ) : (
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg transition-all duration-300 ease-out hover:bg-muted/40">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/30 flex items-center justify-center transition-all duration-300 ease-out hover:scale-110 will-change-transform">
                    <User className="h-4 w-4 text-primary transition-all duration-300 ease-out" />
                  </div>
                  <div>
                    <p className="text-sm font-medium transition-all duration-300 ease-out">John Doe</p>
                    <p className="text-xs text-muted-foreground transition-all duration-300 ease-out">john.doe@largify.com</p>
                  </div>
                </div>
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-1 px-2 py-1 text-xs font-medium text-destructive hover:bg-destructive/10 rounded-lg transition-all duration-300 ease-out hover:scale-105 active:scale-95 will-change-transform"
                >
                  <LogOut className="h-3 w-3 transition-transform duration-300 ease-out" />
                  <span>Sign Out</span>
                </button>
              </div>
            )}

            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              {/* Dashboard Section */}
              <div>
                <button
                  onClick={() => toggleMobileSection("dashboard")}
                  className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium hover:bg-accent/80 rounded-lg transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] will-change-transform"
                >
                  <span>Dashboard</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-all duration-300 ease-out will-change-transform", 
                      openMobileSection === "dashboard" && "rotate-180"
                    )}
                  />
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-400 ease-out will-change-auto",
                  openMobileSection === "dashboard" 
                    ? "max-h-40 opacity-100 mt-2" 
                    : "max-h-0 opacity-0 mt-0"
                )}>
                  <div className="ml-4 space-y-1">
                    <a
                      href="/analytics"
                      className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-300 ease-out hover:translate-x-1 will-change-transform"
                    >
                      Analytics
                    </a>
                    <a
                      href="/reports"
                      className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-300 ease-out hover:translate-x-1 will-change-transform"
                    >
                      Reports
                    </a>
                    <a
                      href="/insights"
                      className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-300 ease-out hover:translate-x-1 will-change-transform"
                    >
                      Insights
                    </a>
                  </div>
                </div>
              </div>

              {/* Modules Section */}
              <div>
                <button
                  onClick={() => toggleMobileSection("modules")}
                  className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium hover:bg-accent/80 rounded-lg transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] will-change-transform"
                >
                  <span>Modules</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-all duration-300 ease-out will-change-transform", 
                      openMobileSection === "modules" && "rotate-180"
                    )}
                  />
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-400 ease-out will-change-auto",
                  openMobileSection === "modules" 
                    ? "max-h-80 opacity-100 mt-2" 
                    : "max-h-0 opacity-0 mt-0"
                )}>
                  <div className="ml-4 space-y-1">
                    <a
                      href="/finance"
                      className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-300 ease-out hover:translate-x-1 will-change-transform"
                    >
                      Finance
                    </a>
                    <a
                      href="/inventory"
                      className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-300 ease-out hover:translate-x-1 will-change-transform"
                    >
                      Inventory
                    </a>
                    <a
                      href="/hr"
                      className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-300 ease-out hover:translate-x-1 will-change-transform"
                    >
                      HR
                    </a>
                    <a
                      href="/crm"
                      className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-300 ease-out hover:translate-x-1 will-change-transform"
                    >
                      CRM
                    </a>
                    <a
                      href="/sales"
                      className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-300 ease-out hover:translate-x-1 will-change-transform"
                    >
                      Sales
                    </a>
                    <a
                      href="/procurement"
                      className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-300 ease-out hover:translate-x-1 will-change-transform"
                    >
                      Procurement
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Links */}
              <a
                href="/reports"
                className="block px-3 py-2 text-sm font-medium hover:bg-accent/80 rounded-lg transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] will-change-transform"
              >
                Reports
              </a>
              <a
                href="/settings"
                className="block px-3 py-2 text-sm font-medium hover:bg-accent/80 rounded-lg transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] will-change-transform"
              >
                Settings
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

const ListItem = React.forwardRef<React.ComponentRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-all duration-300 ease-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:scale-[1.02] hover:shadow-sm will-change-transform",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    )
  },
)
ListItem.displayName = "ListItem"

export default Navbar