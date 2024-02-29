import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl text-justify mt-20'>
            Passionate MERN Stack Developer with a knack for crafting robust, user-centric web applications. As a recent graduate/intern, I bring fresh enthusiasm and a hunger to learn and contribute to dynamic projects. My journey into the world of development began with a fascination for how technology empowers businesses and individuals alike, driving me to specialize in the MERN (MongoDB, Express.js, React.js, Node.js) stack—a powerful toolkit for building scalable, modern web applications.
            </p>
            <br />
            <p className='text-xl text-justify'>Proficient in frontend technologies like React.js, where I excel in crafting intuitive user interfaces that seamlessly translate design into code. Backed by a strong foundation in backend development with Node.js and Express.js, I'm adept at building robust APIs and server-side applications. My understanding of MongoDB enables me to design efficient database schemas, ensuring optimal performance and scalability for applications.</p>
            <br />
            <p className='text-xl text-justify'>Eager to further hone my skills and stay updated with the latest trends and technologies in web development, I am committed to continuous learning and growth. I thrive in collaborative environments where I can leverage my problem-solving skills and creativity to overcome challenges and deliver innovative solutions.</p>
        </div>
    </div>
  )
}

export default About