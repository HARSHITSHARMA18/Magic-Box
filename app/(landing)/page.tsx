import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

//importing componenets
import { LandingNavbar } from "@/components/LandingNavbar";
import { LandingHero } from "@/components/LandingHero";
import { LandingComponent } from "@/components/LandingComponent";

export default function Landingpage() {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingComponent />
    </div>
  );
}
