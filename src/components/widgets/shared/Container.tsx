type Props = {
  children: React.ReactNode;
  id: string;
  className?: string;
};
const Container = ({ children, id, className }: Props) => {
  return (
    <div className={`container ${className}`} id={id}>
      {children}
    </div>
  );
};

export default Container;
