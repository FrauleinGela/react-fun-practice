export const CoreConcept = ({
  concept,
}: {
  concept: { title: string; description: string; image: string };
}) => {
  const { title, description, image: imageSrc } = concept;
  return (
    <li>
      <img src={imageSrc} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};
