
"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useOnboarding } from "../../context/onboarding-context";

export function OnboardingFlow() {
  const { isOnboardingComplete, currentStep, nextStep, completeOnboarding } = useOnboarding();
  const [isOpen, setIsOpen] = useState(!isOnboardingComplete);

  const handleNext = () => {
    if (currentStep === 2) {
      completeOnboarding();
      setIsOpen(false);
    } else {
      nextStep();
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div>
            <h2 className="text-2xl font-bold">Welcome to Seaful!</h2>
            <p className="mt-2">Let's get you set up and ready to go.</p>
          </div>
        );
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-bold">Discover Our Features</h2>
            <ul className="mt-2 list-disc list-inside">
              <li>AI Capabilities: Automate and enhance your workflows.</li>
              <li>Analytics & Reporting: Gain insights from your data.</li>
              <li>Pre-Call Preparation: Get ready for successful interactions.</li>
              <li>In-Call Support: Real-time assistance during calls.</li>
              <li>Post-Call Management: Efficiently follow up and manage tasks.</li>
              <li>Email Composer: Craft and send emails with ease.</li>
              <li>Dashboard Overview: Your central hub for all activities.</li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-2xl font-bold">You're All Set!</h2>
            <p className="mt-2">You can now start using Seaful. Enjoy!</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Onboarding</DialogTitle>
        </DialogHeader>
        <div className="py-4">{renderStep()}</div>
        <div className="flex justify-end">
          <Button onClick={handleNext}>
            {currentStep === 2 ? "Finish" : "Next"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
