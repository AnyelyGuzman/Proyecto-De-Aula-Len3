import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:4000'
})

http.interceptors.response.use(null, error => {
  const expectedError = error.response && error.response.status >= 400 && error.response.status < 500
  if (!expectedError) {
    return Promise.reject(error)
  }
})

const Api = {

  //Proveedores
  async getProveedores() {
    try {
      return await http.get('/proveedores_admin')
    } catch (error) {
      console.error(error)
    }
  },

  async getProveedoresId(id) {
    try {
      return await http.get('/proveedores_admin/' + id)
    } catch (error) {
      console.error(error)
    }
  },
  async editarProveedor(obj) {
    try {
      return await http.put('/proveedores_admin', obj)
    } catch (error) {
      console.error(error)
    }
  },

  async crearProveedor(obj) {
    try {
      return await http.post('/proveedores_admin', obj)
    } catch (error) {
      console.error(error)
    }
  },
  async eliminarProveedor(id) {
    try {
      return await http.delete('/proveedores_admin/' + id)
    } catch (error) {
      console.error(error)
    }
  },

  //Clientes
  async getclientes() {
    try {
      return await http.get('/clientes_admin')
    } catch (error) {
      console.error(error)
    }
  },

  async getClientesId(id) {
    try {
      return await http.get('/clientes_admin/' + id)
    } catch (error) {
      console.error(error)
    }
  },
  async editarCliente(obj) {
    try {
      return await http.put('/clientes_admin', obj)
    } catch (error) {
      console.error(error)
    }
  },

  async crearCliente(obj) {
    try {
      return await http.post('/clientes_admin', obj)
    } catch (error) {
      console.error(error)
    }
  },
  async eliminarCliente(id) {
    try {
      return await http.delete('/clientes_admin/' + id)
    } catch (error) {
      console.error(error)
    }
  },

  //Ganancias

  async getGanancias() {
    try {
      return await http.get('/ganancias_admin')
    } catch (error) {
      console.error(error)
    }
  },

  async getGananciaId(id) {
    try {
      return await http.get('/ganancias_admin/' + id)
    } catch (error) {
      console.error(error)
    }
  },
  async editarGanancia(obj) {
    try {
      return await http.put('/ganancias_admin', obj)
    } catch (error) {
      console.error(error)
    }
  },

  async crearGanancia(obj) {
    try {
      return await http.post('/ganancias_admin', obj)
    } catch (error) {
      console.error(error)
    }
  },
  async eliminarGanancia(id) {
    try {
      return await http.delete('/ganancias_admin/' + id)
    } catch (error) {
      console.error(error)
    }
  },

  async getGananciasReportes() {
    try {
      return await http.get('/ganancias_admin/reporte')
    } catch (error) {
      console.error(error)
    }
  },
  //Perdidas

  async getPerdidas() {
    try {
      return await http.get('/perdidas_admin')
    } catch (error) {
      console.error(error)
    }
  },

  async getPerdidasId(id) {
    try {
      return await http.get('/perdidas_admin/' + id)
    } catch (error) {
      console.error(error)
    }
  },
  async editarPerdida(obj) {
    try {
      return await http.put('/perdidas_admin', obj)
    } catch (error) {
      console.error(error)
    }
  },

  async crearPerdida(obj) {
    try {
      return await http.post('/perdidas_admin', obj)
    } catch (error) {
      console.error(error)
    }
  },
  async eliminarPerdida(id) {
    try {
      return await http.delete('/perdidas_admin/' + id)
    } catch (error) {
      console.error(error)
    }
  },

  async getPerdidasReportes() {
    try {
      return await http.get('/perdidas_admin/reporte')
    } catch (error) {
      console.error(error)
    }
  },
  //Personal Transporte

  async getPersonalTpe() {
    try {
      return await http.get('/personal_transportador_admin')
    } catch (error) {
      console.error(error)
    }
  },

  async getPersonalTpeId(id) {
    try {
      return await http.get('/personal_transportador_admin/' + id)
    } catch (error) {
      console.error(error)
    }
  },
  async editarPersonalTpe(obj) {
    try {
      return await http.put('/personal_transportador_admin', obj)
    } catch (error) {
      console.error(error)
    }
  },

  async crearPersonalTpe(obj) {
    try {
      return await http.post('/personal_transportador_admin', obj)
    } catch (error) {
      console.error(error)
    }
  },
  async eliminarPersonalTpe(id) {
    try {
      return await http.delete('/personal_transportador_admin/' + id)
    } catch (error) {
      console.error(error)
    }
  },
  //Productos Bodega

  async getProductosB() {
    try {
      return await http.get('/productos_bodega_admin')
    } catch (error) {
      console.error(error)
    }
  },

  async getProductosBId(id) {
    try {
      return await http.get('/productos_bodega_admin/' + id)
    } catch (error) {
      console.error(error)
    }
  },
  async editarProductosB(obj) {
    try {
      return await http.put('/productos_bodega_admin', obj)
    } catch (error) {
      console.error(error)
    }
  },

  async crearProductosB(obj) {
    try {
      return await http.post('/productos_bodega_admin', obj)
    } catch (error) {
      console.error(error)
    }
  },
  async eliminarProductosB(id) {
    try {
      return await http.delete('/productos_bodega_admin/' + id)
    } catch (error) {
      console.error(error)
    }
  },
  //Productos Pendientes Entregar

  async getProPteEnt() {
    try {
      return await http.get('/pro_ptes_entregar_admin')
    } catch (error) {
      console.error(error)
    }
  },

  async getProPteEntId(id) {
    try {
      return await http.get('/pro_ptes_entregar_admin/' + id)
    } catch (error) {
      console.error(error)
    }
  },
  async editarProPteEnt(obj) {
    try {
      return await http.put('/pro_ptes_entregar_admin', obj)
    } catch (error) {
      console.error(error)
    }
  },

  async crearProPteEnt(obj) {
    try {
      return await http.post('/pro_ptes_entregar_admin', obj)
    } catch (error) {
      console.error(error)
    }
  },
  async eliminarProPteEnt(id) {
    try {
      return await http.delete('/pro_ptes_entregar_admin/' + id)
    } catch (error) {
      console.error(error)
    }
  },
//Productos Pendientes Llegar

async getProPteLle() {
  try {
    return await http.get('/pro_ptes_llegar_admin')
  } catch (error) {
    console.error(error)
  }
},

async getProPteLleId(id) {
  try {
    return await http.get('/pro_ptes_llegar_admin/' + id)
  } catch (error) {
    console.error(error)
  }
},
async editarProPteLle(obj) {
  try {
    return await http.put('/pro_ptes_llegar_admin', obj)
  } catch (error) {
    console.error(error)
  }
},

async crearProPteLlet(obj) {
  try {
    return await http.post('/pro_ptes_llegar_admin', obj)
  } catch (error) {
    console.error(error)
  }
},
async eliminarProPteLle(id) {
  try {
    return await http.delete('/pro_ptes_llegar_admin/' + id)
  } catch (error) {
    console.error(error)
  }
},
//Ventas

async getVentas() {
  try {
    return await http.get('/ventas_admin')
  } catch (error) {
    console.error(error)
  }
},

async getVentasId(id) {
  try {
    return await http.get('/ventas_admin/' + id)
  } catch (error) {
    console.error(error)
  }
},
async editarVentas(obj) {
  try {
    return await http.put('/ventas_admin', obj)
  } catch (error) {
    console.error(error)
  }
},

async crearVentas(obj) {
  try {
    return await http.post('/ventas_admin', obj)
  } catch (error) {
    console.error(error)
  }
},
async eliminarVentas(id) {
  try {
    return await http.delete('/ventas_admin/' + id)
  } catch (error) {
    console.error(error)
  }
},
async getVentasReportes() {
  try {
    return await http.get('/ventas_admin/reporte')
  } catch (error) {
    console.error(error)
  }
},

//Vehiculos

async getVehiculo() {
  try {
    return await http.get('/vehiculo_admin')
  } catch (error) {
    console.error(error)
  }
},

async getVehiculoId(id) {
  try {
    return await http.get('/vehiculo_admin/' + id)
  } catch (error) {
    console.error(error)
  }
},
async editarVehiculo(obj) {
  try {
    return await http.put('/vehiculo_admin', obj)
  } catch (error) {
    console.error(error)
  }
},

async crearVehiculo(obj) {
  try {
    return await http.post('/vehiculo_admin', obj)
  } catch (error) {
    console.error(error)
  }
},
async eliminarVehiculo(id) {
  try {
    return await http.delete('/vehiculo_admin/' + id)
  } catch (error) {
    console.error(error)
  }
},




  



}

export default Api