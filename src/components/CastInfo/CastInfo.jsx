import PropTypes, { shape } from "prop-types";
import { AdditionalInfoTitle } from "components/common/common.styled";
import Gallery from "components/Gallery/Gallery";


export const CastInfo = ({ arr }) => {    
    return <section>
        <AdditionalInfoTitle> Cast</AdditionalInfoTitle>
        <Gallery arr={arr} use="cast"/>
    </section>
};

CastInfo.propTypes = {
    arr: PropTypes.arrayOf(shape()).isRequired,
}