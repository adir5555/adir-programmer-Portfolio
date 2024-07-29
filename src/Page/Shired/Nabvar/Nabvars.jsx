import phof from '../../../assets/pdf/wb.png'
import { FaCartPlus } from "react-icons/fa";
import { FiAlignRight } from 'react-icons/fi';
import './Nabvar.css'

const Nabvars = () => {
  const navlink = <>

    <div className="right">
      <a href="#home" className="nav_items">
        Home
      </a>
      <a href="#experience" className="nav_items">
        Experience
      </a>
      <a href="#skills" className="nav_items">
        Skills
      </a>
      <a href="#projects" className="nav_items">
        Projects
      </a>
      <a href="#contact" className="nav_items">
        Contact
      </a>
      <button className="btn ml-32 mr-12 btn-info">
        <FaCartPlus className="text-2xl mr-2"></FaCartPlus>
        <div className="badge badge-secondary">+0</div>
      </button>
    </div>

  </>
  return (
    <div>
      <div className="navbar nav_bar py-4  fixed bg-sky-950 z-10  border-b-4 border-indigo-500">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FiAlignRight className='text-4xl'></FiAlignRight>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-sky-500 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navlink}
            </ul>
          </div>
          <a className="btn ml-12 btn-ghost nav_items text-3xl text-white">Portfolio</a>
          <div tabIndex={0} role="button" className="btn mr-24 btn-ghost btn-circle avatar">
            <div className=" rounded-full">
              <img className=""
                alt=""
                src={phof}
                 />
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-3xl  px-1">
            {navlink}
          </ul>
        </div>

      </div>

    </div>
  );
};

export default Nabvars;