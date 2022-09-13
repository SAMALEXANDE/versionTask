
interface whatsapp {
    version: string,
    dateOfVersion: Date,
    bugID: string,
    versionAuthor: string,
    versionTypes: string
    versionFeaturs: string

}



var whatsapp = [
    {
        version: "2.22.19.11",
        dateOfVersion: new Date("06-07-2022"),
        bugID: "895",
        versionAuthor: ["Jan Koum", "John", "Suga"],
        versionTypes: "patch",
        versionFeaturs: 'group chat'
    },

    {
        version: "2.22.18.16",
        dateOfVersion: new Date("15-09-2022"),
        bugID: "456",
        versionAuthor: ["Suga", "John"],
        versionTypes: "enanchment",
        versionFeaturs: "photos and videos"
    },

    {
        version: "2.22.17.13",
        dateOfVersion: new Date("30-05-2017"),
        bugID: '785',
        versionAuthor: ["Peter", "Charles"],
        versionTypes: "majer",
        versionFeaturs: 'documents'
    },

    {
        version: "2.22.16.70",
        dateOfVersion: new Date("26-03-1999"),
        bugID: "890",
        versionAuthor: ["Suga", "Charles"],
        versionTypes: "majer",
        versionFeaturs: "whatsapweb"
    }

]


// console.table(whatsapp)
console.log("************************************************************************")

//YEAR OF RELESE
function findYearofUpdateVersion(year: string) {
    let upDatetYear = whatsapp.filter(n => n.dateOfVersion.toString().includes(year))
    console.log(` ${upDatetYear.length} versions are relesed in that partcular year ${year}`)
    console.log(upDatetYear)
    console.log("----------------------------------------------------------------")
}
findYearofUpdateVersion("2022")


console.log("****************************************************************************")
//FINDING bugID
function findingBugId(bugId: string) {
    let findBug = whatsapp.filter(n => n.bugID.includes(bugId))
    console.log(`That paricular version's bugID is ${bugId}`)
    console.log(findBug)
}
findingBugId("895")

console.log("**************************************************************************")
// Finding which author had more Updated
function findHighestUpdatedByAuthor() {
    let authorNames: string[] = []
    whatsapp.forEach(element => {
        for (let i of element.versionAuthor) {
            authorNames.push(i)
        }
    });
    let m = 1
    let authorName = "default";
    let mostFrequent = 1
    for (let i = 0; i < authorNames.length; i++) {
        for (let j = 1; j < authorNames.length; j++) {
            if (authorNames[i] == authorNames[j]) {
                m++
            }
            if (mostFrequent < m) {
                mostFrequent = m
                authorName = authorNames[i]
            }
        }
        m = 0
    }
    console.log("---------------------------------------------------------------------------")
    console.log(`The author ${authorName} has worked on more no of releases, the count is ${mostFrequent}`)
    console.log("---------------------------------------------------------------------------")
}


//HOW MANY TYPES OF
function howManyTypesOfVersion(typs: string) {
    let findTypes = whatsapp.filter(n => n.versionTypes.includes(typs))
    console.log(`Ther are ${findTypes.length} num of ${typs} in types`)
    console.log(findTypes)
    console.log("***************************************************************")
}
howManyTypesOfVersion("majer")

//versionTypes NAME
function specficFeture(feture: string) {
    let findFeturs = whatsapp.filter(n => n.versionFeaturs.includes(feture))
    console.log(`Ther are ${findFeturs.length}  num of versionTypes present in vresion  ${feture}`)
    console.log(findFeturs)
    console.log("**********************************************************************")
}
specficFeture('documents')
findHighestUpdatedByAuthor()
