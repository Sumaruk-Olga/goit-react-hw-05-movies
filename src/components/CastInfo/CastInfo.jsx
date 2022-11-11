import { AdditionalInfoTitle } from "components/common/common.styled";
import Gallery from "components/Gallery/Gallery";
// import { List } from "components/Gallery/Gallery.styled";

export const CastInfo = ({ arr }) => {
    console.log('CastInfo', arr);
    return <section>
        <AdditionalInfoTitle> info title</AdditionalInfoTitle>
        <Gallery arr={arr} use="cast"/>
    </section>
};