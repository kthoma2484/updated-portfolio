$(function() {


let data = {
    myProjects: [
    {
        name: "The Word Guess Game", 
        photo: "assets/images/gallows.jpg",
        altname: "The Word Guess Game",
        link: "https://kthoma2484.github.io/word-guess-game/",
        order: "#one!",
    },
    {
        name: "The Psychic Game", 
        photo: "assets/images/113458-Crystal-Ball.jpg",
        altname: "The Psychic Game",
        link: "https://kthoma2484.github.io/psychic-game/",
        order: "#two!",
    },
    {
        name: "Crystal Collection Game", 
        photo: "assets/images/crystals.jpg",
        altname: "Crystal Collection Game",
        link: "https://kthoma2484.github.io/unit-4-game-crystal-crazy/",
        order: "#three!",
    },
    {
        name: "Giftastic - 90's Artists!", 
        photo: "assets/images/90srnb.jpg",
        altname: "Giftastics - 90s artists",
        link: "https://kthoma2484.github.io/giftastic-90sartists/",
        order: "#four!",
    },
    {
        name: "TMNT Battle Royale", 
        photo: "assets/images/TMNT.jpg",
        altname: "TMNT Battle Royale",
        link: "https://kthoma2484.github.io/unit-4-game-tmnt-battleroyale-game/",
        order: "#five!",
    },
    {
        name: "Train Scheduler", 
        photo: "assets/images/space train.jpg",
        altname: "Train Scheduler",
        link: "https://kthoma2484.github.io/train-scheduler/",
        order: "#six!",
    },
    {
        name: "Dessert Crave", 
        photo: "assets/images/dessertssign.jpg",
        altname: "Dessert Crave",
        link: "https://erickagithub.github.io/project-1/",
        order: "#seven!",
    }]
};
    
 console.log(data);

    function createHTML(myProjects) {
        //console.log("data passed")
        let projectData = document.getElementById("projectTemplate").innerHTML;
        //console.log(projectData)
        let compiledProject = Handlebars.compile(projectData);
        //console.log(compiledProject(myProjects));
        let myGeneratedHTML = compiledProject(myProjects);
        //console.log(myGeneratedHTML);
        $("#project-container").html(myGeneratedHTML);
    }


    createHTML(data);

    $('.parallax').parallax();

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'particles.js', function() {
        console.log('callback - particles.js config loaded');
    });
    
});