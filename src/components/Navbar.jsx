import plane from "../assets/plane.png"
const Navbar = () => {
  return (
    <nav className="w-full h-20 bg-blue-500 flex justify-evenly ">
        <h2 className="text-3xl uppercase pl-8 pt-6 font-bold text-white tracking-wider">Flight Search</h2>
        <img src={plane} alt="" className="py-2"/>
    </nav>
  )
}

export default Navbar