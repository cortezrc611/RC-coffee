export default function LandingPage() {
    return (
      <main>
        <div className="beans relative w-full h-screen overflow-hidden">
          <div className="background-image absolute inset-0 bg-cover bg-no-repeat bg-center z-0"></div>
          <div className="coffee-slogan flex items-center flex-row justify-center h-full z-10 text-white italic font-bold text-4xl text-center">
            <div className="slogan">
              <h3>FEEL TIRED?</h3>
              <h1>RELAX... TAKE A</h1>
              <h1>COFFEE BREAK</h1>
            </div>
            <img src="./images/hero-image.png" alt="Hero" className="mt-4" />
          </div>
        </div>
      </main>
    );
  }
  