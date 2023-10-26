import React from 'react';

import NavBar from '@/components/shared/navbar/Navbar';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <NavBar />
      <div className="flex">
        Left Sidebar
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          Middle
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        Right Sidebar
      </div>
      Toaster
    </main>
  );
};

export default RootLayout;
