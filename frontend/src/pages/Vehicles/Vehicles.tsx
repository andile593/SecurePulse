import { useVehicles } from '@/hooks/useVehicles';
import type { Vehicle } from '@/types/vehicle';

const Vehicles = () => {
  const { data: vehicles, isLoading, error } = useVehicles();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Vehicles</h1>
      <ul className="space-y-4">
        {vehicles?.map((vehicle: Vehicle) => (
          <li key={vehicle.id} className="bg-white shadow-md p-4 rounded-md">
            <p className="font-bold">{vehicle.plateNumber}</p>
            <p className="text-sm text-gray-600">{vehicle.model}/</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Vehicles;
