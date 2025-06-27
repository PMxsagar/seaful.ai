import { Sidebar } from "./sidebar";
import { Header } from "@/components/dashboard/header";
import { OnboardingFlow } from "../onboarding/onboarding-flow";
import { useOnboarding } from "../../context/onboarding-context";

interface DashboardLayoutProps {
  children: React.ReactNode;
  currentView: string;
  onViewChange: (view: string) => void;
}

export function DashboardLayout({ children, currentView, onViewChange }: DashboardLayoutProps) {
  const { isOnboardingComplete } = useOnboarding();

  return (
    <div className="flex h-screen bg-background">
      <Sidebar currentView={currentView} onViewChange={onViewChange} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
      {!isOnboardingComplete && <OnboardingFlow />}
    </div>
  );
}
