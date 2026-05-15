import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';

import styles from './Layout.module.scss';
import { PageFadeIn } from '../ui/PageFadeIn';

export const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <div className={styles.layout}>
      <Header />
      <PageFadeIn key={location.pathname}>
        <main className={styles.main}>
          <Outlet />
        </main>
      </PageFadeIn>
      <Footer />
    </div>
  );
};
