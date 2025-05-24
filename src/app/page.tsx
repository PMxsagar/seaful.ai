"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { DashboardOverview } from "@/components/dashboard/dashboard-overview";
import { PreCallPreparation } from "@/components/pre-call/pre-call-preparation";
import { InCallSupport } from "@/components/in-call/in-call-support";
import PostCallManagement from "@/components/post-call/post-call-management";
import AnalyticsReporting from "@/components/analytics/analytics-reporting";
import EmailComposer from "@/components/forms/email-composer";
import DataDisplay from "@/components/data-display/data-display";
import AIFeatures from "@/components/ai/ai-features";

export default function Home() {
  const [currentView, setCurrentView] = useState("dashboard");

  const renderCurrentView = () => {
    switch (currentView) {
      case "dashboard":
        return <DashboardOverview />;
      case "pre-call":
        return <PreCallPreparation />;
      case "in-call":
        return <InCallSupport />;
      case "post-call":
        return <PostCallManagement />;
      case "analytics":
        return <AnalyticsReporting />;
      case "email":
        return <EmailComposer />;
      case "data":
        return <DataDisplay />;
      case "ai":
        return <AIFeatures />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <DashboardLayout currentView={currentView} onViewChange={setCurrentView}>
      {renderCurrentView()}
    </DashboardLayout>
  );
}
