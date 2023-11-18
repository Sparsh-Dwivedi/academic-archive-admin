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

export const departmentNames = [
    'Computer Science',
    'Information Technology',
    'Electronics',
    'Electrical',
    'Mechanical',
  ];

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
    console.log(key)
    console.log(row[key])
    if(key=='authors' || key==='editors' || key==='students'){
        var str='';
        row[key].forEach(ele => {
            str+=(ele.first?ele.first:'')+' '+(ele.middle?ele.middle+' ':'')+(ele.last?ele.last:'')+', ';
        });
        return str.slice(0,-2);
    }
    else if(key==='student')    
        return (row[key].first?row[key].first:'')+' '+(row[key].middle?row[key].middle+' ':'')+(row[key].last?row[key].last:'')
    else return row[key][0].toUpperCase()+row[key].slice(1);
}

export const getRecordType=(recordName)=>{
    switch(recordName) {
        case 'M.Tech Projects':
            return 'mtp';
          break;
        
        case 'B.Tech Projects':
            return 'btp';
          break;
        
        default:
          
      }
}

export const getRecordFields=(recordName)=>{
    switch(recordName) {
        case 'mtp':
            return [
                {label:'Faculty Name',value:'name'},
                {label:'Title',value:'title'},
                {label:'Student Name',value:'student'},
                {label:'Project Year',value:'year'},
            ];
          break;
        
        case 'btp':
            return [
                {label:'Faculty Name',value:'name'},
                {label:'Title',value:'title'},
                {label:'Student Names',value:'students'},
                {label:'Project Year',value:'year'},
                {label:'Project Type',value:'type'},
            ];
          break;
        
        default:
          
      }
}