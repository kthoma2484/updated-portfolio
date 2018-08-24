$(function () {


    let data = {
        myProjects: [{
                name: "The Word Guess Game",
                photo: "assets/images/gallows.jpg",
                altname: "The Word Guess Game",
                link: "https://kthoma2484.github.io/word-guess-game/",
                order: "#one!",
                code: "https://github.com/kthoma2484/word-guess-game",
                screenshot:"assets/images/hangman-screen.png",
            },
            {
                name: "The Psychic Game",
                photo: "assets/images/113458-Crystal-Ball.jpg",
                altname: "The Psychic Game",
                link: "https://kthoma2484.github.io/psychic-game/",
                order: "#two!",
                code: "https://github.com/kthoma2484/psychic-game",
                screenshot:"assets/images/psychic-screen.png",
            },
            {
                name: "Crystal Collection Game",
                photo: "assets/images/crystals.jpg",
                altname: "Crystal Collection Game",
                link: "https://kthoma2484.github.io/unit-4-game-crystal-crazy/",
                order: "#three!",
                code: "https://github.com/kthoma2484/unit-4-game-crystal-crazy",
                screenshot:"assets/images/crystal-screen.png",
            },
            {
                name: "Giftastic - 90's Artists!",
                photo: "assets/images/90srnb.jpg",
                altname: "Giftastics - 90s artists",
                link: "https://kthoma2484.github.io/giftastic-90sartists/",
                order: "#four!",
                code: "https://github.com/kthoma2484/giftastic-90sartists",
                screenshot:"assets/images/gifs-screen.png",
            },
            {
                name: "TMNT Battle Royale",
                photo: "assets/images/TMNT.jpg",
                altname: "TMNT Battle Royale",
                link: "https://kthoma2484.github.io/unit-4-game-tmnt-battleroyale-game/",
                order: "#five!",
                code: "https://github.com/kthoma2484/unit-4-game-tmnt-battleroyale-game",
                screenshot:"assets/images/tmnt-screen.png",
            },
            {
                name: "Train Scheduler",
                photo: "assets/images/space train.jpg",
                altname: "Train Scheduler",
                link: "https://kthoma2484.github.io/train-scheduler/",
                order: "#six!",
                code: "https://github.com/kthoma2484/train-scheduler",
                screenshot:"assets/images/train-screen.png",
            },
            {
                name: "Dessert Crave",
                photo: "assets/images/dessertssign.jpg",
                altname: "Dessert Crave",
                link: "https://erickagithub.github.io/project-1/",
                order: "#seven!",
                code: "https://github.com/ErickaGitHub/project-1",
                screenshot:"assets/images/dessert1-screen.png",
            },
            {
                name: "the Ultimate Winer",
                photo: "assets/images/wine-photo.jpg",
                altname: "Wine Trivia",
                link: "https://kthoma2484.github.io/triviagame/",
                order: "#eight!",
                code: "https://github.com/kthoma2484/triviagame",
                screenshot:"assets/images/winer-screen.jpg",
            },
            {
                name: "Mock Storefront",
                photo: "assets/images/Mock-Storefront.png",
                altname: "Mock Storefront",
                link: "https://github.com/kthoma2484/mock-amazon-db",
                order: "#nine!",
                code: "https://github.com/kthoma2484/mock-amazon-db",
                screenshot:"https://drive.google.com/file/d/15r0sO9ziVlrUomaWE-pH6kJCoKjpvcRT/view",
            },
            {
                name: "Custom Cocktail Maker!",
                photo: "assets/images/drinks.jpg",
                altname: "Custom Cocktail Maker",
                link: "https://rocky-fjord-87794.herokuapp.com",
                order: "#ten!",
                code: "https://github.com/kthoma2484/custom-cocktails",
                screenshot:"assets/images/custom-cocktails-screen.png",
            }
        ]
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

    $('.carousel').carousel({
        duration: 10,
        indicators: true,
        dist: -100,
    });

    $("#portfolio").on("click", function () {
        $(".carousel-item").trigger("click");
    });

    $(".outline").each(function() {
        $(this).on("mouseover", function() {
            $(this).children(".underline").stop();
            $(this).children(".underline").animate({
                width: "250px",
                opacity: 1
            });
        });
    });


    $(".outline").each(function() {
            $(this).on("mouseout", function () {
            $(this).children(".underline").stop();
            $(this).children(".underline").animate({
                width: "0px",
                opacity: 0
            });
        });
    });

    /* ------particle.js code-----*/

    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 24,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#85688d"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000"
                },
                "polygon": {
                    "nb_sides": 6
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 98.64345520403408,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 10,
                    "size_min": 40,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 200,
                "color": "#ffffff",
                "opacity": 1,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 8,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "bounce",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

});