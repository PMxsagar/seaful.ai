import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard,
  Phone,
  PhoneCall,
  MessageSquare,
  BarChart3,
  Search,
  Settings,
  HelpCircle,
  Bell,
  ChevronDown,
  Mail,
  Database,
  Users,
  Brain,
  Target,
} from "lucide-react";

interface SidebarProps {
  className?: string;
  currentView: string;
  onViewChange: (view: string) => void;
}

const navigation = [
  {
    name: "Dashboard",
    href: "dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Pre-Call Prep",
    href: "pre-call",
    icon: Search,
  },
  {
    name: "In-Call Support",
    href: "in-call",
    icon: PhoneCall,
  },
  {
    name: "Post-Call",
    href: "post-call",
    icon: MessageSquare,
  },
  {
    name: "Analytics",
    href: "analytics",
    icon: BarChart3,
  },
  {
    name: "Email Composer",
    href: "email",
    icon: Mail,
  },
  {
    name: "Data Management",
    href: "data",
    icon: Database,
  },
  {
    name: "Prospects",
    href: "prospects",
    icon: Users,
  },
  {
    name: "AI Features",
    href: "ai",
    icon: Brain,
  },
];

export function Sidebar({ className, currentView, onViewChange }: SidebarProps) {
  return (
    <div className={cn("flex h-screen w-64 flex-col border-r bg-background", className)}>
      {/* Header */}
      <div className="flex h-16 items-center border-b px-6">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">S</span>
          </div>
          <span className="font-semibold text-lg">Seaful.ai</span>
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-b">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src="/avatars/sagar.jpg" />
            <AvatarFallback>SD</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium">Sagar Dewale</p>
            <p className="text-xs text-muted-foreground">Sales Agent</p>
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="p-4 border-b">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-lg font-semibold">5</div>
            <div className="text-xs text-muted-foreground">Calls Today</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold">18%</div>
            <div className="text-xs text-muted-foreground">Conv. Rate</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => (
          <Button
            key={item.name}
            variant={currentView === item.href ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start",
              currentView === item.href && "bg-secondary"
            )}
            onClick={() => onViewChange(item.href)}
          >
            <item.icon className="mr-3 h-4 w-4" />
            {item.name}
          </Button>
        ))}
      </nav>

      {/* Notifications */}
      <div className="p-4 border-t">
        <Button variant="ghost" className="w-full justify-start">
          <Bell className="mr-3 h-4 w-4" />
          Notifications
          <Badge variant="destructive" className="ml-auto">
            3
          </Badge>
        </Button>
      </div>

      {/* Footer */}
      <div className="p-4 border-t space-y-2">
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="mr-3 h-4 w-4" />
          Settings
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <HelpCircle className="mr-3 h-4 w-4" />
          Help & Support
        </Button>
      </div>
    </div>
  );
}
