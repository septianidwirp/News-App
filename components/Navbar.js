export default function Navbar() {
  return (
    <header className="sticky z-[9999] top-0 h-[73px] border-b border-neutral-200 bg-white">
      <div className="mx-auto flex flex-col max-w-[1440px] py-24 px-5 lg:px-20 h-full !py-0">
        <div className="relative flex items-center gap-2 h-full">
          <button className="shrink-0 block lg:hidden p-2 btn-menu-mobile">
            <img
              className="w-6 h-6 menu-icon"
              src="https://bonitasprei.id/assets/images/menu.svg"
              alt="menu"
            />
            <img
              className="w-6 h-6 hidden close-icon"
              src="https://aframawandani.github.io/bonita-dev/assets/images/x.svg"
              alt="close"
            />
          </button>
          <a className="shrink-0 mx-auto lg:mx-0" href="https://bonitasprei.id/">
            <img
              className="w-[121px] h-10 object-cover"
              src="https://bonitasprei.id/assets/img/4b4c8-logo-bonita.png"
              alt="Logo Bonita"
            />
          </a>
          <nav className="hidden menu lg:block fixed lg:static top-[72px] left-0 right-0 mr-auto bg-white overflow-auto pb-[100px] lg:pb-0">
            <ul className="flex flex-col lg:flex-row items-stetch justify-start shrink-0 text-sm text-neutral-800">
              <li>
                <a className="block px-10 lg:px-3 py-6 font-semibold text-nowrap" href="https://bonitasprei.id/">
                  Beranda
                </a>
              </li>
              <li>
                <a className="block px-10 lg:px-3 py-6 font-semibold text-nowrap" href="https://bonitasprei.id/about">
                  Tentang Kami
                </a>
              </li>
              <li className="group">
                <a href="#" className="flex items-center gap-1 px-10 lg:px-3 py-6 font-semibold text-nowrap">
                  Brand Kami <span className="iconamoon--arrow-down-2-duotone hidden lg:block" />
                </a>
                <ul className="relative lg:absolute w-[200px] bg-white pl-14 lg:p-3 transition-all lg:rounded-lg lg:drop-shadow-lg mt-2 lg:invisible lg:opacity-0 group-hover:visible group-hover:opacity-100">
                  <li className="mb-2">
                    <a target="_blank" rel="noopener noreferrer" href="https://bonitasprei.id">
                      Bonita
                    </a>
                  </li>
                  <li className="mb-2">
                    <a target="_blank" rel="noopener noreferrer" href="https://vionasprei.id">
                      Viona
                    </a>
                  </li>
                </ul>
              </li>
              <li className="group">
                <a href="#" className="flex items-center gap-1 px-10 lg:px-3 py-6 font-semibold text-nowrap">
                  Kategori Produk <span className="iconamoon--arrow-down-2-duotone hidden lg:block" />
                </a>
                <ul className="relative lg:absolute w-[200px] bg-white pl-14 lg:p-3 transition-all lg:rounded-lg lg:drop-shadow-lg mt-2 lg:invisible lg:opacity-0 group-hover:visible group-hover:opacity-100">
                  {[
                    { name: "Bedcover Flat", href: "bedcover-flat" },
                    { name: "Sprei Flat King/Queen", href: "sprei-flat-king-queen" },
                    { name: "Sprei Rumbai", href: "sprei-rumbai" },
                    { name: "Bedcover Rumbai", href: "bedcover-rumbai" },
                    { name: "Sprei Single", href: "sprei-single" },
                    { name: "Sprei Emboss", href: "sprei-emboss" },
                    { name: "Eksklusif 19mm", href: "eksklusif-19mm" },
                  ].map(({ name, href }) => (
                    <li className="mb-2" key={href}>
                      <a href={`https://bonitasprei.id/product?type=${href}`}>{name}</a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="group">
                <a href="#" className="flex items-center gap-1 px-10 lg:px-3 py-6 font-semibold text-nowrap">
                  Katalog Produk <span className="iconamoon--arrow-down-2-duotone hidden lg:block" />
                </a>
                <ul className="relative lg:absolute w-[200px] bg-white pl-14 lg:p-3 transition-all lg:rounded-lg lg:drop-shadow-lg mt-2 lg:invisible lg:opacity-0 group-hover:visible group-hover:opacity-100">
                  <li className="mb-2">
                    <a target="_blank" rel="noopener noreferrer" href="https://katalog.bonitasprei.id/">
                      Bonita
                    </a>
                  </li>
                  <li className="mb-2">
                    <a target="_blank" rel="noopener noreferrer" href="https://katalog.vionasprei.id/">
                      Viona
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="block px-10 lg:px-3 py-6 font-semibold text-nowrap" href="https://bonitasprei.id/partners">
                  Partner Kami
                </a>
              </li>
              <li>
                <a className="block px-10 lg:px-3 py-6 font-semibold text-nowrap" href="https://bonitasprei.id/blog">
                  Artikel
                </a>
              </li>
            </ul>
          </nav>
          <div className="absolute xl:relative hidden xl:!block left-0 top-auto w-full xl:w-auto bg-white form-search">
            <form action="https://bonitasprei.id/product" method="GET">
              <img
                className="hidden xl:block absolute top-2 left-6 w-8 h-8"
                src="https://bonitasprei.id/assets/images/search.svg"
                alt="Search Icon"
              />
              <button className="block xl:hidden absolute top-4 left-6 close-form" type="button">
                <img
                  className="w-5 h-5"
                  src="https://bonitasprei.id/assets/images/arrow-left.svg"
                  alt="Close Search"
                />
              </button>
              <input
                name="search"
                defaultValue=""
                className="rounded-2xl bg-neutral-50 box-border w-full xl:w-[297px] h-12 flex flex-row items-center justify-start py-4 pl-16 pr-6 gap-[8px] border-[1px] border-solid border-neutral-200"
                placeholder="Search"
              />
            </form>
          </div>
          <button className="ml-0 lg:ml-auto shrink-0 block xl:hidden p-2 search-button">
            <img
              className="w-6 h-6"
              src="hhttps://bonitasprei.id/assets/images/search.svg"
              alt="Search Icon"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
