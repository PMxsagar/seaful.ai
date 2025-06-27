
"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Card } from "../ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useOnboarding } from "../../context/onboarding-context";

export function OnboardingFlow() {
  const { isOnboardingComplete, currentStep, nextStep, completeOnboarding, skipOnboarding } = useOnboarding();
  const [isOpen, setIsOpen] = useState(!isOnboardingComplete);

  const features = [
    { title: "AI Capabilities", description: "Utilize AI to automate routine tasks and enhance various aspects of your workflow, such as summarizing calls or suggesting follow-up actions." },
    { title: "Analytics & Reporting", description: "Access detailed analytics and reports to understand performance metrics, identify trends, and support data-driven decision-making." },
    { title: "Pre-Call Preparation", description: "Prepare for calls by reviewing prospect information, past interactions, and setting objectives to ensure effective communication." },
    { title: "In-Call Support", description: "Receive real-time assistance during calls, including relevant information and prompts." },
    { title: "Post-Call Management", description: "Efficiently manage follow-up tasks and administrative duties after calls." },
    { title: "Email Composer", description: "Compose and send emails with integrated templates and contact management." },
    { title: "Dashboard Overview", description: "View a centralized summary of your key activities and performance metrics." },
  ];

  const totalSteps = features.length + 2; // Welcome + Features (individual) + Completion

  useEffect(() => {
    if (isOpen && currentStep >= 1 && currentStep <= features.length) {
      const timer = setTimeout(() => {
        nextStep();
      }, 3000); // Auto-advance after 3 seconds for feature steps
      return () => clearTimeout(timer);
    }
  }, [isOpen, currentStep, features.length, nextStep]);

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

  const variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const renderStep = () => {
    if (currentStep === 0) {
      return (
        <motion.div
          key="welcome"
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold">Welcome to Seaful!</h2>
          <p className="mt-2">Let&apos;s get you set up and ready to go.</p>
        </motion.div>
      );
    } else if (currentStep >= 1 && currentStep <= features.length) {
      const feature = features[currentStep - 1];
      return (
        <motion.div
          key={currentStep}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Discover Our Features</h2>
          <Card className="p-4 mx-auto max-w-sm">
            <h3 className="font-semibold text-lg">{feature.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{feature.description}</p>
          </Card>
        </motion.div>
      );
    } else if (currentStep === totalSteps - 1) {
      return (
        <motion.div
          key="complete"
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold">You&apos;re All Set!</h2>
          <p className="mt-2">You can now start using Seaful. Enjoy!</p>
        </motion.div>
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
        <AnimatePresence mode="wait">
          <div className="py-4">{renderStep()}</div>
        </AnimatePresence>
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
