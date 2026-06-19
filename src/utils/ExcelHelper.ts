import * as EXCEL from 'xlsx';
import fs from 'fs';

interface TestRecords{
Skill1:string,
Skill2:string 

}
export function readExcelFile(filepath:string)
{
   const file=fs.readFileSync(filepath);
   const  workbook=EXCEL.read(file);
    const sheet=workbook.Sheets[workbook.SheetNames[0]]
  const rowData:any[]=EXCEL.utils.sheet_to_json(sheet,{header:1})

 const records:TestRecords[]=rowData.slice(1).map((column:any)=>({
    Skill1:column[0],
     Skill2:column[1],
  }))
  return records;

}