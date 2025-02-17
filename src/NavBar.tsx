import { NavLink } from "react-router-dom";
import { SmallButton } from "./core/components/SmallButton";
import { initLogin } from "./core/services/Auth";
import { useUserProfile } from "./core/contexts/UserContext";

export function NavBar() {
  // Good Context has no state, just events mapped to local state in hook
  // const user = useSelector(store => store.users.activeUser)

  return (
    <div className="flex justify-between items-center gap-5">
      <h1>React App</h1>

      <NavLink to={"/music/search"}>Search</NavLink>
      <NavLink to={"/playlists"}>Playlists</NavLink>

      <div className="flex-1"></div>

      <UserWidget />

      <SmallButton
        label="Login"
        severity="contrast"
        className="float-end"
        onClick={initLogin}
      />
    </div>
  );
}

function UserWidget() {
  const { user, login, logout } = useUserProfile();

  return (
    <>
      {user ? (
        <span onClick={logout}>Hello {user.display_name}</span>
      ) : (
        <span onClick={login}>Hello Guest</span>
      )}
    </>
  );
}
