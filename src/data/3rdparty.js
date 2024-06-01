import axios from "axios";

export const notEkleAPI = (yeniNot) => dispatch => {
    axios
      .post("https://httpbin.org/anything", yeniNot)
      .then((res) => {
        if (res.status === 200) {
          dispatch(notEkle(yeniNot))
        }
      })
      .catch((error) => console.log(error));
  }
  
  export const notSilAPI = (id) => dispatch => {
    console.log(id)
    axios
      .delete("https://httpbin.org/anything", { data: id })
      .then((res) => {
        if (res.status === 200) {
          dispatch(notSil(id)) 
        }
      })
      .catch((error) => console.log(error));
  }