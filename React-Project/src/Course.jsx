import PropTypes from 'prop-types';
import hi from "./assets/hi.jpg"
const Greet = "Welcome TO"






function Course(props){ 

 if (props.show === true) {
    return(
    
    <div className="card">
        <img src={props.img} alt="" />
        <h1>{Greet}</h1>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>{props.ratings}</p>
    </div>
)
 }

}

Course.protoTypes ={
    name: PropTypes.string,
    description: PropTypes.string,
    show:PropTypes.bool
}

Course.defaultProps = {
    img: hi,
    name: "Maarison",
    description:"No Description As of NOw"
}

export default Course