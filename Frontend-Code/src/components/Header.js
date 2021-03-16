const Header = (props) => {
  return (
    <div className="header">
      <h1>{props.title}</h1>
      {props.subtitle.length > 0 && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: '',
  subtitle: '',
}

export default Header
