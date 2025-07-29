// src/components/ui/forms/ClientForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Client } from '@/types/Client';
import { createClient, updateClient } from '@/lib/api/clients';
import { clientSchema, ClientInput } from '@/types/schemas/clientSchema';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type Props = {
  initialData?: Client;
  onSuccess?: () => void;
};

export default function ClientForm({ initialData, onSuccess }: Props) {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClientInput>({
    resolver: zodResolver(clientSchema),
    defaultValues: initialData || {
      name: '',
      email: '',
      phone: '',
      address: '',
    },
  });

  const mutation = useMutation({
    mutationFn: (data: ClientInput) =>
      initialData ? updateClient(initialData.id, data) : createClient(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clients'] });
      onSuccess?.();
    },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => mutation.mutate(data))}
      className="space-y-4 p-4"
    >
      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input {...register('name')} className="input" />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input {...register('email')} className="input" />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block mb-1 font-medium">Phone</label>
        <input {...register('phone')} className="input" />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
      </div>

      <div>
        <label className="block mb-1 font-medium">Address</label>
        <input {...register('address')} className="input" />
        {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={isSubmitting}
      >
        {initialData ? 'Update Client' : 'Create Client'}
      </button>
    </form>
  );
}
