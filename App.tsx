import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.js';
import { ToastProvider } from './context/ToastContext.js';
import { AuthProvider } from './context/AuthContext.js';
import { WhatsAppProvider } from './context/WhatsAppContext.js';
import { PublisherRoute } from './components/PublisherRoute.js';
import { WhatsAppModal } from './components/WhatsAppModal.js';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton.js';

import { HomePage } from './pages/HomePage.js';
import { PostDetailPage } from './pages/PostDetailPage.js';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage.js';
import { TermsConditionsPage } from './pages/TermsConditionsPage.js';
import { CustomDomainPage } from './pages/CustomDomainPage.js';
import { PublisherLoginPage } from './pages/PublisherLoginPage.js';
import { PublisherDashboardPage } from './pages/PublisherDashboardPage.js';
import { PublisherPostEditorPage } from './pages/PublisherPostEditorPage.js';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ToastProvider>
        <AuthProvider>
          <WhatsAppProvider>
            <BrowserRouter>
              <WhatsAppModal />
              <FloatingWhatsAppButton />
              <Routes>
                {/* Public Visitor Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/post/:slug" element={<PostDetailPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
              <Route path="/custom-domain" element={<CustomDomainPage />} />

              {/* Hidden Publisher Routes (Not linked from public pages) */}
              <Route path="/publisher/login" element={<PublisherLoginPage />} />
              <Route
                path="/publisher/dashboard"
                element={
                  <PublisherRoute>
                    <PublisherDashboardPage />
                  </PublisherRoute>
                }
              />
              <Route
                path="/publisher/posts/new"
                element={
                  <PublisherRoute>
                    <PublisherPostEditorPage />
                  </PublisherRoute>
                }
              />
              <Route
                path="/publisher/posts/edit/:id"
                element={
                  <PublisherRoute>
                    <PublisherPostEditorPage />
                  </PublisherRoute>
                }
              />

              {/* Fallback route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </WhatsAppProvider>
      </AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
