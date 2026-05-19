import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo';
import { ArrowUpIcon } from '../ui/ArrowUpIcon';
import { CONTACTS, GIT_HUB_REPO, RIGHTS_PATH } from '../../constants';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <Logo className={styles.footer__logo} />

        <nav className={styles.footer__nav} aria-label="Footer navigation">
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>
              <a
                href={GIT_HUB_REPO}
                className={styles.footer__link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li className={styles.footer__item}>
              <NavLink
                to={CONTACTS}
                className={styles.footer__link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contacts
              </NavLink>
            </li>
            <li className={styles.footer__item}>
              <NavLink
                to={RIGHTS_PATH}
                className={styles.footer__link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Rights
              </NavLink>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className={styles.footer__backButton}
          onClick={handleBackToTop}
          aria-label="Back to top"
        >
          <span className={styles.footer__backText}>Back to top</span>
          <div className={styles.footer__backIcon}>
            <ArrowUpIcon />
          </div>
        </button>
      </div>
    </footer>
  );
};
