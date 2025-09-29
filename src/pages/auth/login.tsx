import { IoPersonOutline, IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router";
import { PageTransition } from "../../components/ui/Animation";

export const Login = () => {
  return (
    <div className="relative w-screen h-screen flex justify-center items-center">
      <PageTransition className="flex flex-col w-1/3">
        <form className="flex flex-col gap-4">
          <div className="flex justify-center">
            <div className="p-8 text-4 text-theme-1 bg-theme-3 border-8 border-theme-1 rounded-full"><IoPersonOutline /></div>
          </div>
          <label>
            <div>Email</div>
            <input type="text" className="border-2 border-theme-1 p-2 w-full rounded-md" />
          </label>
          <label>
            <div>Password</div>
            <input type="password" className="border-2 border-theme-1 p-2 w-full rounded-md" />
            <Link to={"/login"}>Forgot password?</Link>
          </label>
          <div className="flex flex-col **:w-full gap-2 py-2">
            <button className="p-3 bg-theme-3 text-white font-medium rounded-md cursor-pointer">
              LOGIN
            </button>
            <div className="w-full">Don't have an account? <Link to={"/register"} className="text-theme-3">Sign Up</Link></div>
          </div>
        </form>
      </PageTransition>
      <Link to={"/"} className="absolute flex items-center gap-2 top-10 left-10 group cursor-pointer">
        <div className="text-2 group-hover:text-theme-3 duration-200"><IoArrowBackOutline /></div>
        <div className="font-bold group-hover:text-theme-3 duration-200">Back</div>
      </Link>
    </div>
  );
}