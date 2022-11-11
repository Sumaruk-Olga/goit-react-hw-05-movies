
import { Icon } from "components/CastInfo/CastInfo.styled";
import { Container, Poster } from "components/MovieInfoCard/MovieInfoCard.styled"
import { makeImageSrc } from "services/Api";

export const CastCard = ({ item }) => {
    const poster_path = item.profile_path;
    const url = makeImageSrc(poster_path);
    return <Container>
        {poster_path ? <Poster alt={item.name} src={url} /> : <Icon/>}            
        <p>{item.name}</p>
        </Container>
}