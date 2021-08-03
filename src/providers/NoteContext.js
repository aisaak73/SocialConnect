import { firebase } from "../firebase";
import createDataContext from "./createDataContext";

// Acciones disponibles para el reducer
const noteReducer = (state, action) => {
  switch (action.type) {
    case "errorMessage":
      return { ...state, error: action.payload };
    case "message":
      return { ...state, message: action.payload };
    case "getNotes":
      return { ...state, notes: action.payload };
    case "setCurrentNote":
      return { ...state, currentNote: action.payload };
    /*case "deleteNote":
      return { ...state, notes: action.payload };*/
    default:
      return state;
  }
};

// Crear una referencia a la colleción de notas
const noteRef = firebase.firestore().collection("notes");

// Almacenar una nueva nuota para el usuario actual
const createNote = (dispatch) => (title, body, timestamp, user) => {
  const data = {
    title,
    body,
    timestamp,
    userId: user,
  };

  noteRef
    .add(data)
    .then((_doc) => {
      dispatch({ type: "message", payload: "Note created!" });
    })
    .catch((error) => {
      dispatch({ type: "errorMessage", payload: error.message });
    });
};

// Obtener todas las notas del usuario
const getNotes = (dispatch) => (userId) => {
    noteRef
      .where("userId", "==", userId)
      //.orderBy("timestamp", "desc")
      .onSnapshot(
        (querySnapshot) => {
          const notes = [];
  
          querySnapshot.forEach((doc) => {
            const note = doc.data();
            note.id = doc.id;
            notes.push(note);
          });
  
          dispatch({ type: "getNotes", payload: notes });
        },
        (error) => {
          dispatch({ type: "errorMessage", payload: error.message });
        }
      );
  };
  
  // Establecer la notaseleccionada por el usuario
const setCurrentNote = (dispatch) => (note) => {
    dispatch({ type: "setCurrentNote", payload: note });
  };

  /*Eliminar una nota
  const deleteNote =
  (dispatch) => (idNote) => {
    noteRef
      .doc(idNote)
      .delete({
        notes: idNote
      })
      /*.then(() => {
        getNotes(userId);
      })
      .catch((error) => {
        dispatch({ type: "errorMessage", payload: error.message });
      });
  };*/

// Exportar las funcionalidades del contexto y el proveedor
export const { Provider, Context } = createDataContext(
    noteReducer,
    {
      createNote,
      getNotes,
      setCurrentNote,
      deleteNote,
    },
    {
      errorMessage: null,
      notes: [],
      currentNote: { id: "", title: "", body: "", timestamp: "" },
    }
  );