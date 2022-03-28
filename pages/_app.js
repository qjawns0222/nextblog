import Nav from "../components/nav";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <style jsx global>
        {`
          .click {
            color: aqua;
          }
        `}
      </style>
    </>
  );
}
