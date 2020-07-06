// <div class="g-ytsubscribe" data-channelid="UC_NukSq2ve_AHVAz_9ikTDg" data-layout="full" data-theme="dark" data-count="default"></div>
// <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/W_Xd8n01bNU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

// Accumulateur des auteurs
let a = 0;

// Les accumulateurs des types
let i = 0;
let ii = 0;
let iii = 0;

// Affichage des auteurs
function auth() {
    for (a = 0; a < autors.length; a++) {
        if (autors[a].plateform === "youtube") {
            as.innerHTML += '<div class="g-ytsubscribe" data-channelid="' + autors[a].id + '" data-layout="full" data-theme="dark" data-count="default"></div>';
        }
    }
}

// Les boutons

function sour() {
    for (i = 0; i < autors.length; i++) {}
}

function fana() {
    for (ii = 0; ii < autors.length; ii++) {}
}

function musi() {
    for (iii = 0; iii < autors.length; iii++) {}
}