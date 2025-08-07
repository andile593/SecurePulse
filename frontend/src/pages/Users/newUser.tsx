import UserForm from "@/components/forms/UserForm";
import { useCreateUser } from "@/hooks/useUsers";
import { useNavigate } from "react-router-dom";

const mockedRoles = [
  { id: "admin", name: "Admin" },
  { id: "user", name: "User" },
  { id: "manager", name: "Manager" },
];

const NewUser = () => {
  const navigate = useNavigate();
  const { mutate: createUser } = useCreateUser();

const handleSubmit = (data: any) => {
  createUser(data, {
    onSuccess: () => {
      navigate("/users");
    },
    onError: (error) => {
      // Optional: show error notification if needed
      console.error("Failed to create user:", error);
    }
  });
};



  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Create New User</h1>
      <UserForm
        onSubmit={handleSubmit}
        onClose={() => navigate("/users")}
        roles={mockedRoles}
      />
    </div>
  );
};

export default NewUser;
