"use client";

import { useState, useEffect } from "react";

//For toggle Button and Icon
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

//For Responsiveness : Sheets
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

//Import sidebar
import Sidebar from "@/components/Sidebar";

const MobileSidebar = () => {
  //Hydration error
  const [isMounted, setIsMOunted] = useState(false);

  useEffect(() => {
    setIsMOunted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  {
    /* TOGGLE BUTTON FOR SMALLER DEVICES */
  }
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
