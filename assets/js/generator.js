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
        if (autors[a].plateform === plateform[0]) {
            as.innerHTML += '<div class="g-ytsubscribe" data-channelid="' + autors[a].id + '" data-layout="full" data-theme="dark" data-count="default"></div>';
        }
    }
}

// Les boutons et construction
function sour() {
    auth()
    for (i = 0; i < sourc.length; i++) {
        if (sourc[i].plateform === plateform[0]) {
            oe.innerHTML += '<div class="g-ytsubscribe" data-channelid="' + sourc[i].id + '" data-layout="full" data-theme="dark" data-count="default"></div>';
        }
    }
}

function fana() {
    auth()
    for (ii = 0; ii < fanar.length; ii++) {
        if (fanar[ii].plateform === plateform[0]) {
            oe.innerHTML += '<div class="g-ytsubscribe" data-channelid="' + fanar[ii].id + '" data-layout="full" data-theme="dark" data-count="default"></div>';
        }
    }
}

function musi() {
    auth()
    for (iii = 0; iii < musiq.length; iii++) {
        if (musiq[iii].plateform === plateform[0]) {
            oe.innerHTML += '<div class="g-ytsubscribe" data-channelid="' + musiq[iii].id + '" data-layout="full" data-theme="dark" data-count="default"></div>';
        }
    }
}

/* Les boutons */
so.addEventListener("click", sour);
fa.addEventListener("click", fana);
mu.addEventListener("click", musi);