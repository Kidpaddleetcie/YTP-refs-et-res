//<div class="g-ytsubscribe" data-channelid="UC_NukSq2ve_AHVAz_9ikTDg" data-layout="full" data-theme="dark" data-count="default"></div>
let i = 0;

function auth() {
    for (let i = 0; i < autors.length; i++) {
        if (autors[i].plateform === "youtube") {
            as.innerHTML += '<div class="g-ytsubscribe" data-channelid="' + autors[i].id + '" data-layout="full" data-theme="dark" data-count="default"></div>';
        }
    }
}