import React, { createContext, useContext, useState, ReactNode } from 'react';
import { WhatsAppMessageOptions } from '../utils/whatsapp.js';

interface WhatsAppContextType {
  isOpen: boolean;
  initialOptions: WhatsAppMessageOptions;
  openWhatsAppModal: (options?: WhatsAppMessageOptions) => void;
  closeWhatsAppModal: () => void;
}

const WhatsAppContext = createContext<WhatsAppContextType | undefined>(undefined);

export const WhatsAppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialOptions, setInitialOptions] = useState<WhatsAppMessageOptions>({ intent: 'trial' });

  const openWhatsAppModal = (options?: WhatsAppMessageOptions) => {
    if (options) {
      setInitialOptions(options);
    } else {
      setInitialOptions({ intent: 'trial' });
    }
    setIsOpen(true);
  };

  const closeWhatsAppModal = () => {
    setIsOpen(false);
  };

  return (
    <WhatsAppContext.Provider
      value={{
        isOpen,
        initialOptions,
        openWhatsAppModal,
        closeWhatsAppModal
      }}
    >
      {children}
    </WhatsAppContext.Provider>
  );
};

export const useWhatsApp = (): WhatsAppContextType => {
  const context = useContext(WhatsAppContext);
  if (!context) {
    throw new Error('useWhatsApp must be used within a WhatsAppProvider');
  }
  return context;
};
