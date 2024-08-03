import apiRequest from "../../clinet/src/lib/apiRequest"

expost const singlePageloader = async({ request, params }) => {
     
     const res = await apiRequest("/posts/" + params.id)
}