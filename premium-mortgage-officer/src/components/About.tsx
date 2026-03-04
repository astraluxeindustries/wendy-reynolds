import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-tl-3xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-100 rounded-br-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=988&q=80" 
                alt="Wendy Reynolds" 
                className="rounded-xl shadow-lg w-full object-cover h-[500px]"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              About Wendy Reynolds
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                With more than 15 years of experience in the mortgage industry, Wendy has built a reputation for guiding clients through the home financing process with clarity, care, and precision. She graduated from Brigham Young University with a degree in Accounting and began her career in the accounting field before transitioning into mortgage lending. That background in financial analysis and attention to detail quickly became a strong foundation for her work helping clients secure the right loan for their needs.
              </p>
              <p>
                Today, Wendy serves clients through Intercap Lending in Pleasant Grove. She is known for her ability to put the puzzle pieces of a loan together and create a smooth, organized path from application to closing. Her thoughtful communication and strong work ethic allow her to simplify complex scenarios and anticipate challenges before they arise. Clients appreciate her ability to guide them confidently through the process while keeping everything efficient and well managed.
              </p>
              <p>
                Wendy prides herself on building genuine, long term relationships with the people she works with. She approaches each transaction with professionalism, patience, and a commitment to finding solutions even in challenging situations. She has particular experience working with specialized loan programs and helping clients navigate difficult financing scenarios with confidence.
              </p>
              <p>
                Outside of work, Wendy enjoys spending time with her family and being a proud Mimi to her seven grandbabies, with more on the way. She loves cooking for family gatherings and is especially known for her homemade pizza. When she is not helping clients secure their next home, she also enjoys cycling and spending time outdoors.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">15+</span>
                <span className="text-sm text-slate-500">Years Experience</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">Top 1%</span>
                <span className="text-sm text-slate-500">Originator in UT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
