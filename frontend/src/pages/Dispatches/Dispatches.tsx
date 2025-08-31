import { useNavigate } from "react-router-dom";
import { useDispatches, useDeleteDispatch } from "@/hooks/useDispatches";
import { useVehicles } from "@/hooks/useVehicles";

export default function DispatchList() {
  const navigate = useNavigate();
  const { data: dispatches = [], isLoading, error } = useDispatches();
  const { mutate: deleteDispatch } = useDeleteDispatch();

  const { data: vehicles = [] } = useVehicles();


  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this dispatch?")) return;
    deleteDispatch({ id });
  };

  if (isLoading) return <div className="p-4">Loading dispatches...</div>;
  if (error) return <div className="p-4 text-red-600">{(error as Error).message}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Dispatches</h1>
        <button
          onClick={() => navigate("/dispatches/new")}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          + New Dispatch
        </button>
      </div>

      {dispatches.length === 0 ? (
        <div className="p-4 text-gray-500">No dispatches found.</div>
      ) : (
        <div className="grid grid-cols-4 gap-5">
          <div className="flex flex-col col-start-1 col-end-2">
            {vehicles.map((vehicle) => (
              <div className="bg-primary">
                <p>{vehicle.plate}</p>
              </div>
            ))}
          </div>
          <div className="col-start-2 col-end-5"></div>
          <div className="col-start-1 col-end-5"></div>
        </div>
      )}
    </div>
  );
}
