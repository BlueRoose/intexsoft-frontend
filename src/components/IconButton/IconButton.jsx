function IconButton({ src, alt, onClick, id }) {
  return <img onClick={() => onClick(id)} width={24} height={24} src={src} alt={alt} />;
}

export default IconButton;
