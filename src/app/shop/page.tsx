import Image from "next/image"
import banner from"../../../Gallery/Rectangle 1.png"
import banner2 from "../../../Gallery/Group 63.png"
import Allpics from"../../../Gallery/Group 83 (1).png"
import image4 from"../../../Gallery/Group 76.png"
export default function shop(){
    return(
    <div className="bg-white overflow-hidden cursor-pointer relative">
     <div className="relative">
    <Image
        src={banner}
        width={1400}
        height={600}
        alt="pic"
    />
    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-black text-4xl font-bold">
        Shop
    </div>
    <div>{"^"} </div>
    
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-black text-1xl font-small">
        Home
    </div>
</div>
  <div className="bg-white overflow-hidden cursor-pointer relative">
  <div className="relative">
 <Image
     src={banner2}
     width={1400}
     height={600}
     alt="pic"
 /></div></div>

 <div className="bg-white overflow-hidden cursor-pointer relative">
  <div className="relative">
 <Image
     src={Allpics}
     width={1400}
     height={600}
     alt="pic"/>
     </div></div>
     <br></br>

<div className="bg-white overflow-hidden cursor-pointer relative">
<div className="relative">
<Image
   src={image4}
   width={1400}
   height={600}
   alt="pic"/>
   </div></div></div>
)}