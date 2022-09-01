



var whatsapp = [
    {
        version: "2.22.19.11",
        up_date_version: "2022",
        bugId: "895",
        author: "jan koum ",
        types: "patch",
        featurs: 'group chat'
    },

    {
        version: "2.22.18.16",
        up_date_version: "2022",
        bugId: "456",
        author: "suga",
        types: "enanchment",
        featurs: "photos and videos"
    },

    {
        version: "2.22.17.13",
        up_date_version: "2017",
        bugId: '785',
        author: "peter",
        types: "majer",
        featurs: 'documents'
    },

    {
        version: "2.22.16.70",
        up_date_version: "1999",
        bugId: "890",
        author: "suga",
        types: "majer",
        featurs: "whatsapweb"
    }

]


// console.table(whatsapp)
console.log("************************************************************************")

//YEAR OF RELESE
let up_date = whatsapp.filter(n => n.up_date_version.includes('2022'))
// console.log(up_date)
let update = up_date.map(n => n.version)
// console.log(update)
console.log(` Number of years in that partcular year ${update.length}`)
console.log("----------------------------------------------------------------")
console.log(`The version's are :- ${update}`)

console.log("****************************************************************************")
//FINDING bugId
let bug_id = whatsapp.filter(n => n.bugId.includes('890'))
// console.log(bug_id)
let bug_ID = bug_id.map(n => n.up_date_version)
// console.log(bug_ID)
console.log(`The year of the paricular version's bugId is ${bug_ID}`)


console.log("**************************************************************************")
//SO MANY WORKS OF AUTHER
let sof_author = whatsapp.map(n => n.author)
// console.log(sof_auther)
let emt_obj: any = {}
for (let i of sof_author) {
    if (i in emt_obj) {
        emt_obj[i] += 1
    } else {
        emt_obj[i] = 1
    }
}
// console.log(emt_obj)
let repeat_authr: any = {}
let unique_authr: any = {}
for (let i in emt_obj) {
    let count = 1
    if (count == emt_obj[i]) {
        unique_authr[i] = emt_obj[i]
    } else {
        repeat_authr[i] = emt_obj[i]

    }
}
let repeted_author = `${Object.keys(repeat_authr)}`
console.log(`The auther worked so many version is author ${repeted_author} and Total Number of contributions mady by  ${repeted_author} is  ${Object.values(repeat_authr)}`)

console.log("---------------------------------")
let aut_version = whatsapp.filter(n => n.author.includes(repeted_author))
// console.log(aut_version)
let author_version = aut_version.map(n => n.version)
// console.log(author_version)
console.log(`The versions that author ${repeted_author} worked is :- ${author_version}`)
console.log('***********************************************************************')


//HOW MANY TYPES OF
let types_of_soft = whatsapp.filter(n => n.types.includes("majer"))
// console.log(types_of_soft)
let tot = types_of_soft.map(n => n.types)
console.log(`Ther are ${tot.length} num of majer's in types`)
console.log("***************************************************************")


//FEATURS NAME
let fetur_s = whatsapp.filter(n => n.featurs.includes('whatsapweb'))
// console.log(fetur_s)
let fet = fetur_s.map(n => n.version)
// console.log(fet)
console.log(`Ther are ${fet.length}  num of featurs present in vresion  ${fet}`)
console.log("**********************************************************************")

