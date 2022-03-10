import React, { Fragment } from "react";


let marginRight = {"margin":"0 0 0 10px"};

export default function BuscarCliente() {
    return (
        <Fragment>
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="icon_prefix" type="text" className="validate" />
                        <label htmlFor="icon_prefix">Ingrese cliente</label>
                    </div>
                    <button className="btn btn-success">
                        <i className="fa fa-search" style={marginRight}></i>
                        buscar
                    </button>
                </div>
            </form>
        </Fragment>
    )
}