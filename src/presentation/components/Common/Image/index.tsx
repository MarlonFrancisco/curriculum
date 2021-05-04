const Image = ({ ...rest }: React.ImgHTMLAttributes<{}>) => {
  return <img loading="lazy" {...rest} />;
};

export default Image;
