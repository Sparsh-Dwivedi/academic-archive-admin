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
    {value:'all',label:'All Fields'},
    {value:'title',label:'Title'},
    {value:'authors',label:'Authors'},
    {value:'conferenceTitle',label:'Conference Title'},
    // {value:'bookTitle',label:'Book Title'},
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
        case 'Phd Scholars':
            return 'phd';
          break;
        case 'Faculty Development Program':
            return 'fdp';
          break;
        case 'Short Term Courses':
            return 'stc';
          break;
        case 'Patents':
            return 'patent';
          break;
        case 'Project Grants':
            return 'project';
          break;
        case 'Project Consultancy':
            return 'consultancy';
          break;
        case 'Invited Talks':
            return 'talk';
          break;
        case 'Society Membership':
            return 'society';
          break;
        
        default:
          
      }
}

export const getRecordFields=(recordName)=>{
    switch(recordName) {
        case 'mtp':
            return [
                {label:'Faculty Name',value:'facultyName'},
                {label:'Title',value:'title'},
                {label:'Student Name',value:'student'},
                {label:'Project Year',value:'year'},
            ];
          break;
        
        case 'btp':
            return [
                {label:'Faculty Name',value:'facultyName'},
                {label:'Title',value:'title'},
                {label:'Student Names',value:'students'},
                {label:'Project Year',value:'year'},
                {label:'Project Type',value:'type'},
            ];
          break;
        case 'consultancy':
            return [
                {label:'Faculty Name',value:'facultyName'},
                {label:'Title',value:'title'},
                {label:'Awarding Agency',value:'awardingAgency'},
                {label:'Project Cost',value:'cost'},
                {label:'Project Status',value:'status'},
            ];
          break;
        case 'fdp':
            return [
                {label:'Faculty Name',value:'facultyName'},
                {label:'Program Name',value:'name'},
                {label:'Student Duration',value:'duration'},
                {label:'Start Date',value:'startDate'},
                {label:'End Date',value:'endDate'},
                {label:'Program Organiser',value:'organiser'},
            ];
          break;
        case 'patent':
            return [
                {label:'Faculty Name',value:'facultyName'},
                {label:'Name',value:'name'},
                {label:'Country',value:'country'},
                {label:'Patent Year',value:'year'},
                {label:'Award No.',value:'awardNo'},
                {label:'Project Status',value:'status'},
            ];
          break;
        case 'phd':
            return [
                {label:'Faculty Name',value:'facultyName'},
                {label:'Scholar Name',value:'scholarName'},
                {label:'Enrolment Date',value:'enrolmentDate'},
                {label:'Phd Title',value:'phdTitle'},
                {label:'Project Status',value:'status'},
            ];
          break;
        case 'project':
            return [
                {label:'Faculty Name',value:'facultyName'},
                {label:'Title',value:'title'},
                {label:'Awarding Agency',value:'awardingAgency'},
                {label:'Project Cost',value:'cost'},
                {label:'Project Status',value:'status'},
            ];
          break;
        case 'society':
            return [
                {label:'Faculty Name',value:'facultyName'},
                {label:'Society Name',value:'societyName'},
                {label:'Membership Duration',value:'duration'},
            ];
          break;
        case 'stc':
            return [
                {label:'Faculty Name',value:'facultyName'},
                {label:'Course Name',value:'name'},
                {label:'Course Duration',value:'duration'},
                {label:'Start Date',value:'startDate'},
                {label:'End Date',value:'endDate'},
                {label:'Organiser',value:'organiser'},
            ];
          break;
        case 'talk':
            return [
                {label:'Faculty Name',value:'facultyName'},
                {label:'Title',value:'title'},
                {label:'Talk Date',value:'date'},
                {label:'Talk Venue',value:'venue'},
            ];
          break;
        
        default:
          
      }
}