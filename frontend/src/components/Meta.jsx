import { Helmet } from "react-helmet-async"


const Meta = ({title, description, keywords}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To Beauty Store',
  description: 'Get all your beauty needs one stop',
  keywords: 'beauty, cosmetics, makeup'
}
export default Meta
