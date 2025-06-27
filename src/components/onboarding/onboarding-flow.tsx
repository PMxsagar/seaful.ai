
"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Card } from "../ui/card";
import { useOnboarding } from "../../context/onboarding-context";

export function OnboardingFlow() {
  const { isOnboardingComplete, currentStep, nextStep, completeOnboarding, skipOnboarding } = useOnboarding();
  const [isOpen, setIsOpen] = useState(!isOnboardingComplete);

  const features = [
    { title: "AI Capabilities", description: "Automate and enhance your workflows." },
    { title: "Analytics & Reporting", description: "Gain insights from your data." },
    { title: "Pre-Call Preparation", description: "Get ready for successful interactions." },
    { title: "In-Call Support", description: "Real-time assistance during calls." },
    { title: "Post-Call Management", description: "Efficiently follow up and manage tasks." },
    { title: "Email Composer", description: "Craft and send emails with ease." },
    { title: "Dashboard Overview", description: "Your central hub for all activities." },
  ];

  const totalSteps = features.length + 2; // Welcome + Features (individual) + Completion

  const handleNext = () => {
    if (currentStep === totalSteps - 1) {
      completeOnboarding();
      setIsOpen(false);
    } else {
      nextStep();
    }
  };

  const handleSkip = () => {
    skipOnboarding();
    setIsOpen(false);
  };

  const renderStep = () => {
    if (currentStep === 0) {
      return (
        <div className="text-center">
          <h2 className="text-2xl font-bold">Welcome to Seaful!</h2>
          <p className="mt-2">Let&apos;s get you set up and ready to go.</p>
        </div>
      );
    } else if (currentStep >= 1 && currentStep <= features.length) {
      const feature = features[currentStep - 1];
      return (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Discover Our Features</h2>
          <Card className="p-4 mx-auto max-w-sm">
            <h3 className="font-semibold text-lg">{feature.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{feature.description}</p>
          </Card>
        </div>
      );
    } else if (currentStep === totalSteps - 1) {
      return (
        <div className="text-center">
          <h2 className="text-2xl font-bold">You&apos;re All Set!</h2>
          <p className="mt-2">You can now start using Seaful. Enjoy!</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Onboarding</DialogTitle>
        </DialogHeader>
        <div className="py-4">{renderStep()}</div>
        <div className="flex justify-center space-x-4">
          {currentStep < totalSteps - 1 && (
            <Button variant="outline" onClick={handleSkip}>
              Skip
            </Button>
          )}
          <Button onClick={handleNext}>
            {currentStep === totalSteps - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
