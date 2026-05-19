import React, { ReactNode } from 'react';
import styles from './PageFadeIn.module.scss';

interface PageFadeInProps {
  children: ReactNode;
}

export const PageFadeIn: React.FC<PageFadeInProps> = ({ children }) => {
  return <div className={styles.fadeIn}>{children}</div>;
};
