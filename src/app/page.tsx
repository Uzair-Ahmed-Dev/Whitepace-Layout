import Image from "next/image";



export default function Home() {
  return (
    <div>
       <header className=" bg-[#043873] w-[1920px] h-[92px] flex  justify-around">
    <div className="flex justfiy-center items-center  ">
    <Image
    src="/Logo.png"
    alt="Logo"
    width="191"
    height="34"
    />
    </div>

    <div className="flex  justify-between items-center w-[737.5px] h-[60px] my-5 font-sans">
       
            <ul className="flex justify-around text-white  font-medium text-sm leading-6 w-[549px] h-[23px] ">
                <li><a href="">Products</a></li>
                <li><a href="">Solutions</a></li>
                <li><a href="">Resources</a></li>
                <li><a href="">Pricing</a></li>
               
            </ul>
            <div className="  w-[126px] h-[60px] bg-[#FFE492] py-[16px] px-[40px] rounded-lg  font-medium text-sm leading-6  ">
            <button>Login</button>
        </div>
       
    </div>

</header>

{/* hero section */}
<section className="flex justify-center items-center w-[1920px] bg-[#043873]  ">
        <div className="w-[656px] h-[361px]  text-white">
            <h2 className="w-[656px] h-[154px] font-sans font-[700] text-[64px] ">Get More Done With Whitepace</h2>
            <p className="w-[656px] h-[60px] font-sans font-small text-[18px] leading-7 my-10 ">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasts </p>
            <button className=" w-[189px] h-[63px] rounded-md p- bg-[#2F9CF9] font-mono  ">Try Whitepace free → </button>
        </div>
        <div className="w-[824px] h-[549px] bg-[#C4DEFD]  my-[140px] "> 
            
        </div>
    </section>

   {/* footer section */}

   <footer className="bg-[#043873] my-10 w-[1920px] h-[461px]   ">
    <section className='flex pt-[140px] pr-[220px] pb-[32px] pl-[220px] h-full gap-[200px]'>
    <div className=" w-[295px] h-[169px] ">

    < Image
        src="/Logo.png"
        alt="Logo"
        width="191"
        height="34"
        />
    
        <p className=" w-[240px] h-[120px] font-sans font-small text-sm my-2 leading-6 text-white ">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
        </div> 

        <div className=" w-[295px] h-[169px]  ">
        
        <p className=" w-[91px] h-[22px] font-sans font-[700] text-sm  leading-[5px] text-white ">Product</p>
        <p className="w-[33px] h-[20px] font-sans font-[400] text-sm  my-2 text-white ">Overview</p>
        <p className="w-[128px] h-[20px] font-sans font-[400] text-sm my-2 text-white ">Pricing</p>
        <p className=" w-[130px] h-[20px] font-sans font-[400] text-sm   text-white ">Customer stories</p>
        </div>

        <div className=" w-[295px] h-[169px]  ">
        
        <p className=" w-[91px] h-[22px] font-sans font-[700] text-sm  leading-[5px] text-white ">Resources</p>
        <p className="w-[33px] h-[20px] font-sans font-[400] text-sm  my-2 text-white ">Blog</p>
        <p className="w-[128px] h-[20px] font-sans font-[400] text-sm my-2 text-white ">Guides & tutorials</p>
        <p className=" w-[130px] h-[20px] font-sans font-[400] text-sm   text-white ">Help center</p>
        </div>

        <div className=" w-[295px] h-[169px]  ">
        
        <p className=" w-[91px] h-[22px] font-sans font-[700] text-sm  leading-[5px] text-white ">Company</p>
        <p className="w-[66px] h-[20px] font-sans font-[400] text-sm  my-2 text-white ">About us</p>
        <p className="w-[128px] h-[20px] font-sans font-[400] text-sm my-2 text-white ">Careers</p>
        <p className=" w-[130px] h-[20px] font-sans font-[400] text-sm   text-white ">Media kit</p>
        </div>

    </section>
   </footer>
    </div>
  );
}
