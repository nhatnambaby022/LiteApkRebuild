import {  getAllType } from "@/api"

export default {
    getAllTypeState: async ({commit}) => {
        const response = await getAllType();
        if (response.request.statusText == "OK") {
            commit("setTypes",response.data)
        }
    }
}