import { fetchAllUsers } from "../../../../techflow_backend/controllers/userController";

export async function GET(req, res) {
  await fetchAllUsers(req, res);
}
