const chapterFieldList=[
    {value:'title',label:'Title'},
    {value:'authors',label:'Authors'},
    {value:'editors',label:'Editors'},
    {value:'bookTitle',label:'Book Title'},
    {value:'publishedOn',label:'Date of Publication'},
    {value:'publisher',label:'Publisher'},
    {value:'isbn',label:'ISBN Number'},
    {value:'pageRange',label:'Page Range'},
    {value:'doi',label:'DOI'},
]
const conferenceFieldList=[
    {value:'title',label:'Title'},
    {value:'authors',label:'Authors'},
    {value:'conferenceTitle',label:'Conference Title'},
    {value:'bookTitle',label:'Book Title'},
    {value:'publishedOn',label:'Date of Publication'},
    {value:'publisher',label:'Publisher'},
    {value:'conferenceDate',label:'Date of Conference'},
    {value:'isbn',label:'ISBN Number'},
    {value:'location',label:'Location'},
    {value:'doi',label:'DOI'},
]
const journalFieldList=[
    {value:'title',label:'Title'},
    {value:'authors',label:'Authors'},
    {value:'journalTitle',label:'Journal Title'},
    {value:'volume',label:'Volume Number'},
    {value:'issue',label:'Issue Number'},
    {value:'publishedOn',label:'Date of Publication'},
    {value:'pageRange',label:'Page Range'},
    {value:'issn',label:'ISSN Number'},
    {value:'doi',label:'DOI'},
]
const bookFieldList=[
    {value:'title',label:'Title'},
    {value:'authors',label:'Authors'},
    {value:'publishedOn',label:'Date of Publication'},
    {value:'publisher',label:'Publisher'},
    {value:'isbn',label:'ISBN Number'},
    {value:'edition',label:'Edition'},
    {value:'doi',label:'DOI'},
]

export const getFieldList=(type)=>{
    var retVal=[]
    if(type==='chapter')    retVal= chapterFieldList;
    else if(type==='book')    retVal= bookFieldList;
    else if(type==='journal')    retVal= journalFieldList;
    else if(type==='conference')    retVal= conferenceFieldList;
    console.log(retVal);
    return retVal;
}

export const parseField=(row,key)=>{
    if(key=='authors' || key==='editors'){
        var str='';
        row[key].forEach(ele => {
            str+=(ele.first?ele.first:'')+' '+(ele.middle?ele.middle:'')+' '+(ele.last?ele.last:'')+', ';

        });
        return str.slice(0,-2);
    }
    else return row[key][0].toUpperCase()+row[key].slice(1);
}