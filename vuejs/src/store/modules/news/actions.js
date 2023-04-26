import {  getAllNew } from "@/api"

export default {
    getAllNewState: async ({commit}) => {
        const response = await getAllNew();
        if (response.request.statusText == "OK") {
            commit("setNews",response.data)
        }
    }
}