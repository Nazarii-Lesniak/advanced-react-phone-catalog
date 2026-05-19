import { HashRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.scss';
import { HomePage } from './modules/HomePage';
import { Layout } from './components/Layout';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { FavouritesProvider } from './context/FavoritesContext';
import { CategoriesType, PathType } from './types/Types';
import { Loader } from './components/Loader';
import { ErrorBoundary } from './components/ErrorBoundary';

const FavouritesPage = lazy(() =>
  import('./modules/FavouritesPage').then(m => ({ default: m.FavouritesPage })),
);

const CategoryPage = lazy(() =>
  import('./modules/CategoryPage').then(m => ({ default: m.CategoryPage })),
);

const CartPage = lazy(() =>
  import('./modules/CartPage').then(m => ({ default: m.CartPage })),
);

const ProductDetailsPage = lazy(() =>
  import('./modules/ProductDetailsPage').then(m => ({
    default: m.ProductDetailsPage,
  })),
);

const NotFoundPage = lazy(() =>
  import('./modules/NotFoundPage').then(m => ({ default: m.NotFoundPage })),
);

export const App = () => (
  <div className="App">
    <ThemeProvider>
      <CartProvider>
        <FavouritesProvider>
          <HashRouter
            future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
          >
            <ErrorBoundary>
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route path={PathType.HOME} element={<Layout />}>
                    <Route index element={<HomePage />} />

                    <Route
                      path={PathType.PHONES}
                      element={
                        <CategoryPage
                          title={'Mobile phones'}
                          category={CategoriesType.PHONES}
                        />
                      }
                    />
                    <Route
                      path={PathType.TABLETS}
                      element={
                        <CategoryPage
                          title={'Tablets'}
                          category={CategoriesType.TABLETS}
                        />
                      }
                    />
                    <Route
                      path={PathType.ACCESSORIES}
                      element={
                        <CategoryPage
                          title={'Accessories'}
                          category={CategoriesType.ACCESSORIES}
                        />
                      }
                    />

                    <Route
                      path={PathType.FAVOURITES}
                      element={<FavouritesPage />}
                    />
                    <Route path={PathType.CART} element={<CartPage />} />
                    <Route
                      path="/product/:productId"
                      element={<ProductDetailsPage />}
                    />

                    <Route path="*" element={<NotFoundPage />} />
                  </Route>
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </HashRouter>
        </FavouritesProvider>
      </CartProvider>
    </ThemeProvider>
  </div>
);
