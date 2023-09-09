// Sychronous library for doing file IO
// check if directory exists

const fs = require("node:fs")




const {mkdir} = require("node:fs/promises")

// streaming data. safer than traditional file saving
// This is sychronous, so it is  blocking
const {Readable} = require("node:stream");

const {finished} = require("node:stream/promises")

// Node file & directory path helper system



const path = require("node:path");
const { url } = require("node:inspector");




function downloadPokemonPicture (targetId = getRandomPokemonId()){

}
// generate a random number or use a user-provided number
function getRandomPokemonId(){
    return Math.floor(Math.random() * 1010) + 1
}


// retrieve Pokemon data for that number
// retrieve the image URL from the pokemon data
async function getPokemonPictureUrl(targetId = getRandomPokemonId()){
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + targetId).catch(error => {
        throw new Error("API failure.");
});


    if (response.status == "404"){
        throw new Error("API did not have data for the requested ID.");
    }



    let data = await response.json().catch(error => {
        throw new Error("API did not return valid JSON.");
    })
}

    return data.sprites.other["official-artwork"].front_default;
    


//download that image and save it to the computer
//return download images file path
async function savePokemonPictureToDisk(targetUrl, targetDownloadFilename, targetDownloadDirectory = "."){

// fetch request to the image url
    let imageData = await fetch(targetUrl).catch((error) => {
        throw new Error("image failed to download");

    })
// check if dir exists
    if (!fs.existsSync(targetDownloadDirectory)){

        await mkdir(targetDownloadDirectory);

    }

    let fullFileDestination = path.join(targetDownloadDirectory, targetDownloadFilename);

    let fileDownloadStream = fs.createWriteStream(fullFileDestination);

    await finished(Readable.fromWeb(imageData.body)).pipe(fileDownloadStream).catch(error => {
        throw new Error("failed to save content to disk.");
    })



}





module.exports = {
    downloadPokemonPicture,
    savePokemonPictureToDisk,
    getPokemonPictureUrl,
    getRandomPokemonId
}