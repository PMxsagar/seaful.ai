
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface OnboardingContextType {
  isOnboardingComplete: boolean;
  currentStep: number;
  completeOnboarding: () => void;
  nextStep: () => void;
  resetOnboarding: () => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(
  undefined
);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const completeOnboarding = () => {
    setIsOnboardingComplete(true);
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const resetOnboarding = () => {
    setIsOnboardingComplete(false);
    setCurrentStep(0);
  };

  return (
    <OnboardingContext.Provider
      value={{
        isOnboardingComplete,
        currentStep,
        completeOnboarding,
        nextStep,
        resetOnboarding,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
}
