import { Link } from "react-router-dom";
import { BsBasket3 } from "react-icons/bs";
import Container from "./Container";

const Header = () => {
  return (
    <header className="shadow">
      <Container>
        <div className="flex justify-between items-center">
          <Link to={"/"} className="text-2xl font-[900] font-mono text-red-500">
            FoodCart
          </Link>
          <div className="flex items-center gap-4">
            <button className="border border-red-500 py-1 px-3 rounded text-red-500 transition hover:bg-red-500 hover:text-white">
              Login
            </button>
            <button className="border bg-red-500 px-3 rounded text-white transition hover:brightness-75">
              Register
            </button>
            <Link
              to={"/cart"}
              className="hover:bg-red-500 hover:bg-opacity-15 rounded-full p-3"
            >
              <BsBasket3 className="text-red-500 text-xl" />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
