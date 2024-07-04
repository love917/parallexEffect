
gsap.registerPlugin(ScrollTrigger);  
function smooth(){
    const lenis = new Lenis()

lenis.on('scroll', (e) => {
  //console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)    
}  
smooth()
//////////////////////////////////////
//텍스트 자르기
const text = new SplitType('#title', { types: 'words, chars' })

//////////////////////////////////////
//텍스트 애니
let tl = gsap.timeline();

tl.from(".title .char",{
    opacity:0,
    yPercent:130,
    duration:1,
    stagger:0.06,
    ease:"expo.out"
})
tl.to(".header__img",{
    clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`,
    ease:"expo.out",
    duration:2,
},"-=1")//텍스트가 다 올라오기 전에 실행을 하겠다

//////////////////////////////////////
//각 영역의 제목부분의 사각형 움직임
//바깥에서 변수를 만들고 함수에 집어넣는 방법
let gsapSq = document.querySelectorAll(".section-title__square")
gsapSq.forEach(function(gSq, i){
  let rotate = gsap.from(gSq,{duration:3,rotation:720})//순서대로 받아서 어떤 일을 시키겠다.
  ScrollTrigger.create({
    trigger:gSq,
    start:"top bottom",
    scrub:1.9,
    Animation:rotate
  })
})
//////////////////////////////
//header
function header(){
  gsap.to(".title_paralax",{
   scrollTrigger:{
       trigger:".header",
       start:"top top",
       scrub:1.9
   },
   yPercent:-150
   
  })
  gsap.to(".header .stroke",{
   scrollTrigger:{
       trigger:".header",
       start:"top top",
       scrub:1.9
   },
   yPercent:50
   
  })

  gsap.to(".header__img img",{
   scrollTrigger:{
       trigger:".header",
       start:"top top",
       scrub:1.9
   },
   scale:1.3
   
  })

  gsap.to(".header__marq-wrapp",{
   scrollTrigger:{
       trigger:".header",
       start:"top top",
       scrub:1.9
   },
   xPercent:-50
   
  })
  gsap.to(".header__marq-star",{
   scrollTrigger:{
       trigger:".header",
       start:"top top",
       scrub:1.9
   },
   //rotation:-720
   rotate:-720
   
  })


}
header()

//////////////////////////////
//about
function about(){
   gsap.from(".about__img",{
       scrollTrigger:{
           trigger:".about",
           start:"top bottom",
           scrub:1.9
       },
       yPercent:80
       
      })

      gsap.from(".about__img img",{
       scrollTrigger:{
           trigger:".about",
           start:"top bottom",
           scrub:1.9
       },
      scale:1.6
       
      })

      gsap.to(".about__txt",{
       scrollTrigger:{
           trigger:".about__wrapp",
           start:"top bottom",
           scrub:1.9
       },
       yPercent:50
       
      })
}
about();

//////////////////////////////
//benefits
function benefits(){
    gsap.to(".benefits__num",{
        scrollTrigger:{
            trigger:".benefits__list",
            start:"top bottom",
            scrub:1.9
        },
        /* forEach(각각요소, 인덱스 )=>{} */
        xPercent:100
        
       })
}
benefits()

//
function work(){
    gsap.from(".work__item-num",{
        scrollTrigger:{
            trigger:".work",
            start:"top bottom",
            scrub:1.9
        },
        //y:(index번호, item을 하나씩 가져오는 변수 => ()
        y:(i,el)=>(1 - el.getAttribute("data-speed"))
        //index번호를 안쓰더라도 써야 순서가 맞음
    })

    gsap.from(".work__item-img img",{
        scrollTrigger:{
            trigger:".work__item",
            start:"top bottom",
            scrub:1.9
        },
        scale:1.6//from이니까 1.6배였다가 원래 크기로 돌아옴
    })

}
work()

//////////////////////////////
//service
function serv(){
    gsap.from(".serv__item-arrow",{
        scrollTrigger:{
            trigger:".serv__list",//기준
            start:"top bottom",
            scrub:1.9
        },
        x:(i,el)=>(1 - el.getAttribute("data-speed"))
    })
}
serv()

//////////////////////////////
//footer
function footer(){
    gsap.from(".footer__div span",{
        scrollTrigger:{
            trigger:".footer",
            start:"top bottom",
            end:"bottom bottom",
            scrub:1.9
        },
        y:(i,el)=>(1 - el.getAttribute("data-speed"))
    })
}
footer()