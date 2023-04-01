import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="135" cy="138" r="132" />
    <rect x="0" y="287" rx="10" ry="10" width="268" height="24" />
    <rect x="31" y="316" rx="0" ry="0" width="16" height="0" />
    <rect x="9" y="344" rx="0" ry="0" width="12" height="0" />
    <rect x="16" y="348" rx="0" ry="0" width="6" height="1" />
    <rect x="1" y="338" rx="10" ry="10" width="264" height="55" />
    <rect x="3" y="411" rx="10" ry="10" width="98" height="32" />
    <rect x="133" y="405" rx="20" ry="20" width="132" height="44" />
  </ContentLoader>
);

export default Skeleton;
