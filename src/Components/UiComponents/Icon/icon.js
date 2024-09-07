export default function Icon({ icon }) {
  return (
    <>
      <a className='' href="#">
        <i className={`icon-${icon} text-2xl hover:text-gray-400`}></i>
      </a>
    </>
  );
}
