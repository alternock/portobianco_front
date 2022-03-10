//pages
import Facturas from "../Pages/Facturas";
import CuentaCorriente from "../Pages/CuentaCorriente";
import BuscarCliente from "../Pages/BuscarCliente";
//paths
import paths from "../services/path";


let switchElements = {
    [paths.DASHBOARD]: {
        title: "Dashboard",
        subtitle: "⚡️Eliga una opción del menú derecho de opciones⚡️",
        component: null
    },
    [paths.FACTURAS]: {
        title: "Facturación",
        subtitle: "📋 Buscar factura de cliente",
        component: <Facturas />
    },
    [paths.CUENTA_CORRIENTE]: {
        title: "Cuenta corriente",
        subtitle: "📜 Buscar cuenta corriente",
        component: <CuentaCorriente />
    },
    [paths.BUSCAR_CLIENTE]: {
        title: "Buscar cliente",
        subtitle: "👩🏼‍🚀 Buscar cliente",
        component: <BuscarCliente />
    },
};

export default switchElements;