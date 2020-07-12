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