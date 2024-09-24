import BestSellerCard from "./bestsellercard";

export default function BestSeller(){
return(
<section>
    <div className="most-offered-text mt-16 text-center italic font-sans">
        <h1 className="font-bold text-[#3D1C05]">MOST ORDERED DRINKS</h1>
        <p className="mx-44">Craving the perfect cup of coffee? Look no further! Our Most Ordered Coffees list features the top picks loved by coffee enthusiasts like you. Whether you're into rich espressos, velvety lattes, or refreshing iced coffees, these bestsellers have earned their spot for a reason!
        Why settle for anything less? Treat yourself to the crowd-favorites that keep our customers coming back for more. Order now and taste the difference!</p>
        </div>

        <div className="cards flex items-center justify-center mt-7 !bg-[#9B6138] mx-24 rounded-3xl">
  <BestSellerCard />
</div>

<div className="most-offered-text text-center italic font-sans py-7">
<h2 className=" font-bold text-[#3D1C05] mb-11">WANT TO LOOK MORE?</h2>
<a href="/" className="!bg-[#9B6138] font-bold text-2xl text-[#F6E7C7] py-2 px-16 rounded-3xl hover:!bg-[#3D1C05] hover:!text-white">VISIT COFFEE PAGE →</a>
</div>
<p className="text-center">This Site is still in Development Process</p>
</section>




)


}