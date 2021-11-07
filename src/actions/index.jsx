
const updateData = (place) => {
    const apiKey = "2532ed555a544facb5550105213110";
    return (dispatch) => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${place}`)
        .then(res => res.json())
        .then(data => {
          dispatch({
            type: "UPDATE_DATA",
            payload: data,
          })
        })
      }
}

export {updateData} ;