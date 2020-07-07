// <div class="g-ytsubscribe" data-channelid="UC_NukSq2ve_AHVAz_9ikTDg" data-layout="full" data-theme="dark" data-count="default"></div>
// <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/W_Xd8n01bNU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

// Accumulateur des auteurs
let a = 0;
let a_authors = ' ';

// Les accumulateurs des types
let i = 0;
let ii = 0;
let iii = 0;

let i_sourc = ' ';
let ii_fanar = ' ';
let iii_musi = ' ';



// Affichage des auteurs
function auth() {
    for (a = 0; a < autors.length; a++) {
        if (autors[a].plateform === plateform[0]) {
            a_authors += '<div class="g-ytsubscribe" data-channelid="' + autors[a].id + '" data-layout="full" data-theme="dark" data-count="default"></div>';
        }
    }
    oe.innerHTML = a_authors;
}

// Les boutons et construction
function sour() {
    auth()
    for (i = 0; i < sourc.length; i++) {
        if (sourc[i].plateform === plateform[0]) {
            i_sourc += '<iframe width="560" height="315" src="' + sourc[i].link + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        }
    }
    oe.innerHTML = i_sourc;
}

function fana() {
    auth()
    for (ii = 0; ii < fanar.length; ii++) {
        if (fanar[ii].plateform === plateform[0]) {
            ii_fanar += '<iframe width="560" height="315" src="' + fanar[i].link + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        }
    }
    oe.innerHTML = ii_fanar;
}

function musi() {
    auth()
    for (iii = 0; iii < musiq.length; iii++) {
        if (musiq[iii].plateform === plateform[0]) {
            iii_musi += '<iframe width="560" height="315" src="' + musiq[i].link + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        }
    }
    oe.innerHTML = iii_musi;
}

/* Les boutons */
so.addEventListener("click", sour);
fa.addEventListener("click", fana);
mu.addEventListener("click", musi);