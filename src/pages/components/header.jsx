import { Menu, Flower2, X } from "lucide-react";

const header = ({ menuOpen, setMenuOpen} ) => {

  return (
    <div>
      <header>
        <nav className="flex justify-between items-center bg-white h-16">
          <div className="flex pl-3">
            <Flower2 size={35} className=" text-[#ff6b9d] font-bold mx-1" />
            <h1 className="text-[#ff6b9d] font-bold font-sans text-3xl">
              Bloom & Petal
            </h1>
          </div>
          <div className="hidden pr-3 md:block">
            <ul className="flex gap-2">
              <li>Home</li>
              <li>Flowers</li>
              <li>Occations</li>
              <li>Delivery</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="pr-3 md:hidden">
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
