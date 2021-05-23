import Login from "./login/Login"
import Inicio from "./inicio/Inicio"
import Proveedores from "./proveedores/proveedores"
import Ganancias from "./ganacias/Ganancias"
import Perdidas from "./perdidas/Perdidas"
import PersonalTransporte from "./personalTransporte/PersonalTransporte"
import ProductosBodega from "./productosBodega/ProductosBodega"
import ProPtesEntregar from "./proPtesEntregar/ProPtesEntregar"
import ProPtesLlegar from "./proPtesLlegar/ProPtesLlegar"
import Vehiculo from "./vehiculo/Vehiculo"
import Ventas from "./ventas/Ventas"
import Clientes from "./clientes/Clientes"
import ProveedoresEdit from "./proveedores/edit/edit"
import ProveedoresCrear from "./proveedores/add/add"
import ClientesEdit from "./clientes/edit/edit"
import ClientesCrear from "./clientes/add/add"
import GananciasCrear from "./ganacias/add/add"
import GananciasEdit from "./ganacias/edit/edit"
import PerdidasCrear from "./perdidas/add/add"
import PerdidasEdit from "./perdidas/edit/edit"
import ProductosBodegaCrear from "./productosBodega/add/add"
import ProductosBodegaEdit from "./productosBodega/edit/edit"
import VentasCrear from "./ventas/add/add"
import VentasEdit from "./ventas/edit/edit"
import VehiculoCrear from "./ventas/add/add"
import VehiculoEdit from "./ventas/edit/edit"
import PersonalTransporteCrear from "./personalTransporte/add/add"
import PersonalTransporteEdit from "./personalTransporte/edit/edit"
import ProPtesEntregarCrear from "./proPtesEntregar/add/add"
import ProPtesEntregarEdit from "./proPtesEntregar/edit/edit"
import ProPtesLlegarCrear from "./proPtesLlegar/add/add"
import ProPtesLlegarEdit from "./proPtesLlegar/edit/edit"



const Routes = [
    { path:"/", exact: true, component: Login },
    { path:"/inicio", exact: true, component: Inicio },
    { path:"/proveedores", exact: true, component: Proveedores },
    { path:"/ganancias", exact: true, component: Ganancias },
    { path:"/perdidas", exact: true, component: Perdidas },
    { path:"/personalTransporte", exact: true, component: PersonalTransporte },
    { path:"/productosBodega", exact: true, component: ProductosBodega },
    { path:"/proPtesEntregar", exact: true, component: ProPtesEntregar },
    { path:"/proPtesLlegar", exact: true, component: ProPtesLlegar },
    { path:"/vehiculo", exact: true, component: Vehiculo },
    { path:"/clientes", exact: true, component: Clientes },
    { path:"/ventas", exact: true, component: Ventas },
    

    { path:"/proveedores/crear", exact: true, component: ProveedoresCrear},
    { path:"/proveedores/:id", exact: true, component: ProveedoresEdit},
    { path:"/clientes/crear", exact: true, component: ClientesCrear},
    { path:"/clientes/:id", exact: true, component: ClientesEdit},
    { path:"/ganancias/crear", exact: true, component: GananciasCrear},
    { path:"/ganancias/:id", exact: true, component: GananciasEdit},
    { path:"/perdidas/crear", exact: true, component: PerdidasCrear},
    { path:"/perdidas/:id", exact: true, component: PerdidasEdit},
    { path:"/productosBodega/crear", exact: true, component: ProductosBodegaCrear},
    { path:"/productosBodega/:id", exact: true, component: ProductosBodegaEdit},
    { path:"/ventas/crear", exact: true, component: VentasCrear},
    { path:"/ventas/:id", exact: true, component: VentasEdit},
    { path:"/vehiculo/crear", exact: true, component: VehiculoCrear},
    { path:"/vehiculo/:id", exact: true, component: VehiculoEdit},
    { path:"/personalTransporte/crear", exact: true, component: PersonalTransporteCrear},
    { path:"/personalTransporte/:id", exact: true, component: PersonalTransporteEdit},
    { path:"/proPtesEntregar/crear", exact: true, component: ProPtesEntregarCrear},
    { path:"/proPtesEntregar/:id", exact: true, component: ProPtesEntregarEdit},
    { path:"/proPtesLlegar/crear", exact: true, component: ProPtesLlegarCrear},
    { path:"/proPtesLlegar/:id", exact: true, component: ProPtesLlegarEdit},
    
]

export default Routes;