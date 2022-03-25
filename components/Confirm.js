import RideSelector from "./RideSelector";

const style = {
  wrapper: `flex flex-col h-full flex-1 justify-between`,
  rideSelectorContainer: `h-full flex flex-col `,
  confirmButtonContainer: `border-t-2 cursor-pointer z-10`,
  confirmButton: `bg-black text-white  py-4 text-center text-xl`,
};

const Confirm = () => {
  const storeTripDetails = async () => {};
  return (
    <div className={style.wrapper}>
      <div className={style.rideSelectorContainer}>
        <RideSelector />
      </div>
      <div className={style.confirmButtonContainer}>
        <div className={style.confirmButton} onClick={() => storeTripDetails()}>
          {" "}
          Confirm UberX
        </div>
      </div>
    </div>
  );
};

export default Confirm;
