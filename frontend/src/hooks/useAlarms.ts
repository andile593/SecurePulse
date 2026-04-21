import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getAlarms,
  getAlarmById,
  createAlarm,
  updateAlarm,
  deleteAlarm,
  updateAlarmStatus,
} from '@/lib/api/alarms';
import type { Alarm } from '@/types/alarm';

type UpdateAlarmInput = { id: string; alarm: Partial<Alarm> };
type DeleteAlarmInput = { id: string };
type UpdateAlarmStatusInput = { id: string; status: string };

export function useAlarms() {
  return useQuery<Alarm[]>({
    queryKey: ['alarms'],
    queryFn: async () => {
      const res = await getAlarms();
      return res.data;
    },
  });
}

export const useAlarm = (id: string) => {
  return useQuery<Alarm>({
    queryKey: ['alarm', id],
    queryFn: async () => {
      const res = await getAlarmById(id);
      return res.data;
    },
    enabled: !!id,
  });
};

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

export function useUpdateAlarmStatus() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, status }: UpdateAlarmStatusInput) =>
      updateAlarmStatus(id, status),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['alarms'] });
      queryClient.invalidateQueries({ queryKey: ['alarm', variables.id] });
    },
  });
}