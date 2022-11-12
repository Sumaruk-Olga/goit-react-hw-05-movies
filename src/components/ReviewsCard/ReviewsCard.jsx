import PropTypes from 'prop-types';
import { Icon } from "components/common/common.styled";
import { Container, Wrapper } from "components/MovieInfoCard/MovieInfoCard.styled";
import { Poster } from "components/ReviewsInfo/ReviewsInfo.styled";
import { makeImageSrc } from "services/Api";
import { ReviewItem } from './ReviewsCard.styled';

export const ReviewsCard = ({ item }) => {
    const { content, author_details } = item;
    const { username, avatar_path } = author_details;
    let url;
    const crazyPath = avatar_path.startsWith('/http');
    if(crazyPath){
        url = avatar_path.slice(1);
    } else {
        const poster_path = avatar_path;
        url = makeImageSrc(poster_path);
    }
    
    return <ReviewItem>        
        <Wrapper>
            <Container>
                {avatar_path ? <Poster src={url} alt={username} /> : <Icon />}        
                <p>{username}</p> 
            </Container>    
            <p>{content}</p>
        </Wrapper>
    </ReviewItem>
}

ReviewsCard.propTypes = {
    item: PropTypes.shape({
        author_details: PropTypes.shape({
            username: PropTypes.string.isRequired,
            avatar_path:PropTypes.string.isRequired,
        }).isRequired,
        content: PropTypes.string.isRequired,
    }).isRequired,
}