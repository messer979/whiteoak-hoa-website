/* eslint-disable jsx-a11y/anchor-has-content */

const WhiteOakLink = ({ key, href, description, title }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" key={key} href={href}>
      {title}
    </a>
  )
}

export default WhiteOakLink
