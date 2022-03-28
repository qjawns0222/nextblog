export default function popo({ id }) {
  console.log(id);
  return <div>id</div>;
}
export function getServerSideProps({ params: { id } }) {
  return {
    props: {
      id,
    },
  };
}
