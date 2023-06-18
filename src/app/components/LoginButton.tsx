import signInSingleItemProps from "../../../types";

const LoginButton = ({ singleItem }: { singleItem: signInSingleItemProps }) => {
  const colorClassName = `bg-${singleItem.color}`;
  console.log(colorClassName);
  return (
    <a
      href={singleItem.href}
      className={`md:w-1/2 md:mx-auto py-3 border rounded-lg flex items-center justify-center gap-4 px-3 ${colorClassName}`}
    >
      <h1 className="text-2xl ">{singleItem.icon}</h1>
      <h2>{singleItem.title}</h2>
    </a>
  );
};

export default LoginButton;
