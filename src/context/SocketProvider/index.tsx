import React, {
  createContext,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { io, Socket } from 'socket.io-client';
import { Lot } from '../../types.ts';

interface SocketContextProps {
  socket: Socket | null;
}

export const SocketContext = createContext<SocketContextProps>({
  socket: null,
});

interface SocketProviderProps {
  children: ReactNode;
  lot: Lot;
}

export const SocketProvider: React.FC<SocketProviderProps> = ({
  children,
  lot,
}) => {
  const socketRef = useRef<Socket | null>(null);
  const [, setIsReady] = useState(false);

  useEffect(() => {
    if (!lot) return;

    const socket = io(import.meta.env.VITE_BIDS_SERVICE_HOST, {
      query: { token: localStorage.getItem('token'), lotId: lot.id },
      path: '/bids-service/ws',
    });
    setIsReady(true);
    socketRef.current = socket;

    socket.on('error', (message) => {
      console.error('WebSocket Error:', message);
    });

    return () => {
      console.log('Closing websocket connection...');
      socket.off('error');
      socket.disconnect();
    };
  }, [lot]);

  return (
    <SocketContext.Provider value={{ socket: socketRef.current }}>
      {children}
    </SocketContext.Provider>
  );
};
