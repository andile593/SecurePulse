import { useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import type { Alarm } from '@/types/alarm';

let socket: Socket | null = null;

function getSocket(): Socket {
  if (!socket) {
    const token = localStorage.getItem('token');
    socket = io(import.meta.env.VITE_SOCKET_URL || 'http://localhost:5000', {
      withCredentials: true,
      auth: { token },
    });

    socket.on('connect_error', (err) => {
      console.error('Socket connection error:', err.message);
    });
  }
  return socket;
}


export function disconnectSocket() {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
}

interface UseAlarmSocketOptions {
  onNewAlarm: (alarm: Alarm) => void;
  onAlarmUpdated?: (alarm: Alarm) => void;
}

export function useAlarmSocket({ onNewAlarm, onAlarmUpdated }: UseAlarmSocketOptions) {
  useEffect(() => {
    const s = getSocket();

    s.on('alarm:new', onNewAlarm);

    if (onAlarmUpdated) {
      s.on('alarm:updated', onAlarmUpdated);
    }

    return () => {
      s.off('alarm:new', onNewAlarm);
      if (onAlarmUpdated) {
        s.off('alarm:updated', onAlarmUpdated);
      }
    };
  }, [onNewAlarm, onAlarmUpdated]);
}