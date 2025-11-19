import React from 'react';

const About = () => {
  return (
    <div>
      <div className='overflow-hidden relative'>
        <img className='w-screen h-220' src="https://maraviyainfotech.com/wrapbootstrap/grabit-html/grabit-html/assets/img/hero-bg/5.jpg" alt="" />
        <div className='text-white absolute top-70 flex flex-col gap-8'>
          <h2 className='text-5xl font-bold px-10'>💃 "Where Elegance Meets <br /> Everyday Style"</h2>
          <p className='w-170 text-center'>At Grabit Fashion, we believe fashion is more than just clothing — it’s a way to express who you are.
            From timeless classics to modern trends, our collections are designed to make you feel confident, comfortable, and effortlessly stylish every day.</p>
        </div>
      </div>
    </div>
  );
};

export default About;