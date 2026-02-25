import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from '../components/ui/Loader';

interface GlobalLoaderContextType {
    setIsLoading: (isLoading: boolean) => void;
    showLoaderWithDelay: (duration?: number) => void;
}

const GlobalLoaderContext = createContext<GlobalLoaderContextType | undefined>(undefined);

export const GlobalLoaderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();

    // Show artificial loader on route change
    useEffect(() => {
        setIsLoading(true);
        const timeoutId = setTimeout(() => setIsLoading(false), 600);
        return () => clearTimeout(timeoutId);
    }, [location.pathname]);

    const showLoaderWithDelay = (duration: number = 600) => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, duration);
    };

    return (
        <GlobalLoaderContext.Provider value={{ setIsLoading, showLoaderWithDelay }}>
            {children}
            {isLoading && (
                <div className="fixed inset-0 z-[99999] bg-white bg-opacity-90 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300">
                    <Loader />
                </div>
            )}
        </GlobalLoaderContext.Provider>
    );
};

export const useGlobalLoader = () => {
    const context = useContext(GlobalLoaderContext);
    if (context === undefined) {
        throw new Error('useGlobalLoader must be used within a GlobalLoaderProvider');
    }
    return context;
};
