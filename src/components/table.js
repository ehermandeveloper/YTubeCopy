import React from 'react'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Seo from "./seo";

export default function Table({TableData}) {
   
  return (
    <div className="relative overflow-x-auto rounded-xl mt-3 xm:mt-7 font-ubuntu w-[85vw] xm:w-[90vw] sm:w-[90vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] 2xl:w-[40vw] mx-auto">
      <Seo/>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
  <thead className="text-white uppercase border bg-blue-extra-dark">
    <tr>
      <th className="px-4 text-center py-[14px] text-[7px] xs:text-[9px] xm:text-[10px] sm:text-[12px] lg:text-[14px]">
        Quality
      </th>
      <th className="px-4 text-center py-[14px] text-[7px] xs:text-[9px] xm:text-[10px] sm:text-[12px] lg:text-[14px]">
        Format
      </th>
      <th className="px-4 text-center py-[14px] text-[7px] xs:text-[9px] xm:text-[10px] sm:text-[12px] lg:text-[14px]">
        Size
      </th>
      <th className="px-4 text-center py-[14px] text-[7px] xs:text-[9px] xm:text-[10px] sm:text-[12px] lg:text-[14px]">
        Download
      </th>
    </tr>
  </thead>
  <tbody>
    {TableData === null ? (
      <tr className="bg-white border-b">
        <td className="px-4 text-center py-4 text-[7px] xs:text-[9px] xm:text-[10px] sm:text-[12px] lg:text-[14px] font-medium text-gray-900 whitespace-nowrap">
          -
        </td>
        <td className="px-4 text-center py-4 text-[7px] xs:text-[9px] xm:text-[10px] sm:text-[12px] lg:text-[14px]">
          -
        </td>
        <td className="px-4 text-center py-4 text-[7px] xs:text-[9px] xm:text-[10px] sm:text-[12px] lg:text-[14px]">
          -
        </td>
        <td className="px-4 text-center py-2 text-[7px] xs:text-[9px] xm:text-[10px] sm:text-[12px] lg:text-[14px] ">
          -
        </td>
      </tr>
    ) : (
      TableData.map((data, i) => (
        <tr key={i} className="bg-white border-b">
          <td className="px-4 text-center py-4 text-[7px] xs:text-[9px] xm:text-[10px] sm:text-[12px] lg:text-[14px] font-medium text-gray-900 whitespace-nowrap">
            {data.quality}
          </td>
          <td className="px-4 text-center py-4 text-[7px] xs:text-[9px] xm:text-[10px] sm:text-[12px] lg:text-[14px]">
            {data.formate}
          </td>
          <td className="px-4 text-center py-4 text-[7px] xs:text-[9px] xm:text-[10px] sm:text-[12px] lg:text-[14px]">
            {data.size}
          </td>
          <td className="px-4 py-2 text-[7px] xs:text-[9px] xm:text-[10px] sm:text-[12px] lg:text-[14px] flex justify-center items-center">
            <a target="_blank" rel="noreferrer" href={data.link}>
              <button className="flex justify-center items-center gap-x-1 text-blue-extra-dark px-2 py-1 md:px-3 md:py-1 rounded-full">
                <FileDownloadOutlinedIcon fontSize="small" />
                <span className="hidden md:block">Download</span>
              </button>
            </a>
          </td>
        </tr>
      ))
    )}
  </tbody>
</table>

</div>

  )
}
