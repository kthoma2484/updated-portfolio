$(function() {

let data = {
    myProjects: [
    {
        name: "The Word Guess Game", 
        photo: "assets/images/gallows.jpg",
        altname: "The Word Guess Game",
        link: "https://kthoma2484.github.io/word-guess-game/",
    },
    {
        name: "The Psychic Game", 
        photo: "assets/images/113458-Crystal-Ball.jpg",
        altname: "The Psychic Game",
        link: "https://kthoma2484.github.io/psychic-game/",
    },
    {
        name: "Crystal Collection Game", 
        photo: "assets/images/crystals.jpg",
        altname: "Crystal Collection Game",
        link: "https://kthoma2484.github.io/unit-4-game-crystal-crazy/",
    },
    {
        name: "Giftastic - 90's Artists!", 
        photo: "assets/images/90srnb.jpg",
        altname: "Giftastics - 90s artists",
        link: "https://kthoma2484.github.io/giftastic-90sartists/",
    },
    {
        name: "TMNT Battle Royale", 
        photo: "assets/images/TMNT.jpg",
        altname: "TMNT Battle Royale",
        link: "https://kthoma2484.github.io/unit-4-game-tmnt-battleroyale-game/",
    },
    {
        name: "Train Scheduler", 
        photo: "assets/images/space train.jpg",
        altname: "Train Scheduler",
        link: "https://kthoma2484.github.io/train-scheduler/",
    },
    {
        name: "Dessert Crave", 
        photo: "assets/images/dessertssign.jpg",
        altname: "Dessert Crave",
        link: "https://erickagithub.github.io/project-1/",
    }]
};
    
 console.log(data);

    function createHTML(myProjects) {
        console.log("data passed")
        let projectData = document.getElementById("projectTemplate").innerHTML;
        console.log(projectData)
        let compiledProject = Handlebars.compile(projectData);
        console.log(compiledProject(myProjects));
        let myGeneratedHTML = compiledProject(myProjects);
        console.log(myGeneratedHTML);
        $("#project-container").html(myGeneratedHTML);
    }

    createHTML(data);

});