const Footer = () => {
  return (
    <footer className="p-10 bg-primary rounded-t-[28px]">
      <div className="container grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 place-items-top">
        <div className="col">
          <img src="/assets/Logo.png" width={"100px"} height={"100px"} alt="" />
          <h5 className="text-[14px] font-bold text-white">Discover the Latest in Electronics Shop Smart, Live Connected!</h5>
        </div>
        <div className="col">
          <h5 className="text-2xl font-bold text-white">Quick Links</h5>
          <ul className="space-y-2 mt-2">
            <li className="text-lg text-white font-semibold">Home</li>
            <li className="text-lg text-white font-semibold">Contact Us</li>
            <li className="text-lg text-white font-semibold">Login</li>
            <li className="text-lg text-white font-semibold">Register</li>
          </ul>
        </div>
        <div className="col">
          <h5 className="text-2xl font-bold text-white">Categories</h5>
          <ul className="space-y-2 mt-2">
            <li className="text-lg text-white font-semibold">Laptop</li>
            <li className="text-lg text-white font-semibold">Mobiles</li>
            <li className="text-lg text-white font-semibold">Television</li>
            <li className="text-lg text-white font-semibold">Smart Watch</li>
            <li className="text-lg text-white font-semibold">Tablet</li>
          </ul>
        </div>
        <div className="col">
          <h5 className="text-2xl font-bold text-white">Categories</h5>
          <ul className="space-y-2 mt-2">
            <li className="text-lg text-white font-semibold">Earphone</li>
            <li className="text-lg text-white font-semibold">Camera</li>
            <li className="text-lg text-white font-semibold">Accessory</li>
          </ul>
        </div>
        <div className="col">
          <h5 className="text-2xl font-bold text-white">Call Us</h5>
          <ul className="space-y-2 mt-2">
            <li className="text-lg text-white font-semibold">+(20) 123-456-7890</li>
            <li className="text-lg text-white font-semibold">+(20) 123-456-7890</li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-10 text-white font-bold">© Copyright Techno Bay 2024 All Right Reserved </p>
    </footer>
  )
}

export default Footer