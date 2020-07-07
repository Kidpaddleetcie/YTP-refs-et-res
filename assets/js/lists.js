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
    "https://www.youtube.com/watch?v=zwUzO29aqhY#=_=",
    "https://www.youtube.com/watch?v=_GgAnEJZ91g#=_=",
    "https://www.youtube.com/watch?v=W_jGQ5d4W6k#=_=",
    "https://www.youtube.com/watch?v=AoHXoxz4yrw#=_=",
    "https://www.youtube.com/watch?v=TX0uyyDi0_c#=_=",
    "https://www.youtube.com/watch?v=ULTfihwy_Xo#=_=",
    "https://www.youtube.com/watch?v=uv37yxc51bE#=_=",
    "https://www.youtube.com/watch?v=hLMsQW_yfwg#=_=",
    "https://www.youtube.com/watch?v=FndmvPkI1Ms#=_=",
    "https://www.youtube.com/watch?v=FXIQMCVJuME#=_=",
    "https://www.youtube.com/watch?v=4qGAjgUZwsk#=_=",
    "https://www.youtube.com/watch?v=j0nzqmIbqSY#=_=",
    "https://www.youtube.com/watch?v=6TpyRE_juyA#=_=",
    "https://www.youtube.com/watch?v=_hcujbKVtRs#=_=",
    "https://www.youtube.com/watch?v=niyGWxVE-e4#=_=",
    "https://www.youtube.com/watch?v=lt_ylc1QNoo#=_=",
    "https://www.youtube.com/watch?v=BCtGhKW9JoI#=_=",
    "https://www.youtube.com/watch?v=BCtGhKW9JoI#=_=",
    "https://www.youtube.com/watch?v=jivFHQop7nk#=_=",
    "https://www.youtube.com/watch?v=2Y9oTJHBYmc#=_=",
    "https://www.youtube.com/watch?v=k35GXLJZH3o#=_=",
    "https://www.youtube.com/watch?v=Nlde2bPQYHU#=_=",
    "https://www.youtube.com/watch?v=V-AZfCFujmc#=_=",
    "https://www.youtube.com/watch?v=_NFJyWqgu3Q#=_=",
    "https://www.youtube.com/watch?v=-xSORIDw1Sg#=_=",
    "https://www.youtube.com/watch?v=EXo27xLD0kk#=_=",
    "https://www.youtube.com/watch?v=Nc3e9jjuW-E#=_=",
    "https://www.youtube.com/watch?v=yYzaEnt0kxs#=_=",
    "https://www.youtube.com/watch?v=940rzFtFNbs#=_=",
    "https://www.youtube.com/watch?v=WXwd0sAi-Wk#=_=",
    "https://www.youtube.com/watch?v=q2j1MAT80f8#=_=",
    "https://www.youtube.com/watch?v=vxgJCqD0pQ8#=_=",
    "https://www.youtube.com/watch?v=E55tAvF7Qmc#=_=",
    "https://www.youtube.com/watch?v=Iu90z9Akxgk#=_=",
    "https://www.youtube.com/watch?v=hDvfg63Auv4#=_=",
    "https://www.youtube.com/watch?v=caXgpo5Ezo4#=_=",
    "https://www.youtube.com/watch?v=KpO0YgXBMVU#=_=",
    "https://www.youtube.com/watch?v=Bo0cpgAtzig#=_=",
    "https://www.youtube.com/watch?v=lOonBtufy2Q#=_=",
    "https://www.youtube.com/watch?v=JjzVyyC70Dc#=_=",
    "https://www.youtube.com/watch?v=a3bCKxftUTc#=_=",
    "https://www.youtube.com/watch?v=qDwRCkILZxU#=_=",
    "https://www.youtube.com/watch?v=EcuKjDEoECA#=_=",
    "https://www.youtube.com/watch?v=l0umrvcYy60#=_=",
    "https://www.youtube.com/watch?v=q_Rz_lxTxxo#=_=",
    "https://www.youtube.com/watch?v=uZEcp808OOE#=_=",
    "https://www.youtube.com/watch?v=s5-nUCSXKac#=_=",
    "https://www.youtube.com/watch?v=JpB3dNZLzvg#=_=",
    "https://www.youtube.com/watch?v=qrZTarWEu-w#=_=",
    "https://www.youtube.com/watch?v=MkXOWwGVX54#=_=",
    "https://www.youtube.com/watch?v=aQaKHx6P8qw#=_=",
    "https://www.youtube.com/watch?v=oGWblVTGOP8#=_=",
    "https://www.youtube.com/watch?v=EOxUWLl2HFs#=_=",
    "https://www.youtube.com/watch?v=Ozs50kSUr30#=_=",
    "https://www.youtube.com/watch?v=glovD37s6OQ#=_=",
    "https://www.youtube.com/watch?v=9bZkp7q19f0#=_=",
    "https://www.youtube.com/watch?v=UtNj0XmueAg#=_=",
    "https://www.youtube.com/watch?v=ZXYo5ojdt_k#=_=",
    "https://www.youtube.com/watch?v=7z7mefP-SuY#=_=",
    "https://www.youtube.com/watch?v=TYB2Z2xl4G4#=_=",
    "https://www.youtube.com/watch?v=idDWuIJ-sHE#=_=",
    "https://www.youtube.com/watch?v=enHfzoyLdxM#=_=",
    "https://www.youtube.com/watch?v=1idHya-NxkA#=_=",
    "https://www.youtube.com/watch?v=ee925OTFBCA#=_=",
    "https://www.youtube.com/watch?v=HuO0oQGCOOI#=_=",
    "https://www.youtube.com/watch?v=0obJfkU9xB4#=_=",
    "https://www.youtube.com/watch?v=0VOClq2B0gA#=_=",
    "https://www.youtube.com/watch?v=AjQYkkCf8V4#=_=",
    "https://www.youtube.com/watch?v=SKJTiLg2jQk#=_=",
    "https://www.youtube.com/watch?v=cZcaE4F7YCg#=_=",
    "https://www.youtube.com/watch?v=GkdenQ7rc_M#=_=",
    "https://www.youtube.com/watch?v=TOMNXGxVrcs#=_=",
    "https://www.youtube.com/watch?v=Q8U-eQkBasQ#=_=",
    "https://www.youtube.com/watch?v=q_Rz_lxTxxo#=_=",
    "https://www.youtube.com/watch?v=OwfVXJPwGmc#=_=",
    "https://www.youtube.com/watch?v=PyKBLQgXM_k#=_=",
    "https://www.youtube.com/watch?v=-WoQsLZmynY#=_=",
    "https://www.youtube.com/watch?v=rdQPzwAsKkI#=_=",
    "https://www.youtube.com/watch?v=9nx6DvrlVaQ#=_=",
    "https://www.youtube.com/watch?v=rE7zwg-9wFI#=_="
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