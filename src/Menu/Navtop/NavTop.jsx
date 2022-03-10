import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
//services
import switchElements from "../../services/switch_elements";
import paths from "../../services/path";


export default function NavTop() {
  let location = useLocation();
  let currentUrl = location.pathname;

  let {title, subtitle, component} = switchElements[currentUrl];
  console.log("curl: ",currentUrl); 
   return (
      <Fragment>
         <div id="wrapper">
            <nav className="navbar navbar-default top-navbar" role="navigation">
               <div className="navbar-header">
                  <button type="button" className="navbar-toggle waves-effect waves-dark" data-toggle="collapse" data-target=".sidebar-collapse">
                     <span className="sr-only">Toggle navigation</span>
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand waves-effect waves-dark" href="/"> <strong>portobianco</strong></a>

                  <div id="sideNav" href=""><i className="material-icons dp48">toc</i></div>
               </div>

               <ul className="nav navbar-top-links navbar-right">
                  {/* <li><Link className="dropdown-button waves-effect waves-dark" to="#!" data-activates="dropdown4"><i className="fa fa-envelope fa-fw"></i> <i className="material-icons right">arrow_drop_down</i></Link></li>
                  <li><Link className="dropdown-button waves-effect waves-dark" to="#!" data-activates="dropdown3"><i className="fa fa-tasks fa-fw"></i> <i className="material-icons right">arrow_drop_down</i></Link></li>
                  <li><Link className="dropdown-button waves-effect waves-dark" to="#!" data-activates="dropdown2"><i className="fa fa-bell fa-fw"></i> <i className="material-icons right">arrow_drop_down</i></Link></li>
                  <li><Link className="dropdown-button waves-effect waves-dark" to="#!" data-activates="dropdown1"><i className="fa fa-user fa-fw"></i> <b>John Doe</b> <i className="material-icons right">arrow_drop_down</i></Link></li> */}
               </ul>
            </nav>
            <ul id="dropdown1" className="dropdown-content">
               <li><Link to="#"><i className="fa fa-user fa-fw"></i> My Profile</Link>
               </li>
               <li><Link to="#"><i className="fa fa-gear fa-fw"></i> Settings</Link>
               </li>
               <li><Link to="#"><i className="fa fa-sign-out fa-fw"></i> Logout</Link>
               </li>
            </ul>
            <nav className="navbar-default navbar-side" role="navigation">
               <div className="sidebar-collapse">
                  <ul className="nav" id="main-menu">
                     <li>
                        <Link to={paths.FACTURAS} className="active-menu waves-effect waves-dark"><i className="fa fa-book"></i> Facturas</Link>
                     </li>
                     <li>
                        <Link to={paths.CUENTA_CORRIENTE} className="waves-effect waves-dark"><i className="fa fa-bookmark"></i> Cuenta corriente</Link>
                     </li>
                     <li>
                        <Link to={paths.BUSCAR_CLIENTE} className="waves-effect waves-dark"><i className="fa fa-user"></i> Elegir cliente</Link>
                     </li>
                     <li>
                        <Link to="/" className="waves-effect waves-dark"><i className="fa fa-dashboard"></i> Pedidos</Link>
                     </li>
                     <li>
                        <Link to="/" className="waves-effect waves-dark"><i className="fa fa-desktop"></i> Proceso</Link>
                     </li>
                     <li>
                        <Link to="/" className="waves-effect waves-dark"><i className="fa fa-bar-chart-o"></i> Armado</Link>
                     </li>
                     <li>
                        <Link to="/" className="waves-effect waves-dark"><i className="fa fa-bell"></i> Mensajes</Link>
                     </li>
                  </ul>
               </div>
            </nav>
            {/*------*/}
            <div id="page-wrapper">
               <div className="header">
                  <h1 className="page-header">
                     {title}
                  </h1>
                  {/* <ol className="breadcrumb">
                     <li><Link to="#">Home</Link></li>
                     <li><Link to="#">Dashboard</Link></li>
                     <li className="active">Data</li>
                  </ol> */}
               </div>
                       {/*------*/}
            <div id="page-inner">
               <div className="row">
                  <div className="col-md-12">
                     <div className="card">
                        <div className="card-action">
                        {subtitle}
                        {component}
                        </div>
                        <div className="card-content">
                           {/* <div className="table-responsive">
                               <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                 <thead>
                                    <tr>
                                       <th>Rendering engine</th>
                                       <th>Browser</th>
                                       <th>Platform(s)</th>
                                       <th>Engine version</th>
                                       <th>CSS grade</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr className="odd gradeX">
                                       <td>Trident</td>
                                       <td>Internet Explorer 4.0</td>
                                       <td>Win 95+</td>
                                       <td className="center">4</td>
                                       <td className="center">X</td>
                                    </tr>
                                 </tbody>
                              </table> 
                           </div> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
               {/*-----*/}
            </div>
         </div>   
      </Fragment>
   )
} 