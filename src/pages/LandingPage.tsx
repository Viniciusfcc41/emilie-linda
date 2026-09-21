import style from "../styles/landingPage.module.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function LandingPage(){
    const tituloRef = useRef<HTMLDivElement | null>(null)
    const subtituloRef = useRef<HTMLSpanElement | null>(null);
    const gosteRef = useRef<HTMLSpanElement | null>(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        gsap.set([tituloRef.current, subtituloRef.current, gosteRef.current], {
            opacity: 0,
            y: 40
        })

        tl.to(tituloRef.current,
            {
            opacity: 1,
            y: 0,
            ease: "power1.out",
            duration: 1.4
        });

        tl.set([gosteRef,subtituloRef.current], {
            opacity: 1,
        });

        tl.to(subtituloRef.current, {
        duration: 5,
        text: "nossos devs da desgraça da silva corporation™ generarão um pedido de despedida para vossa alteza.",
        ease: "none",
      }, "+=0.3");

      tl.to(gosteRef.current, {
        duration: 5,
        text: "Esperemos que goste :)",
        ease: "none",
      }, "+=0.3");
    })
    return(
        <section className={style.header}>
            <div ref={tituloRef} className={style.teste}>
                <img src="https://www.gigaglitters.com/g/0st9ku14hov.gif" width="463" height="83" alt="Querida Emilie glitter"/>  
            </div>

            <h2>
                <span
                ref={subtituloRef}
                className="block"
              />
            </h2>

            <h2>
                <span
                ref={gosteRef}
                className="block"
              />
            </h2>
        </section>
    )
}//Emilie Corpão Da Silva Silva Mariah Santos Silva