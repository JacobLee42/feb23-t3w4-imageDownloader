// Sychronous library for doing file IO
// check if directory exists

const fs = require("node:fs")




const {mkdir} = require("node:fs/promises")

// streaming data. safer than traditional file saving
// This is sychronous, so it is  blocking
const {Readable} = require("node:stream");

const {finished} = require("node:stream/promises")

// Node file & directory path helper system



const path = require("node:path")




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

}





module.exports = {
    downloadPokemonPicture,
    savePokemonPictureToDisk,
    getPokemonPictureUrl,
    getRandomPokemonId
}