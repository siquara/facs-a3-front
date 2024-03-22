import HeroWoman from "/HeroWoman.png";
export function Hero() {
  return (
    <div className="hero h-screen bg-[url('/HeroImage.png')] bg-no-repeat bg-cover flex items-center">
      <div className="grid mx-auto max-w-7xl px-6 lg:gap-8 xl:gap-0 lg:grid-cols-12 items-center justify-center xs400:pt-[8rem] md:pt-[15rem] lg:pt-0">
        <div className="lg:col-span-7 ">
          <h2 className="text-white text-xl">
            Bem-vindo(a) a <strong>Hermes</strong>
          </h2>
          <h1 className="text-white text-4xl lg:text-5xl ">
            Encontre as Ferramentas ideais para você
          </h1>
        </div>
        <div className="lg:col-span-5 place-self-center ">
          <img src={HeroWoman} alt="Woman" className="md:max-w-[85%] lg:max-w-[100%]" />
        </div>
      </div>
    </div>
  );
}
