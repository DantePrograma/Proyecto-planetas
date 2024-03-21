interface props {
  clicked: boolean;
  handleClick: () => void;
}

export const MenuMobile: React.FC<props> = ({ clicked, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className={`icon nav-icon-5 ${clicked ? "open" : ""}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
