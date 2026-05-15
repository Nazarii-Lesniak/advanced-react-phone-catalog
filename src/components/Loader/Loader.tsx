import React, { useEffect, useState } from 'react';

import styles from './Loader.module.scss';

export const Loader: React.FC = () => {
  const [showLoader, setShowLoader] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (!showLoader) {
    return null;
  }

  return (
    <div className={styles.loader} role="status" aria-label="Loading"></div>
  );
};
