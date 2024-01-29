import { useDispatch, useSelector } from "react-redux";

export function DashboardPage() {
  const { access } = useSelector((state) => state.auth.authState);
  return <div>Token: {access}</div>;
}
