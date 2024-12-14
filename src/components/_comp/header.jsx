import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import user_profile_placeholder from "../../assets/images/user-placeholder.png";

function Header() {
  return (
    <header className="flex items-center justify-between ">
      <div className="flex items-center">
        <Link to={"/"}>
          <img src={logo} alt="ClipIt Logo" />
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        {/* to do -- conditional check if user is logged in show account badge */}
        <div className="w-10">
          <Link to={"/settings"}>
            <img src={user_profile_placeholder} alt="User image" />
          </Link>
        </div>

        <Link to={"/sign-up"}>Sign Up</Link>

        <Link to={"/sign-in"}>Sign In</Link>
      </div>
    </header>
  );
}

export default Header;
