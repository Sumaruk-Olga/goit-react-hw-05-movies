import PropTypes, { shape } from "prop-types"
import { PageTitle } from "components/common/common.styled";
import { makeImageSrc } from "services/Api";
import { InfoTitle, Poster, InfoData, DataTitle, DataText, Wrapper, Container } from "./MovieInfoCard.styled";

export const MovieInfoCard = ({ movie }) => {
    const { original_title, title, poster_path, release_date, genres, vote_average, vote_count, overview } = movie;
    const url = makeImageSrc(poster_path);
    const genreslist = genres.map(item => item.name).join(', ');
    return <article>
        <PageTitle>{original_title}</PageTitle>
            <Wrapper>
                <Poster alt={title} src={url} />
                <Container>
                    <InfoTitle>release date:
                        <InfoData>{release_date}</InfoData>
                    </InfoTitle>
                    <InfoTitle>genres:
                        <InfoData>{genreslist}</InfoData>
                    </InfoTitle>
                    <InfoTitle>vote average / all vouts:
                        <InfoData>{vote_average}/{vote_count}</InfoData>
                    </InfoTitle> 
                    <DataTitle>overview
                        <DataText>{overview}</DataText>
                    </DataTitle>
                </Container>
        </Wrapper>                
    </article>
};

MovieInfoCard.propTypes = {
    movie: PropTypes.shape({
        original_title: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(shape({
            name: PropTypes.string.isRequired,
        })).isRequired,
        vote_average: PropTypes.number.isRequired,
        vote_count: PropTypes.number.isRequired,
        overview: PropTypes.string.isRequired,

    })
}