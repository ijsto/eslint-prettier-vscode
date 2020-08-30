export const About = () => {
  return (
    <div>
      
      
      
      
      <h1        style={{marginTop: 64}}>About Page</h1>

      <p>
        Interested in learning more about what is Next.js?{" "}
        <a
          href="https://ijs.to/p/what-is-next.js" 
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out this post
        </a>
      </p>
      <p>
        A proper ESLint + Prettier setup will save you tonnes of time coding{" "}
        <a
          href="https://ijs.to" 
          target="_blank"
          rel="noopener noreferrer"
        >
          learn more about this setup here.
        </a>{" "}

      </p>
     


      <h2>Happy coding!</h2>
      <style jsx>{`
        * {
          line-height: 1.5;
        }
        code {
          padding: 0.2em 0.4em;
          margin: 0;
          font-size: 85%;
          background-color: rgba(27, 31, 35, 0.05);
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
};

export default About;
