import { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { RegistrationScreen } from './components/RegistrationScreen';
import { LoginScreen } from './components/LoginScreen';
import { IDCardScreen } from './components/IDCardScreen';
import { AccessibilityScreen } from './components/AccessibilityScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'register' | 'login' | 'id' | 'accessibility'>('welcome');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleNavigate = (screen: 'welcome' | 'register' | 'login' | 'id' | 'accessibility') => {
    setCurrentScreen(screen);
  };

  const handleRegistrationComplete = () => {
    setIsRegistered(true);
    setCurrentScreen('login');
  };

  const handleAuthenticate = () => {
    setIsAuthenticated(true);
    setCurrentScreen('id');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      {/* Mobile Frame */}
      <div className="w-full max-w-md">
        {currentScreen === 'welcome' && (
          <WelcomeScreen onNavigate={handleNavigate} isRegistered={isRegistered} />
        )}
        {currentScreen === 'register' && (
          <RegistrationScreen
            onComplete={handleRegistrationComplete}
            onBack={() => handleNavigate('welcome')}
            onAccessibility={() => handleNavigate('accessibility')}
          />
        )}
        {currentScreen === 'login' && (
          <LoginScreen
            onAuthenticate={handleAuthenticate}
            onBack={() => handleNavigate('welcome')}
            onAccessibility={() => handleNavigate('accessibility')}
          />
        )}
        {currentScreen === 'id' && (
          <IDCardScreen
            onBack={() => handleNavigate('login')}
            onAccessibility={() => handleNavigate('accessibility')}
          />
        )}
        {currentScreen === 'accessibility' && (
          <AccessibilityScreen
            onBack={() => handleNavigate(isAuthenticated ? 'id' : (isRegistered ? 'login' : 'welcome'))}
          />
        )}
      </div>
    </div>
  );
}