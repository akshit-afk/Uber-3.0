import Image from 'next/image';
import avatar from '/temp/image.png'
import logo from '/temp/logo.jpg'
import {BsPerson} from 'react-icons/bs'
const style  = {
    wrapper: `h-16 w-full bg-black text-white flex md:justify-around items-center fixed px-60 z-20`,
    logoImg:`mr-8`,
    leftMenu:`flex gap-3`,
    logo: `text-3xl text-white flex mr-16 cursor-pointer`,
    menuItem: `text-lg text-white font-medium flex items-center cursor-pointer mx-4`,
    rightMenu: `flex gap-3 items-center`,
    imageContainer: `flex items-center mr-2`,
    userImg: `border-2 border-white rounded-full cursor-pointer object-cover`,
    loginButton: `flex items-center cursor-pointer rounded-full border-2 border-black hover:bg-[#333333] hover:border-2 hover:border-[#333333] transition ease-in-out duration-300  px-4 py-1`,
    loginText: `ml-2`,

}
const currentAccount = ''
const img = 'https://icon-library.com/images/user-icon-jpg/user-icon-jpg-22.jpg';
const Navbar = () => {
  return  <div className={style.wrapper}>
           <div className={style.leftMenu}>
          
                <div className={style.logo}>Uber</div>
                <div className={style.menuItem}>Ride</div>
                <div className={style.menuItem}>Drive</div>
                <div className={style.menuItem}>More</div>
         </div>
         <div className={style.rightMenu}>
                <div className={style.menuItem}>Help</div>
                {currentAccount ? ( <>
                  <div className={style.menuItem}>Akshit</div>
                <div className={style.imageContainer}>
                    <Image src={avatar} width={35} height={35} alt="UserImg" className={style.userImg}/>
                    </div> 
               <div>{currentAccount.slice(0,6)}...{currentAccount.slice(39)}</div>
               </>) : (
                 <div className={style.loginButton }>
                   <BsPerson />
                   <span className={style.loginText}>Log in</span>
                 </div>
               ) }
               
         </div>
  </div>
  
}

export default Navbar