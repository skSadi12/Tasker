export default function Navbar() {
  return (
    <nav className=" px-9  border-b ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3 px-4">
        
        {/* Logo */}
        <img
          src="/assets/logotasker.png"
          alt="logo"
          className="w-32 sm:w-40 md:w-60 lg:w-72"
        />

        {/* Text */}
        <p className="font-semibold text-lg sm:text-xl md:text-xl lg:text-3xl text-center md:text-right">
          Manage your all tasks
        </p>

      </div>
    </nav>
  );
}