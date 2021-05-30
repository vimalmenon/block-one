import Head from 'next/head'

import { MetaDataProps } from './MetaData'
import { defaultDescription, titleSufix } from './MetaData.values'

export const MetaData: React.FC<MetaDataProps> = ({ title, description = defaultDescription }) => {
  return (
    <Head>
      <title>
        {title} - {titleSufix}
      </title>
      <meta name="description" content={description} />
    </Head>
  )
}
