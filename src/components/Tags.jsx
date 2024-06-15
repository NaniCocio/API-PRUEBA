import Button from 'react-bootstrap/Button';

const Tags = ({href, colorButton, textButton}) =>{
    return (
        <Button href={href} variant={colorButton} className="col-md-12 mx-auto">{textButton}</Button>
    )
}
export default Tags;