// <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/W_Xd8n01bNU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



// Les accumulateurs des types
let i = 0;
let ii = 0;
let iii = 0;

let i_sourc = ' ';
let les_sources = ' ';
let ii_fanar = ' ';
let iii_musi = ' ';



/* Les boutons et construction */
/* bouton source */

function sour() {
    document.getElementById("main").style.display = "none";

    i_sourc = '<div class="h-50 d-inline-block" ><iframe class="embed-responsive-item h-50 d-inline-block" src="https://www.youtube-nocookie.com/embed/' + sourc[i] + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
    i_sourc += '<div class="gridou">';
    if (i != 0) {
        i_sourc += '<button id="pre_" type="button" class="btn btn-outline-dark"> <i class="fas fa-arrow-left"></i>Précédent </button>';
    } else {
        i_sourc += '<button id="pre_" type="button" class="btn" disabled"> Précédent </button>';
    }
    if (i != sourc.length) {
        i_sourc += '<button id="sui_" type="button" class="btn btn-outline-dark"> Suite <i class="fas fa-arrow-right"></i> </button>';
    } else {
        i_sourc += '<button id="sui_" type="button" class="btn " disabled> Suite </button>';
    }
    i_sourc += '</div>';
    so.innerHTML = i_sourc;
    document.getElementById("pre_").addEventListener("click", pre_source);
    document.getElementById("sui_").addEventListener("click", sui_source);

    for (let lsi = 0; lsi < sourc.length; lsi++) {
        les_sources += '<option value="' + lsi + '">https://www.youtube.com/watch?v=' + sourc[lsi] + '</option>';
    }
    sos.innerHTML = les_sources;
}
document.getElementById("main").addEventListener("click", sour);
// précédent
function pre_source() {
    if (i != 0) {
        i--;
        sour();
    }
}

// suite
function sui_source() {
    if (i != sourc.length) {
        i++;
        sour();
    }
}

/* bouton fan-art */

function fana() {
    for (ii = 0; ii < fanar.length; ii++) {
        if (fanar[ii].plateform === plateform[0]) {
            ii_fanar += '<div class="embed-responsive embed-responsive-4by3"><iframe  class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/' + fanar[i].link + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
        }
    }
}
/* bouton musique */

function musi() {
    for (iii = 0; iii < musiq.length; iii++) {
        if (musiq[iii].plateform === plateform[0]) {
            iii_musi += '<div class="embed-responsive embed-responsive-4by3"><iframe  class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/' + musiq[i].link + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
        }
    }
}