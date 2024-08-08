import heroImg from '../assets/images/hero.svg';

function Hero() {
  return (
    <div className="flex flex-row items-center px-[10rem] justify-around">
      <div className="text-textColor">
        <h1 className="text-6xl">Feeling a bit lost? </h1>
        <h1 className="text-4xl mt-3">Seek Expert Advice</h1>
        <h1 className="text-4xl">and Advance Your Career?</h1>
      </div>
      <img src={heroImg} className="w-[40rem]" alt="" />
    </div>
  );
}

export default Hero;
