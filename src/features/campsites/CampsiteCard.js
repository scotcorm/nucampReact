import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
//Exports that are not set as the default will require curly braces.

const CampsiteCard = ({ campsite }) => {
  const { image, name } = campsite;
  return (
    <Card>
      <CardImg width="100%" src={image} alt={name} />
      <CardImgOverlay>
        <CardTitle>{name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};

export default CampsiteCard;
