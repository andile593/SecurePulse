import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getAlarms,
  createAlarm,
  updateAlarm,
  deleteAlarm,
} from '@/lib/api/alarms';
import type { Alarm } from '@/types/alarm';

type UpdateAlarmInput = { id: string; alarm: Partial<Alarm> };
type DeleteAlarmInput = { id: string };

export function useAlarms() {
  return useQuery<Alarm[]>({
    queryKey: ['alarms'],
    queryFn: getAlarms,
  });
}

export function useCreateAlarm() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createAlarm,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['alarms'] }),
  });
}

export function useUpdateAlarm() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateAlarm,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['alarms'] }),
  });
}

export function useDeleteAlarm() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteAlarm,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['alarms'] }),
  });
}
