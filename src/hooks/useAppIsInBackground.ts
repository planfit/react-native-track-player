import { useState, useEffect } from 'react';
import { AppState, AppStateStatus } from 'react-native';

export function useAppIsInBackground() {
  const [state, setState] = useState<AppStateStatus>(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextState) => {
      setState(nextState);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return state === 'background';
}
