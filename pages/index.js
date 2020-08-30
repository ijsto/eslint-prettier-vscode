export default () => (
  <>
    <div>
      <h1 style={{marginTop:64}}>Next.js starter</h1>
      <div style={{marginBottom: 64}}>ESLint + Prettier setup for VS Code</div>

      <a href="https://ijs.to/" target="_blank">
        <p>Learn JavaScript</p>
      </a>
      <ul>
        <li>
          <a href="https://ijs.to/courses/nextjs" target="_blank">
            Next.js
          </a>
        </li>
        <li>
          <a href="https://ijs.to/courses/react" target="_blank">
            React
          </a>
        </li>
        <li>
          <a href="https://ijs.to/courses/graphql" target="_blank">
            GraphQL
          </a>
        </li>
        <li>
          <a href="https://ijs.to/courses/" target="_blank">
            and other courses
          </a>
        </li>
      </ul>
    </div>

    <style jsx>{`
      

      a {
        margin: 1em auto;
      }

      div {
        text-align: center;
      }
      ul {
        margin: 2em;
      }
      li {
        display: inline;
        padding: 1em;
        margin-left: 2em;
      }
    `}</style>
  </>
);
