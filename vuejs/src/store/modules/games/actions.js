import { getAllGame } from "@/api"

export default {
    getAllGameState: async ({commit}) => {
        const response = await getAllGame();
        if (response.request.statusText == "OK") {
            commit("setGames",response.data)
        }
    }
}