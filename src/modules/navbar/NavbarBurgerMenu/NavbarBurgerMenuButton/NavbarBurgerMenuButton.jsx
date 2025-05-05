import * as motion from "motion/react-client";

const NavbarBurgerMenuButton = ({
  isOpen,
  toggleOpen,
                                }) => {
  return (
    <button
      aria-label="open menu button"
      type="button"
      onClick={toggleOpen}
      className="cursor-pointer group relative w-[13px] xl:w-[27px] h-[10px] xl:h-[24px] outline-none "
    >
      <div className="w-full h-full relative">
        {/* Верхня лінія */}
        <motion.span
          className="absolute w-full h-[3px] rounded-md"
          initial={{
            // top: "2px",
            left: "0",
            opacity: 1,
            backgroundColor: "currentColor",
          }}
          animate={
            isOpen
              ? {
                top: "11px", // Переміщаємо в центр
                left: "0",
                opacity: 0,
                backgroundColor: "currentColor", // Чорний, коли меню відкрите
              }
              : {
                top: "2px", // Повертаємо на початкове місце
                left: "0",
                opacity: 1,
                backgroundColor: "currentColor", // Білий, коли меню закрите
              }
          }
          transition={{ duration: 0.4, ease: "easeOut" }} // Плавний перехід
        />

        {/* Середня лінія */}
        <motion.span
          className="absolute w-full h-[3px] rounded-md"
          initial={{
            top: "11px",
            left: "0",
            backgroundColor: "currentColor",
          }}
          animate={
            isOpen
              ? { rotate: "45deg", backgroundColor: "currentColor" } // Обертання при відкритому меню
              : { rotate: "0deg", backgroundColor: "currentColor" } // Повертаємо назад
          }
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        {/* Нижня лінія */}
        <motion.span
          className="absolute w-full h-[3px] rounded-md"
          initial={{
            top: "20px",
            left: "0",
            backgroundColor: "currentColor",
          }}
          animate={
            isOpen
              ? {
                rotate: "-45deg",
                top: "11px",
                backgroundColor: "currentColor",
              } // Обертання і переміщення при відкритому меню
              : {
                rotate: "0deg",
                top: "20px",
                backgroundColor: "currentColor",
              } // Повертаємо назад
          }
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </button>
  )
}

export default NavbarBurgerMenuButton;
