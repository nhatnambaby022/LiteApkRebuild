import {  getAllTag } from "@/api"

export default {
    getAllTagState: async ({commit}) => {
        const response = await getAllTag();
        if (response.request.statusText == "OK") {
            commit("setTags",response.data)
        }
    }
}