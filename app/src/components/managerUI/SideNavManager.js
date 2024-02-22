import React from 'react'

const SideNavManager = () => {
  return (
    <div>
         <div>
 {/* Main Sidebar Container */}
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="index3.html" className="brand-link">
    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">HRS</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">Manager Name</a>
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
          <a href="./manager_dashboard" className="nav-link active">
            <i className="far fa-circle nav-icon" />
            <p>Dashboard</p>
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-user-circle" />
            <p>
              Profile
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/examples/view-profile.html" className="nav-link">
                <i className="fas fa-eye nav-icon" />
                <p>View Profile Details</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/examples/update-profile.html" className="nav-link">
                <i className="fas fa-user-edit nav-icon" />
                <p>Update Profile</p>
              </a>
            </li>
          </ul>
        </li>


        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-users" />
            <p>
              Team
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/examples/employee-details.html" className="nav-link">
                <i className="fas fa-binoculars nav-icon" />
                <p>View Team Members</p>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-money-check-alt" /> 
            <p>
              Payslips
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/examples/employee-salaries.html" className="nav-link">
                <i className="fas fa-list-ol nav-icon" /> 
                <p>View Payslips</p>
              </a>
            </li>
          </ul>
        </li>


        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-calendar-check" />
            <p>
              Leave Tracker
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/examples/approved.html" className="nav-link">
                <i className="fas fa-check-circle nav-icon" />
                <p>Approved</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="manager_pending_leaves" className="nav-link">
                <i className="fas fa-hourglass-half nav-icon" />
                <p>Pending</p>
              </a>
            </li>
          </ul>
        </li>


        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-chalkboard-teacher" />
              <p>
                Training Tracker
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/examples/create-training.html" className="nav-link">
                  <i className="fas fa-plus-circle nav-icon" /> 
                  <p>Create Training</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/upcoming-training.html" className="nav-link">
                  <i className="fas fa-calendar nav-icon" /> 
                  <p>Upcoming Training</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/past-training.html" className="nav-link">
                  <i className="fas fa-history nav-icon" /> 
                  <p>Past Training</p>
                </a>
              </li>
            </ul>
          </li>


        <li className="nav-item">
          <a href="pages/calendar.html" className="nav-link">
            <i className="nav-icon far fa-calendar-alt" />
            <p>
              Calendar
              <span className="badge badge-info right">2</span>
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
      
    </div>
  )
}

export default SideNavManager