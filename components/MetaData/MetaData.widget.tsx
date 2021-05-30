import Head from 'next/head';

import {MetaDataProps} from "./MetaData";
import {defaultDescription} from "./MetaData.values";

export const MetaData:React.FC<MetaDataProps> = ({title, description=defaultDescription}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
    );
};