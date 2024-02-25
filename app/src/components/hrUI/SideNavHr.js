import { Link, useParams } from "react-router-dom";
const SideNavHr = () => {
  const {hrId} = useParams()
  return (
    <div>
 {/* Main Sidebar Container */}
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="index3.html" className="brand-link">
    
    <span className="brand-text font-weight-light" style={{ marginLeft: "70px"}}>HRS</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
       
      </div>
      
    </div>
    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <li className="nav-item">
          <a href="hr_dashboard" className="nav-link active">
            <i className="far fa-circle nav-icon" />
            <p>Dashboard</p>
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-user-circle" />
            <p>
              Profile
             
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
            <Link to={`/hr_profile/${hrId}`} className="nav-link">
          <i className="fas fa-eye nav-icon" />
          View HR Profile
        </Link>
                <i className="fas fa-eye nav-icon" />
                <p>View Profile Details</p>
            </li>

            <li className="nav-item">
            <Link to={`/create_profile/${hrId}`} className="nav-link">
          <i className="fas fa-eye nav-icon" />
          Create HR Profile
        </Link>
            </li>

            <li className="nav-item">
            <Link to={`/Edit_profile/${hrId}`} className="nav-link">
          <i className="fas fa-eye nav-icon" />
          Edit HR Profile
        </Link>
            </li>
          </ul>
        </li>


        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-user-plus" />
            <p>
              <Link to={"/hr/add_employee"}>Onboard Employee</Link>
            </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-user-minus" />
            <p>
              <Link to={"/hr/hr_delete_employee"}>Offboard Employee</Link>
            </p>
          </a>
        </li>




        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-users-cog" />
            <p>
              Managers
            
            </p>
          </a>
      
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-users-cog" />
            <p>
                <Link to={"/hr/view_employees"}>Documents</Link>
            
            </p>
          </a>
      
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-money-check-alt" /> 
            <p>
           
            <Link to={"/hr/staff_education"}>Education</Link>

                          
             
            </p>
          </a>
          
        </li>


        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-building" />
            <p>
              Departments
           
            </p>
          </a>
          
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-money-check-alt" /> 
            <p>
              Payroll
         
            </p>
          </a>
          
        </li>


        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-calendar-check" />
            <p>
              Leave Tracker
             
            </p>
          </a>
      
        </li>


        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-chalkboard-teacher" />
              <p>
               <Link to="/hr/training_page">Training Tracker</Link> 
               
              </p>
            </a>
            
          </li>


       
         
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

      
    </div>
  )
}

export default SideNavHr
