import { Icon } from "components/common/common.styled";
import { Container, Wrapper } from "components/MovieInfoCard/MovieInfoCard.styled";
import { Poster } from "components/ReviewsInfo/ReviewsInfo.styled";
import { makeImageSrc } from "services/Api";

export const ReviewsCard = ({ item }) => {
    const { content, author_details } = item;
    const { username, avatar_path } = author_details;
    const poster_path = avatar_path.slice(1);
    // console.log('avatar_path', avatar_path);
    // console.log('poster_path', poster_path);
    const url = makeImageSrc(poster_path);
    console.log('url', url);
    return <article>        
        <Wrapper>
            <Container>
                {avatar_path ? <Poster src={poster_path} alt={username} /> : <Icon />}        
                <p>{username}</p> 
            </Container>    
            <p>{content}</p>
        </Wrapper>
    </article>
}