import React from 'react';

import Header from '@/Presentation/components/header';
import Footer from '@/Presentation/components/footer';

export interface LayoutProps {
  title?: string;
  children?: any;
};

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Header title={title} />
      {children}
      <Footer />
    </>
  )
};

export default Layout;