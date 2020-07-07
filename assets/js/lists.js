/*Les zones*/
const so = document.getElementById("sou");
const fa = document.getElementById("fan");
const mu = document.getElementById("mus");
const as = document.getElementById("authors");
const oe = document.getElementById("oeuvres");

// Les genres de plateformes
const plateform = ["youtube", "twitter", "soundcloud", "tumblr", "deviantart", "instagram"]


/* Les créateurs */
const autors = [{
        name: "Layton's World",
        plateform: plateform[0],
        id: "UCKz3LAuAOgdD47bwPU4vV0A"
    },
    {
        name: "Olive et Tom | Officiel",
        plateform: plateform[0],
        id: "UCWQ2PIaUUzmXG8VWwdKCHwA"
    },
    {
        name: "RosaireTV",
        plateform: plateform[0],
        id: "UCWr_C9DsX_Rx_3g_IxTaQ1g"
    },
    {
        name: "Yoshipuff Félix",
        plateform: plateform[0],
        id: "UCG1h6IDf9PSYc2tfQG-prdg"
    },
    {
        name: "Bonne Nuit Les Petits - Chaine Officielle",
        plateform: plateform[0],
        id: "UCX6DywxDwQ8tyQkSnqgbRZg"
    },
    {
        name: "Futureidiots",
        plateform: plateform[0],
        id: "UCJSd4lWard3TBg2OmaMlLfg"
    },
    {
        name: "Dominic Ninmark",
        plateform: plateform[0],
        id: "UCBUc9zdtUNTvXU1XRJosj5A"
    }
];
/* Les sources */
const sourc = [
    "zwUzO29aqhY#=_=",
    "_GgAnEJZ91g#=_=",
    "W_jGQ5d4W6k#=_=",
    "AoHXoxz4yrw#=_=",
    "TX0uyyDi0_c#=_=",
    "ULTfihwy_Xo#=_=",
    "uv37yxc51bE#=_=",
    "hLMsQW_yfwg#=_=",
    "FndmvPkI1Ms#=_=",
    "FXIQMCVJuME#=_=",
    "4qGAjgUZwsk#=_=",
    "j0nzqmIbqSY#=_=",
    "6TpyRE_juyA#=_=",
    "_hcujbKVtRs#=_=",
    "niyGWxVE-e4#=_=",
    "lt_ylc1QNoo#=_=",
    "BCtGhKW9JoI#=_=",
    "BCtGhKW9JoI#=_=",
    "jivFHQop7nk#=_=",
    "2Y9oTJHBYmc#=_=",
    "k35GXLJZH3o#=_=",
    "Nlde2bPQYHU#=_=",
    "V-AZfCFujmc#=_=",
    "_NFJyWqgu3Q#=_=",
    "-xSORIDw1Sg#=_=",
    "EXo27xLD0kk#=_=",
    "Nc3e9jjuW-E#=_=",
    "yYzaEnt0kxs#=_=",
    "940rzFtFNbs#=_=",
    "WXwd0sAi-Wk#=_=",
    "q2j1MAT80f8#=_=",
    "vxgJCqD0pQ8#=_=",
    "E55tAvF7Qmc#=_=",
    "Iu90z9Akxgk#=_=",
    "hDvfg63Auv4#=_=",
    "caXgpo5Ezo4#=_=",
    "KpO0YgXBMVU#=_=",
    "Bo0cpgAtzig#=_=",
    "lOonBtufy2Q#=_=",
    "JjzVyyC70Dc#=_=",
    "a3bCKxftUTc#=_=",
    "qDwRCkILZxU#=_=",
    "EcuKjDEoECA#=_=",
    "l0umrvcYy60#=_=",
    "q_Rz_lxTxxo#=_=",
    "uZEcp808OOE#=_=",
    "s5-nUCSXKac#=_=",
    "JpB3dNZLzvg#=_=",
    "qrZTarWEu-w#=_=",
    "MkXOWwGVX54#=_=",
    "aQaKHx6P8qw#=_=",
    "oGWblVTGOP8#=_=",
    "EOxUWLl2HFs#=_=",
    "Ozs50kSUr30#=_=",
    "glovD37s6OQ#=_=",
    "9bZkp7q19f0#=_=",
    "UtNj0XmueAg#=_=",
    "ZXYo5ojdt_k#=_=",
    "7z7mefP-SuY#=_=",
    "TYB2Z2xl4G4#=_=",
    "idDWuIJ-sHE#=_=",
    "enHfzoyLdxM#=_=",
    "1idHya-NxkA#=_=",
    "ee925OTFBCA#=_=",
    "HuO0oQGCOOI#=_=",
    "0obJfkU9xB4#=_=",
    "0VOClq2B0gA#=_=",
    "AjQYkkCf8V4#=_=",
    "SKJTiLg2jQk#=_=",
    "cZcaE4F7YCg#=_=",
    "GkdenQ7rc_M#=_=",
    "TOMNXGxVrcs#=_=",
    "Q8U-eQkBasQ#=_=",
    "q_Rz_lxTxxo#=_=",
    "OwfVXJPwGmc#=_=",
    "PyKBLQgXM_k#=_=",
    "-WoQsLZmynY#=_=",
    "rdQPzwAsKkI#=_=",
    "9nx6DvrlVaQ#=_=",
    "rE7zwg-9wFI#=_="
];

/* Les fan-arts */
const fanar = [{
    name: "",
    plateform: plateform[0],
    link: ""
}]

/* Les musiques */
const musiq = [{
    name: "",
    plateform: plateform[0],
    link: ""
}]