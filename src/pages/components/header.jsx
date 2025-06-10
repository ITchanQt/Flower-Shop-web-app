import { Menu, Flower2, X } from "lucide-react";

const header = ({ menuOpen, setMenuOpen} ) => {

  return (
    <div className="fixed top-0 left-0 right-0 w-full z-50 bg-white shadow-sm">
      <header className="max-w-[1920px] mx auto">
        <nav className="flex justify-between items-center bg-white h-20">
          <div className="flex pl-3 pt-1">
            <Flower2 size={35} className=" text-[#ff6b9d] font-bold mx-1" />
            <h1 className="text-[#ff6b9d] font-bold font-sans text-3xl">
              Bloom & Petal
            </h1>
          </div>
          <div className="hidden mr-3 md:pr-6 md:block ">
            <ul className="flex md:gap-6 lg:gap-12 font-medium text-[#2c3e50]">
              <li><a href="#">Home</a></li>
              <li><a href="3">Flowers</a></li>
              <li><a href="#">Occation</a></li>
              <li><a href="#">Delivery</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="mr-3 sm:mr-8 md:hidden">
                {menuOpen ? (
                  <Menu
                    size={30}
                    className="text-[#2c3e50] font-bold"
                    onClick={() => setMenuOpen(!menuOpen)}
                  />
                ) : (
                  <X
                    size={30}
                    className="text-[#2c3e50] font-bold"
                    onClick={() => setMenuOpen(!menuOpen)}
                  />
                )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default header;
