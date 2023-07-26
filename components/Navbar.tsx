//Navbar in the Dashboard Route

import MobileSidebar from "@/components/ui/MobileSidebar";

import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex item-centre p-4">
      <MobileSidebar />

      {/* USER DETAIL AND SIGNOUT */}
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
