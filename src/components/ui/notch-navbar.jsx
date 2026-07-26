import { useState } from "react"
import { NavLink as RouterNavLink, Link } from "react-router-dom"
import { Home, Calendar, Trophy, BookOpen, Users, Code, Menu, X } from "lucide-react"
import { cn } from "../../lib/utils.js"
import { motion, AnimatePresence } from "framer-motion"

// Helper component for navigation links using react-router-dom with bulletproof styles
const NavLink = ({ to, icon: Icon, label }) => (
  <RouterNavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "group flex items-center gap-1.5 text-sm font-medium transition-colors whitespace-nowrap",
        isActive
          ? "!text-[#c9a84c]"
          : "!text-white/70 hover:!text-white"
      )
    }
    style={({ isActive }) => ({
      color: isActive ? '#c9a84c' : 'rgba(255, 255, 255, 0.7)'
    })}
  >
    <Icon className="w-4 h-4 opacity-70 group-hover:opacity-100" />
    <span>{label}</span>
  </RouterNavLink>
)

export function NotchNavbar({ className, ...props }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Navigation items matching the project's routes
  const items = {
    left: [
      { label: "Home", to: "/", icon: Home },
      { label: "Events", to: "/events", icon: Calendar },
      { label: "Problems", to: "/problems", icon: BookOpen },
    ],
    right: [
      { label: "Team", to: "/team", icon: Users },
      { label: "Developers", to: "/developers", icon: Code },
    ],
  }

  return (
    <>
      <header
        className={cn("fixed top-0 inset-x-0 z-50 h-16 flex px-0", className)}
        role="banner"
        {...props}
      >
        {/* Left Side Bar - Flexible width */}
        <div className="flex-1 h-10 bg-[#040713] z-20 relative min-w-0" style={{ backgroundColor: '#040713' }}>
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <line x1="0" y1="39.5" x2="100%" y2="39.5" stroke="#1e3457" strokeOpacity={0.6} strokeWidth={0.5} />
            <line x1="0" y1="36.5" x2="100%" y2="36.5" stroke="#1e3457" strokeOpacity={0.3} strokeWidth={0.5} />
          </svg>
        </div>

        {/* Responsive Notch Container - 3 Slices */}
        <div className="flex h-16 relative z-10 shrink-0 -ml-px">
          {/* Left Slice (Corner) */}
          <div className="w-[50px] h-full relative shrink-0">
            <div
              className="absolute inset-0 bg-[#040713]"
              style={{ 
                backgroundColor: '#040713',
                clipPath: "path('M0 0 H50 V64 C25 64 25 40 0 40 Z')" 
              }}
            />
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 50 64">
              <path d="M0 39.5 C25 39.5 25 63.5 50 63.5" fill="none" stroke="#1e3457" strokeOpacity={0.6} strokeWidth={0.5} />
              <path d="M0 36.5 C25 36.5 25 60.5 50 60.5" fill="none" stroke="#1e3457" strokeOpacity={0.3} strokeWidth={0.5} />
            </svg>
          </div>

          {/* Center Slice (Flexible Content Area) */}
          <div className="flex-1 h-full relative min-w-0 -ml-px">
            {/* Background & Lines Layer */}
            <div className="absolute inset-0 bg-[#040713]" style={{ backgroundColor: '#040713' }}>
              <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                <line x1="0" y1="63.5" x2="100%" y2="63.5" stroke="#1e3457" strokeOpacity={0.6} strokeWidth={0.5} />
                <line x1="0" y1="60.5" x2="100%" y2="60.5" stroke="#1e3457" strokeOpacity={0.3} strokeWidth={0.5} />
              </svg>
            </div>

            {/* Content Layer */}
            <div className="relative w-full h-full flex items-end justify-between pb-2 px-4 md:px-8">
              {/* Desktop Left Nav */}
              <nav className="hidden md:flex gap-10 mb-1 shrink-0">
                {items.left.map((item) => (
                  <NavLink key={item.label} {...item} />
                ))}
              </nav>

              {/* Mobile Menu Button (Left) */}
              <button
                className="md:hidden mb-1 p-1 text-white/70 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>

              {/* Logo (Center) - Removed */}
              <div className="flex justify-center shrink-0 mx-2 md:mx-4 mt-1">
              </div>

              {/* Desktop Right Nav */}
              <nav className="hidden md:flex gap-10 items-center shrink-0 mb-1">
                {items.right.map((item) => (
                  <NavLink key={item.label} {...item} />
                ))}
              </nav>

              {/* Mobile Right Actions - spacer for layout balance */}
              <div className="md:hidden w-9 mb-1" />
            </div>
          </div>

          {/* Right Slice (Corner) */}
          <div className="w-[50px] h-full relative shrink-0 -ml-px">
            <div
              className="absolute inset-0 bg-[#040713]"
              style={{ 
                backgroundColor: '#040713',
                clipPath: "path('M0 0 H50 V40 C25 40 25 64 0 64 Z')" 
              }}
            />
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 50 64">
              <path d="M0 63.5 C25 63.5 25 39.5 50 39.5" fill="none" stroke="#1e3457" strokeOpacity={0.6} strokeWidth={0.5} />
              <path d="M0 60.5 C25 60.5 25 36.5 50 36.5" fill="none" stroke="#1e3457" strokeOpacity={0.3} strokeWidth={0.5} />
            </svg>
          </div>
        </div>

        {/* Right Side Bar - Flexible width */}
        <div className="flex-1 h-10 bg-[#040713] z-20 relative min-w-0 -ml-px" style={{ backgroundColor: '#040713' }}>
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <line x1="0" y1="39.5" x2="100%" y2="39.5" stroke="#1e3457" strokeOpacity={0.6} strokeWidth={0.5} />
            <line x1="0" y1="36.5" x2="100%" y2="36.5" stroke="#1e3457" strokeOpacity={0.3} strokeWidth={0.5} />
          </svg>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#040713] border-b border-[#1e3457]/50 p-4 md:hidden shadow-lg"
            style={{ backgroundColor: '#040713' }}
          >
            <nav className="flex flex-col gap-1">
              {[...items.left, ...items.right].map((item) => (
                <RouterNavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 p-3 rounded-lg transition-colors",
                      isActive
                        ? "bg-[#c9a84c]/10 !text-[#c9a84c]"
                        : "hover:bg-white/5 !text-white/80"
                    )
                  }
                  style={({ isActive }) => ({
                    color: isActive ? '#c9a84c' : 'rgba(255, 255, 255, 0.8)'
                  })}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5 opacity-70" />
                  <span className="font-medium">{item.label}</span>
                </RouterNavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default NotchNavbar
