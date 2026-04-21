import { useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import type { Alarm } from '@/types/alarm';

// Single socket instance shared across the hook's lifetime.
// Created once when the module loads, reused on every call.
let socket: Socket | null = null;

function getSocket(): Socket {
  if (!socket) {
    socket = io(import.meta.env.VITE_API_URL || 'http://localhost:5000', {
      withCredentials: true,
    });
  }
  return socket;
}

interface UseAlarmSocketOptions {
  onNewAlarm: (alarm: Alarm) => void;
  onAlarmUpdated?: (alarm: Alarm) => void;
}

export function useAlarmSocket({ onNewAlarm, onAlarmUpdated }: UseAlarmSocketOptions) {
  useEffect(() => {
    const s = getSocket();

    // Listen for new alarms from the backend emitAlarmEvent function.
    s.on('alarm:new', onNewAlarm);

    // Listen for status updates — built now so Day 8 is a one-line hookup.
    if (onAlarmUpdated) {
      s.on('alarm:updated', onAlarmUpdated);
    }

    // Cleanup: remove only these listeners on unmount.
    // Does NOT disconnect the socket — other components may be using it.
    return () => {
      s.off('alarm:new', onNewAlarm);
      if (onAlarmUpdated) {
        s.off('alarm:updated', onAlarmUpdated);
      }
    };
  }, [onNewAlarm, onAlarmUpdated]);
}