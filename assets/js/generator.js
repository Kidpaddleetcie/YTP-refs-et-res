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

function remiseAzero() {
    i_sourc = " ";
    ii_fanar = " ";
    iii_musi = " ";
}

// Affichage des auteurs
function auth() {
    for (a = 0; a < autors.length; a++) {
        if (autors[a].plateform === plateform[0]) {
            a_authors += '<div class="g-ytsubscribe" data-channelid="' + autors[a].id + '" data-layout="full" data-theme="dark" data-count="default"></div>';
        }
    }
    as.innerHTML = a_authors;
}

// Les boutons et construction
function sour() {
    auth()
    remiseAzero()
    for (i = 0; i < sourc.length; i++) {
        i_sourc += '<div class="embed-responsive embed-responsive-4by3"><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/' + sourc[i] + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
    }
    oe.innerHTML = i_sourc;
}

function fana() {
    auth()
    remiseAzero()
    for (ii = 0; ii < fanar.length; ii++) {
        if (fanar[ii].plateform === plateform[0]) {
            ii_fanar += '<div class="embed-responsive embed-responsive-4by3"><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/' + fanar[i].link + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
        }
    }
    oe.innerHTML = ii_fanar;
}

function musi() {
    auth()
    remiseAzero()
    for (iii = 0; iii < musiq.length; iii++) {
        if (musiq[iii].plateform === plateform[0]) {
            iii_musi += '<div class="embed-responsive embed-responsive-4by3"><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/' + musiq[i].link + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
        }
    }
    oe.innerHTML = iii_musi;
}

/* Les boutons */
so.addEventListener("click", sour);
fa.addEventListener("click", fana);
mu.addEventListener("click", musi);