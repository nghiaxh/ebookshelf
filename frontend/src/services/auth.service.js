export default function authenticate() {
  return !!localStorage.getItem("authenticateToken");
}
