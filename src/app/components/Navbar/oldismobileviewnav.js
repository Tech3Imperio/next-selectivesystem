{isMobileView ? (
    <>
      <div className="flex justify-between  items-center md:px-28 w-full bg-black opacity-85 z-50 ">
        <Link href="/" className="px-2 py-1">
          <Image
            priority
            src={Logo}
            alt="Logo"
            className="h-[5.5rem] w-[10rem] pl-4 pt-2 cursor-pointer transform transition-transform hover:scale-[1.15] duration-700"
          />
        </Link>
        <button
          onClick={toggleSidebar}
          className="p-4 rounded-full text-white text-2xl"
        >
          {isOpen ? (
            <IoClose className="h-14 w-12 pt-2 pr-2" />
          ) : (
            <HiMenuAlt3 className="h-14 w-12 pt-2 pr-2" />
          )}
        </button>
      </div>

      {isOpen ? (
        <motion.div
          {...sidebarAnimationOpen()}
          className="relative top-1 left-0 h-auto w-full opacity-85 text-white lg:h-full z-50"
        >
          <div className="px-4 flex flex-col">
            <div className="flex flex-col ">
              <ul className="flex justify-center flex-col gap-2 xl:gap-12 cursor-pointer">
                <Link
                  onClick={toggleSidebar}
                  href="/"
                  className="p-3 text-xl flex items-center justify-center"
                >
                  Home
                </Link>
                <Link
                  onClick={toggleSidebar}
                  href="/about"
                  className="p-3 text-xl flex items-center justify-center "
                >
                  About Us
                </Link>
                <div
                  onClick={(e) => {
                    e.preventDefault(), toggleProductsDropdown();
                  }}
                  className="flex gap-2 cursor-pointer p-3 text-xl items-center justify-center"
                >
                  Products
                  <MdArrowForwardIos
                    className={`mt-1 transition-transform duration-300 ${
                      rotateProductsIcon ? "rotate-90" : "rotate-0"
                    }`}
                  />
                </div>
              </ul>

              {isProductsDropdownOpen && (
                <motion.div
                  {...dropdownAnimationOpen()}
                  className="relative opacity-85 flex flex-col items-center h-auto gap-4 px-5 w-full cursor-pointer"
                >
                  <ul className="flex flex-col justify-around h-auto w-full">
                    <Link
                      onClick={toggleSidebar}
                      href="/products/aluminium-windows"
                      className="p-2 text-[1.25rem] whitespace-nowrap flex items-center justify-center"
                    >
                      Aluminium Windows
                    </Link>
                    <Link
                      onClick={toggleSidebar}
                      href="/products/door-seals"
                      className="p-2 text-[1.25rem] whitespace-nowrap flex items-center justify-center"
                    >
                      Door Seals
                    </Link>
                    <Link
                      onClick={toggleSidebar}
                      href="/products/glass-railings"
                      className="p-2 text-[1.25rem] whitespace-nowrap flex items-center justify-center"
                    >
                      Glass Railings
                    </Link>
                    <Link
                      onClick={toggleSidebar}
                      href="/products/invisiblegrill"
                      className="p-2 text-[1.25rem] flex items-center justify-center"
                    >
                      Invisible Grill
                    </Link>
                    <Link
                      onClick={toggleSidebar}
                      href="/products/office-partitions"
                      className="p-2 text-[1.25rem] whitespace-nowrap flex items-center justify-center"
                    >
                      Office Partition
                    </Link>
                    <Link
                      onClick={toggleSidebar}
                      href="/products/bathroom-partitions"
                      className="p-2 text-[1.25rem] flex items-center justify-center"
                    >
                      Bathroom Partition
                    </Link>
                    {/* <Link
                      onClick={toggleSidebar}
                      href="/products/ssWireRope"
                      className="p-2 text-[1.25rem] flex items-center justify-center"
                    >
                      Stainless Steel Wire Rope
                    </Link> */}

                    <Link
                      onClick={toggleSidebar}
                      href="/products/queue-manager"
                      className="p-2 text-[1.25rem] flex items-center justify-center"
                    >
                      Queue Manager
                    </Link>
                  </ul>
                </motion.div>
              )}

              {/* <Link
                onClick={toggleSidebar}
                href="/blog"
                className="p-3 text-xl flex items-center justify-center"
              >
                Blog
              </Link> */}
              <Link
                onClick={toggleSidebar}
                href="/contact"
                className="p-3 text-xl flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          {...sidebarAnimationClose()}
          className="fixed top-0 left-0 w-full h-full bg-black text-white"
        ></motion.div>
      )}
    </>
  ) 