// pages/about.js
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <div className="max-w-5xl flex flex-col gap-5 mx-auto p-8 bg-gradient-to-b from-darkblue to-darkblue-light text-white shadow-lg rounded-lg mt-10">
        <h1 className="text-5xl font-bold text-center mb-10">About Me</h1>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
          <p className="text-lg">
            Hello! My name is <span className="font-bold">Yash Dwivedi</span>. I am currently in <span className="font-bold">9th c</span> at <span className="font-bold">The Adhyyan School</span>. I have a passion for <span className="font-bold">Batminton and Programming</span>, and I am excited to share more about myself and my journey with you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Education</h2>
          <p className="text-lg">
            I am a student at <span className="font-bold">The Adhyyan School</span>, where I am currently studying in <span className="font-bold">9th c</span>. My favorite subjects include <span className="font-bold">Maths, Chemistry</span>, and I have a keen interest in <span className="font-bold">Programming</span>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Hobbies and Interests</h2>
          <p className="text-lg">
            In my free time, I enjoy <span className="font-bold">Cricket, Batminton</span>. Some of my favorite activities include <span className="font-bold">Watching Cartoon</span>, and I always look forward to <span className="font-bold">Ben 10</span>. I also have a passion for <span className="font-bold">Coding practises</span>, which allows me to <span className="font-bold">Very Passionately</span>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Projects and Achievements</h2>
          <p className="text-lg">
            I have been involved in several projects, such as <span className="font-bold">Netflix clone, Spotify clone, PasswordManger, Todo-List clone, Twitter clone and GetMeaChai Website</span>. One of my notable achievements includes <span className="font-bold">GetMeaChai Website</span>. These experiences have helped me to <span className="font-bold">learn Html, Css(advanced), Javascipt and Next.js</span>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Future Goals</h2>
          <p className="text-lg">
            Looking ahead, I aspire to <span className="font-bold">become a Senior Programmer</span>. I am particularly interested in <span className="font-bold">Programming Things</span>, and I hope to contribute to <span className="font-bold">Tech Industry and make a Revolution</span>. My aim is to <span className="font-bold">Be the best as soon as possible</span>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="text-lg">
            Feel free to reach out to me at <span className="font-bold">yashthecool20000@gmail.com</span> or connect with me on <span className="font-bold">Whatsapp</span> at <span className="font-bold">@Biggestgamer1st</span>. I am always open to new opportunities and collaborations.
          </p>
        </section>
      </div>
    </>
  );
};

export default About;
export const metadata = {
  title:"About - Get Me a Chai"
}
