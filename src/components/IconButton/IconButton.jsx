function IconButton({logout, src, alt}) {
    return (
        <img onClick={() => logout()} width={24} height={24} src={src} alt={alt} />
    );
}

export default IconButton;