import { Link } from 'react-router-dom'

function AddRoute() {
  return (
    <div>
      <Link to={"/route"}><button>Click for Route</button></Link>
    </div>
  )
}

export default AddRoute
