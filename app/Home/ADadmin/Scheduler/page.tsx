"use client"
import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import {stepNav as StepNav,stepTitle as StepTtile} from "../../../../components/navigation/stepNav"
import PU from "../../../../components/popup/popup"
import { Dialog, } from "@reach/dialog";
import CustomDialog from "../../../../components/popup/popup";
import { useRouter } from "next/navigation";
import ad from "../../../../public/adsample.jpeg"
import TA from "../../../../components/table/table"
import { ADslotList, advertisementGuidelines, GroupList } from "../../../../config/list";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { enUS, ko } from 'date-fns/locale';
import Pagination from "../../../../components/board/pagination";
const Page=()=>{
const [user, setuser] = useState<any>({password:"",repassword:""

})
const [zoom, setZoom] = useState(1);

const updateZoom = () => {
  // 1920px 기준으로 zoom 값 계산
  const scale = Math.max(0.1, Math.min(1, window.innerWidth / 1920)); // 1920px 기준
  setZoom(scale);
};
useEffect(() => {
    updateZoom(); // 초기 실행
    window.addEventListener('resize', updateZoom); // resize 이벤트 핸들러 추가

    // 컴포넌트가 언마운트 될 때 이벤트 핸들러 제거
    return () => {
      window.removeEventListener('resize', updateZoom);
    };
  }, []); // 처음 렌더링 시만 실행

function startCountdown(durationInSeconds: any) {
  let remainingTime = durationInSeconds;

  const interval = setInterval(() => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    // 시간을 "분:초" 형식으로 출력
    console.log(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);

    remainingTime--;

    if (remainingTime < 0) {
      clearInterval(interval); // 타이머 정지
      console.log("카운트다운 종료");
    }
  }, 1000); // 1초마다 실행
}

const [checkbox, setcheckbox] = useState({accept:false,idOverlab:false,phonetf:false})

const InputText=(typename:any,value:any)=>{
  setuser((prev:any)=>{return{...prev,[typename]:value}})
}  
const router = useRouter()
const [showDialog, setShowDialog] = useState(false);
const openDialog = () => setShowDialog(true);
const closeDialog = () => setShowDialog(false);
const [digText, setdigText] = useState("")
const [selectRole, setselectRole] = useState("일반회원")
const [events, setevents] = useState([
  { title: 'Sample Event',type:"운영중", date: "2024-12-19" },
  // more events...
])
const [selectItemSpot, setselectItemSpot] = useState<any>(GroupList[0].group)
const [page, setpage] = useState(1)
    return (<>

    <div className="h-full w-[90%] mx-[5%] lg:w-[70%] lg:mx-[15%] my-[5%] flex flex-col justify-center items-center ">
<StepTtile title={"스케쥴러"} subtitle={"SCHEDULER"} subtitlecolor={"#1292F5"}/>
      <StepNav list={["콘텐츠 운영","스케쥴러"]}/>

      <div className="w-full flex flex-col justify-start items-center space-x-2">
      <p className="w-full font-bold text-[1.7rem] flex flex-row items-center h-full">사이트 선택</p>
    
        </div>
       <section className="w-full h-full">
        <div className="w-full border-bglgray border border-solid rounded-t-lg flex flex-row items-center border-b-0 justify-between">
        <div className="w-[10rem] h-full text-sm items-center justify-center flex  text-center font-bold bg-[#F0F0F0]">그룹</div>
        <div className="w-full items-center h-full flex justify-start flex-wrap p-2">
        {GroupList.map((item)=>(<>
        <button onClick={()=>setselectItemSpot(()=>item.group)} className={`mr-[1%] mb-[0.5%] py-[0.6rem] min-w-[12rem] text-sm lg:text-lg rounded-md px-[0.8rem]  font-medium ${selectItemSpot===item.group?"bg-black text-white":"text-[#63707C]"}`}>{item.group}</button>
        </>))}
        {GroupList.map((item)=>(<>
        <button onClick={()=>setselectItemSpot(()=>item.group)} className={`mr-[1%] mb-[0.5%] py-[0.6rem] min-w-[12rem] text-sm lg:text-lg rounded-md px-[0.8rem]  font-medium ${selectItemSpot===item.group?"bg-black text-white":"text-[#63707C]"}`}>{item.group}</button>
        </>))}
        </div>
      </div>
      </section>
      <div className="w-full border-bglgray border border-solid rounded-b-lg flex items-center justify-between ">
      <div className="w-[10rem] py-[2%] text-sm  h-full items-center justify-center flex text-center font-bold bg-[#F0F0F0]">개별</div>
      <div className="w-full">2</div>  
      </div>    
        <div className="w-full flex flex-wrap justify-center lg:justify-start items-center m py-[3%]">

        </div> 
    <div className=""></div>

{/**   <div className="w-full py-[5%] flex flex-col justify-start items-start text-start">
   {advertisementGuidelines.map((item)=>(<>
<p className="w-full text-start flex flex-row m-0 p-0 text-xs leading-[1.5rem]">• {item}</p>
</>))} 
  </div>
*/}
<div  className="w-full h-full flex flex-col ">
   <FullCalendar 
       plugins={[dayGridPlugin]} 
       initialView="dayGridMonth" 
       events={events} /*events 배열은 달력에 표시될 이벤트 목록이다.*/
      locale={"ko"}
      dayCellClassNames="relative"
      dayCellContent={({ date }) => {
        
        
        // 이벤트 배열에서 현재 날짜에 해당하는 이벤트 찾기
        const isEventDay = events.some(event => new Date(event.date).getDate() === date.getDate());
    
        if (isEventDay) {
          return (
            <>
            <div className="flex flex-col w-full h-full">
             
              <span>{date.getDate()}</span> {/* 날짜 표시 */}
            </div>
           
            </>
          );
        }
    
        // 이벤트가 없는 날 "이벤트 없음" 삽입
        return (
          <>
          <div className="flex flex-col w-full h-full relative">
            <span className="w-full">{date.getDate()}</span>
           <div className="min-h-[3rem]"></div>
            <div className="w-full h-full flex justify-center items-center ">
            <div className="bg-[#637FEF] items-center justify-center text-white rounded-xl px-[1rem] text-lg py-[0.2rem] max-w-[5rem]">여유</div>   
          </div></div>
         
 </>
);
      }}
      
      eventClassNames={({ event }) => {
        // 이벤트 객체의 "type"에 따라 클래스 설정
        switch (event.extendedProps.type) {
          case "운영중":
            return "bg-green-500 items-center justify-center text-white rounded-xl px-[1rem] text-lg py-[0.2rem] max-w-[5rem]";
          case "여유":
            return "bg-[#637FEF] items-center justify-center text-white rounded-xl px-[1rem] text-lg py-[0.2rem] max-w-[5rem]";
          default:
            return "bg-gray-500 items-center justify-center text-white rounded-xl px-[1rem] text-lg py-[0.2rem] max-w-[5rem]";
        }
      }}
      eventContent={({ event }) => (
        <div>
          <strong>{event.extendedProps.type}</strong>
        </div>
      )}

     />

</div>

<div className="w-full flex flex-col justify-start items-center space-x-2">
    
    <p className="w-full font-bold text-[1.7rem] flex flex-row items-center justify-between mb-[0.5rem]">광고 슬롯설정
      <button className="text-[white] bg-[#485C6D] items-center text-center justify-center py-[0.6rem] px-[1rem] text-[1rem] rounded-md min-w-[8rem] ">수정하기</button>
</p>
    <TA headers={ADslotList.header} data={ADslotList.data }/>
    <div className=" text-nowrap border-2 border-black rounded-sm border-spacing-2 font-bold text-[1.7rem] bg-red-500"></div>
    
    </div>
       
          </div>
    <div className="p-8">
      {/* 버튼 */}

    
      {/* 다이얼로그 */}
      
      <CustomDialog
        isOpen={showDialog}
        onClose={closeDialog}
        title={digText}
        content=""
        locale={'ko'}
      />



     
    </div>
    
</>
      );
    };


export default Page