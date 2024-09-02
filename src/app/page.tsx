import Image from "next/image";
import Navigation from "./Component/Navigation/Navigation";
import Aboutme from "./Component/AboutMe/Aboutme";
import Mainskill from "./Component/Skill/mainskill";
import Contactme from "./Component/ContactMe/Contactme";


export default function Home() {

  return (
    <main className="  p-12">
     <section id="Navigation"><Navigation/></section>
     <section id="Aboutme"><Aboutme/></section>
     <section id="Mainskill"><Mainskill/></section>
     <section id="Contactme"><Contactme/></section>


     
    </main>
  );
}
