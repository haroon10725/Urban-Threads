import { useParams } from 'react-router-dom';

import fetchData  from '../util/API'

const Overview = () => {
    let { productUUID } = useParams();

    fetchData();

    return (
        <div>HELLO {productUUID}</div>
    );
}


const Body = () => {
    let { productUUID } = useParams();

    return (
        <Overview productUUID={productUUID} />
    )
};


function ProductOverview() {
    let { productUUID } = useParams();

    return (
        <Body productUUID={productUUID} />
    );
}

export default ProductOverview;
