import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Target, 
  FileText, 
  Calendar, 
  BarChart3, 
  Menu 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Stratégie", href: "/strategy", icon: Target },
  { name: "Contenus", href: "/content", icon: FileText },
  { name: "Calendrier", href: "/calendar", icon: Calendar },
  { name: "Analytiques", href: "/analytics", icon: BarChart3 },
];

export function Navigation() {
  const NavigationItems = () => (
    <>
      {navigation.map((item) => (
        <NavLink
          key={item.name}
          to={item.href}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`
          }
        >
          <item.icon className="h-5 w-5" />
          <span className="font-medium">{item.name}</span>
        </NavLink>
      ))}
    </>
  );

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-col w-64 bg-gradient-card border-r border-border p-6 space-y-2">
        <div className="mb-8">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            SocialBoost
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Gestion Marketing Social
          </p>
        </div>
        <NavigationItems />
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-border bg-gradient-card">
        <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          SocialBoost
        </h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-6">
            <div className="mb-8">
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                SocialBoost
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Gestion Marketing Social
              </p>
            </div>
            <div className="space-y-2">
              <NavigationItems />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}