import { createRoot } from 'react-dom/client';
import { StrictMode, Suspense } from 'react';
import '@shared/styles/index.css';
import '@shared/global/i18n';

import App from './app.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense>
      <App />
    </Suspense>
  </StrictMode>,
);
