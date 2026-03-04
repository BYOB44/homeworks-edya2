import { useEffect, useState } from "react";

//Listado simple de paciente
type Paciente = {
  nombre: string;
  cedula: string;
  siguiente: Paciente | null;
};

//Listado doble de historial
type Historial = {
  nombre: string;
  cedula: string;
  anterior: Historial | null;
  siguiente: Historial | null;
};

//Listado circular de medicos
type Medico = {
  nombre: string;
  codigo: string;
  siguiente: Medico | null;
};

//Listado circular doble de comite
type Miembro = {
  nombre: string;
  celular: string;
  anterior: Miembro | null;
  siguiente: Miembro | null;
};

function App() {


  const [cabezaPaciente, setCabezaPaciente] = useState<Paciente | null>(null);
  const [nombrePaciente, setNombrePaciente] = useState("");
  const [cedulaPaciente, setCedulaPaciente] = useState("");

  const agregarPaciente = () => {
    if (!nombrePaciente || !cedulaPaciente) return;

    const nuevo: Paciente = { 
      nombre: nombrePaciente, 
      cedula: cedulaPaciente,
      siguiente: null 
    };

    if (!cabezaPaciente) {
      setCabezaPaciente(nuevo);
    } else {
      let actual = cabezaPaciente;
      while (actual.siguiente) {
        actual = actual.siguiente;
      }
      actual.siguiente = nuevo;
    }

    setNombrePaciente("");
    setCedulaPaciente("");
  };


  const [cabezaHistorial, setCabezaHistorial] = useState<Historial | null>(null);

  const agregarHistorial = (nombre: string, cedula: string) => {
    const nuevo: Historial = {
      nombre,
      cedula,
      anterior: null,
      siguiente: null
    };

    if (!cabezaHistorial) {
      setCabezaHistorial(nuevo);
    } else {
      let actual = cabezaHistorial;
      while (actual.siguiente) {
        actual = actual.siguiente;
      }
      actual.siguiente = nuevo;
      nuevo.anterior = actual;
    }
  };


  const atenderPaciente = () => {
    if (!cabezaPaciente) return;

    const nombre = cabezaPaciente.nombre;
    const cedula = cabezaPaciente.cedula;

    //Elimina lista paciente
    setCabezaPaciente(cabezaPaciente.siguiente);

    
    agregarHistorial(nombre, cedula);
  };

  const [medicoActual, setMedicoActual] = useState<Medico | null>(null);

  useEffect(() => {
    const m1: Medico = { nombre: "Dr.Alejandro", codigo: "M001", siguiente: null };
    const m2: Medico = { nombre: "Dra.Karla", codigo: "M002", siguiente: null };
    const m3: Medico = { nombre: "Dr.Pepito", codigo: "M003", siguiente: null };

    //circular
    m1.siguiente = m2;
    m2.siguiente = m3;
    m3.siguiente = m1;

    setMedicoActual(m1);
  }, []);

  //tiempo de rotacion de medico 10 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      if (medicoActual?.siguiente) {
        setMedicoActual(medicoActual.siguiente);
      }
    }, 10000);

    return () => clearInterval(intervalo);
  }, [medicoActual]);

  const [comite, setComite] = useState<Miembro | null>(null);

  useEffect(() => {
    const c1: Miembro = { nombre: "Carlos", celular: "3001111111", anterior: null, siguiente: null };
    const c2: Miembro = { nombre: "María", celular: "3002222222", anterior: null, siguiente: null };
    const c3: Miembro = { nombre: "Pedro", celular: "3003333333", anterior: null, siguiente: null };

    //coneccion de lista doble circular
    c1.siguiente = c2;
    c2.siguiente = c3;
    c3.siguiente = c1;

    c1.anterior = c3;
    c2.anterior = c1;
    c3.anterior = c2;

    setComite(c1);
  }, []);


  const mostrarPacientes = () => {
    const lista = [];
    let actual = cabezaPaciente;
    while (actual) {
      lista.push(
        <li key={actual.cedula}>
          {actual.nombre} - {actual.cedula}
        </li>
      );
      actual = actual.siguiente;
    }
    return lista;
  };

  const mostrarHistorial = () => {
    const lista = [];
    let actual = cabezaHistorial;
    while (actual) {
      lista.push(
        <li key={actual.cedula}>
          {actual.nombre} - {actual.cedula}
        </li>
      );
      actual = actual.siguiente;
    }
    return lista;
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Sistema Clínica creado por Molina lara Alejandro</h1>

      <h2>Agregar Paciente</h2>
      <input
        placeholder="Nombre"
        value={nombrePaciente}
        onChange={(e) => setNombrePaciente(e.target.value)}
      />
      <input
        placeholder="Cédula"
        value={cedulaPaciente}
        onChange={(e) => setCedulaPaciente(e.target.value)}
      />
      <button onClick={agregarPaciente}>Agregar</button>

      <h2>Pacientes en Espera</h2>
      <ul>{mostrarPacientes()}</ul>
      <button onClick={atenderPaciente}>Atender Paciente</button>

      <h2>Médico de Guardia (cambia cada 10 seg)</h2>
      <p>
        {medicoActual?.nombre} - Código: {medicoActual?.codigo}
      </p>

      <h2>Historial de Atención</h2>
      <ul>{mostrarHistorial()}</ul>

      <h2>Comité Administrativo</h2>
      <p>
        {comite?.nombre} - Cel: {comite?.celular}
      </p>
    </div>
  );
}

export default App;