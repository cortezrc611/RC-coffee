export default function About(){

    return (
   <section>
   <div className="about-container flex flex-row gap-16 justify-center p-24 bg-[#9B6138]">
    <div className="about-text font-sans italic">
   <h1 className="font-bold text-center text-[#F6E7C7]">ABOUT US</h1>
   <p className=" font-light text-[#F6E7C7]">Welcome to RC Cafe, your cozy neighborhood coffee shop dedicated to crafting the perfect cup. We source our beans from sustainable farms around the world, ensuring every sip is rich, fresh, and full of flavor. Whether you're here for a quick pick-me-up or to relax with friends, our inviting space and passionate baristas are ready to make your coffee experience unforgettable. Come for the coffee, stay for the community!</p>
    </div>
    <img src="./images/aboutimage.jpg" alt="about" />
   </div>

   </section>

    )
}