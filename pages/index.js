export default function index({ success }) {
  console.log(success);
  return "index2";
}
export async function getServerSideProps() {
  const success = await (await fetch(`https://api.themoviedb.org/3/`)).json();

  return {
    props: {
      success,
    },
  };
}
