// eslint-disable-next-line react/prop-types
const Button = ({classname, children,onClick}) => {
  return (
    <button className={`btn ${classname}` } onClick={onClick}>{children}</button >
  )
}

export default Button