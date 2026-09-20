import React from "react";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/Projects";
import LearningSection from "@/components/learning-section";

export default function Page() {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <ProjectSection />
      <LearningSection />
    </main>
  );
}