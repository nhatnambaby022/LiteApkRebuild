import { getAllGame, getAllVersion } from "@/api"

export default {
    getAllGameState: async ({commit}) => {
        const responseGame = await getAllGame();
        const responseVersion = await getAllVersion();
        let Games = responseGame.data.filter(game => game.game_isDelete == 0 && game.type_isDelete == 0);
        let Versions = responseVersion.data;
        for(let i = 0;i < Games.length;i++){
            Games[i] = {
                ...Games[i],
                versions: Versions.filter(version => version.id_game == Games[i].id_game)
            }
        }

        if (responseGame.request.statusText == "OK" && responseVersion.request.statusText == "OK") {
            commit("setGames",Games)
        }
    }
}