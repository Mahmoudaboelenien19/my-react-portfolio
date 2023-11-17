interface Props {
  head: string;
  title: string;
}
const Header = ({ head, title }: Props) => {
  return (
    <h3 className="heading">
      <span className="title">{title}</span>
      {head} .
    </h3>
  );
};

export default Header;
