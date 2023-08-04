export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;

  return (
    <>
      <button
  onClick={() => setMenuOpened(!menuOpened)}
  className={`z-20 fixed top-12 right-12 p-3 bg-indigo-600 w-11 h-11 rounded-md 
    transition-transform duration-300 ease-in-out transform ${
      menuOpened ? "rotate-45 translate-y-0.5" : "rotate-0 translate-y-0"
    }`}
>
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45  translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col
      ${menuOpened ? "w-80" : "w-0"}`}
      >
        <div className="flex-1 flex items-start justify-center flex-col gap-8 mt-10 p-10">

 {/* fix cheesburger emjoi change to rendered cheeseburger img */}

          <MenuButton label="🍔" onClick={() => onSectionChange(0)} />
          <MenuButton label="Hours" onClick={() => onSectionChange(1)} />
          <MenuButton label="Menu" onClick={() => onSectionChange(2)} />
          <MenuButton label="Info" onClick={() => onSectionChange(3)} />
          {/* <h2 className="mt-0 p-0 italic overline decoration-dashed decoration-1 ">NAVIGATION</h2> */}

        </div>

        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="mt-0">

        </div>
        <div className="justify-center text-center pt-2 mb-1">
<a href="http://sirmur.com"  target="_blank" >
<h2 className="p-0 m-0 font-bold text-xl">Order NOW for pickup</h2>
        <MenuButton className="p-0 m-0" label="🍽️" />
        </a>
        </div>
        <div className="justify-center text-center flex items-center flex-col mb-1">
  <p className="text-2xl"></p>
  <h3>895 N Sheridan Ave, Chicago IL</h3>
  
</div>
       <div className="mb-0 pb-5 text-center"> 
        <a href="tel:+12622305182" target="_blank" className="font-bold">
          <h2>+1 (262)-230-5182</h2>
          <MenuButton label="📞" />

        </a>
       </div>
      </div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors"
    >
      {label}
    </button>
  );
};
