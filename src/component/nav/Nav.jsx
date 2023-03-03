import {Link , NavLink} from 'react-router-dom'
function Nav() {
    return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//   <div className="container">
//     <Link className="navbar-brand" to='/'> Where are Your Country</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//         <li className='nav-item'> <NavLink to='/search-country' className='nav-link' >Search Country </NavLink>  </li>        
//       </ul>
//     </div>
//   </div>
// </nav>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <ul className="list-unstyled">
         <li className='nav-item'> <NavLink to='/' className='nav-link' >Where are Your Country?</NavLink>  </li>        
         <li className='nav-item'> <NavLink to='/search-country' className='nav-link' >Search Country </NavLink>  </li>        
                </ul>
            </div>
        </nav>


      );
}

export default Nav;