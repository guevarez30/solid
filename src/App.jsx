import { createSignal, createEffect } from "solid-js";
//new build

// Get the API base URL from environment variable or default to localhost
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

const App = () => {
  const [users, setUsers] = createSignal([]);
  const [name, setName] = createSignal("");

  // Fetch users from API
  const fetchUsers = async () => {
    try {
      const res = await fetch(`${BASE_URL}/users`);
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  };

  // Create a new user
  const createUser = async () => {
    if (!name().trim()) return;

    try {
      await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name() }),
      });
      setName("");
      fetchUsers(); // Refresh user list
    } catch (error) {
      console.error("Failed to create user", error);
    }
  };

  // Delete a user
  const deleteUser = async (id) => {
    try {
      await fetch(`${BASE_URL}/users/${id}`, { method: "DELETE" });
      fetchUsers(); // Refresh user list
    } catch (error) {
      console.error("Failed to delete user", error);
    }
  };

  createEffect(fetchUsers); // Fetch users on mount

  return (
    <div class="p-6 max-w-lg mx-auto">
      <h1 class="text-2xl font-bold mb-4">User Management</h1>

      <div class="flex gap-2 mb-4">
        <input
          class="input input-bordered w-full"
          type="text"
          placeholder="Enter name"
          value={name()}
          onInput={(e) => setName(e.target.value)}
        />
        <button class="btn btn-primary" onClick={createUser}>
          Add
        </button>
      </div>

      <ul class="space-y-2">
        {users().map((user) => (
          <li class="flex justify-between p-2 border rounded" key={user.id}>
            <span>{user.name}</span>
            <button class="btn btn-error btn-xs" onClick={() => deleteUser(user.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

