"use client"
import type { NextPage } from "next";
import Image from "next/image";
import { addDays, previousMonday } from 'date-fns'; // date-fns에서 날짜 계산을 위한 함수
import { enUS, ko } from 'date-fns/locale'; // `date-fns`에서 로케일 임포트
import { useEffect, useState } from "react";
import {stepNav as StepNav,stepTitle as StepTtile} from "../../../../components/navigation/stepNav"
import PU from "../../../../components/popup/popup"
import { Dialog, } from "@reach/dialog";
import CustomDialog from "../../../../components/popup/popup";
import { useRouter } from "next/navigation";
import ad from "../../../../public/adsample.jpeg"
import i2560 from "../../../../public/800x2560.png"
import i1280 from "../../../../public/800x1280.png"
import Fix from "../../../../public/fixsize.svg"
import Min from "../../../../public/minsize.svg"
import Max from "../../../../public/maximize.svg"
import { DateRange, RangeKeyDict  } from 'react-date-range';
import { GridInputText, GridContainer, GridItem, GridTitle, GridInputSelect, GridSlider, GridImageCheckbox, GridInputFile, GridCheckboxList } from "../../../../components/table/grid";
import CustomDialogImage from "../../../../components/popup/popupImage";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Page=()=>{
const [user, setuser] = useState<any>({password:"",repassword:""

})
const [option, setoption] = useState({name:"",class:"",inventory:"",selectfile:[],optimization:"",date:"",datarange:[
  {
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: 'selection'
  }
]})

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
const [userConvertList, setuserConvertList] = useState<any>({
  role:{type:"none",title:"소속을 입력해주세요.",place:"소속"},
  affiliation:{type:"text",title:"소속을 입력해주세요.",place:"소속"},
  bn:{type:"text",title:"사업자명을 입력해주세요.",place:"사업자명"},
  brn:{type:"text",title:"사업자등록번호를 입력해주세요.",place:"사업자등록번호"},
  name:{type:"text",title:"이름을 입력해주세요.",place:"이름"},
  birth:{type:"number",title:"생년월일을 입력하세요.",place:"생년월일 8자리"},
  userId:{type:"text",title:"아이디를 입력해주세요.",place:"아이디"},
  phone:{type:"number",title:"휴대폰번호를 입력하세요.",place:"-없이 휴대폰번호 입력"},
  phoneAuth:{type:"number",title:"",place:"인증번호 입력"},
  email:{type:"email",title:"이메일을 입력해주세요.",place:"이메일"},
  password:{type:"text",title:"비밀번호를 입력해주세요.",place:"영문+숫자조합 8자리 이상"},
  repassword:{type:"text",title:"비밀번호를 재입력해주세요.",place:"비밀번호 재입력"}
})

const InputText=(typename:any,value:any)=>{
  setuser((prev:any)=>{return{...prev,[typename]:value}})
}  
const router = useRouter()
const [showDialog, setShowDialog] = useState(false);
const openDialog = () => setShowDialog(true);
const closeDialog = () => setShowDialog(false);
const [digText, setdigText] = useState("")
const [selectRole, setselectRole] = useState("일반회원")
const [Imagelist, setImagelist] = useState<File[]>([]);
const [date_range, setdate_range] = useState([
  {
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: 'selection'
  }
]);
const handleDateChange = (ranges: any) => {
  const { selection } = ranges;
  let { startDate, endDate }: any = selection;

  // 서버와 클라이언트의 일관성을 위해 날짜를 ISO 문자열로 저장
  startDate = new Date(startDate).toISOString();
  endDate = new Date(endDate).toISOString();

  const start = new Date(startDate);
  const end = new Date(endDate);

  // 날짜 차이를 계산하여 10일 이상인 경우 endDate를 startDate + 10일로 제한
  if (start && end) {
    const diffInDays = (end.getTime() - start.getTime()) / (1000 * 3600 * 24); // 날짜 차이 계산

    if (diffInDays >= 10) {
      const newEndDate = addDays(start, 9); // startDate로부터 9일 후, 총 10일로 제한
      setoption((prev: any) => ({
        ...prev,
        datarange: {
          startDate: start.toISOString(),
          endDate: newEndDate.toISOString(),
          key: 'selection',
        },
      }));
    } else {
      setoption((prev: any) => ({
        ...prev,
        datarange: {
          startDate: start.toISOString(),
          endDate: end.toISOString(),
          key: 'selection',
        },
      }));
    }
  }
};


    return (<>

    <div className="h-full w-[90%] mx-[5%] lg:w-[70%] lg:mx-[15%] my-[5%] flex flex-col justify-center items-center ">
<StepTtile title={"광고신청"} subtitle={"APPLICATION FOR AD"} subtitlecolor={"#1292F5"}/>
      <StepNav list={["옥외광고","광고신청"]}/>

      <GridTitle title={"광고정보 입력"}/>
<GridContainer>
  <GridItem title={"이름"}>
  <GridInputText onChange={(e: any)=>setoption((prev)=>{return{...prev,name:e}})} placeholder="입력하세요." className={""} value={option.name} />

  </GridItem>
  <GridItem title={"콘텐츠 분류"}>
   
   <GridInputSelect value={option.class} onChange={(e:any)=>setoption((prev)=>{return{...prev,class:e}})}>
<option  value={"콘텐츠1"}>콘텐츠1</option>
<option value={"콘텐츠2"}>콘텐츠2</option>
<option value={"콘텐츠3"}>콘텐츠3</option>
    </GridInputSelect>
  </GridItem>
  <GridItem title={"구좌선택"}>
    <div className="w-full h-full ">

<GridImageCheckbox classImage={"w-[9rem] h-[11.8rem] py-[0.2rem]"} onChange={(e:any)=>setoption((prev)=>{return{...prev,inventory:e}})} boxlist={
  [
    {title:"보도측(미사역 서편)",subtitle:"800 x 1280px",image:i1280},
    {title:"보도측(미사역 동편)",subtitle:"800 x 1280px",image:i1280},
    {title:"차도측",subtitle:"800 x 2560px",image:i2560}
    ]}/>
    </div>
  </GridItem>
  <GridItem title={"파일선택"}>
    <GridInputFile saveFile={setImagelist}></GridInputFile>


   
  </GridItem>
  <GridItem title={"콘텐츠 최적화"}>


  <GridImageCheckbox onChange={(e:any)=>setoption((prev)=>{return{...prev,optimization:e}})} classImage={"p-[0.4rem]"} className={"bg-[#C7C9CB] h-[6rem] w-[5rem]"} boxlist={
  [
    {title:"최대화",subtitle:"",image:Max},
    {title:"최소화",subtitle:"",image:Min},
    {title:"화면 맞춤",subtitle:"",image:Fix}
    ]}/>
  </GridItem>
  <GridItem title={"기간 설정"}>

    <div className="w-full h-full flex-row">
  <div className="w-full h-full flex-row justify-between">
    <input type="date"/>
  <GridCheckboxList onChange={(e: any)=>setoption((prev)=>{return{...prev,date:e}})} boxlist={
  
  [
    {title:"1개월",subtitle:"",image:Max},
    {title:"3개월",subtitle:"",image:Min},
    {title:"6개월",subtitle:"",image:Fix},
    {title:"12개월",subtitle:"",image:Fix}
    ]}></GridCheckboxList> 
  </div>


</div>
    
  </GridItem>
</GridContainer>
<button
     
     className="my-2 px-4 py-1 min-w-[5rem] bg-[#1292F5] text-white rounded shadow hover:bg-blue-600"
   >
     확인
   </button>   

 
          </div>
    <div className="p-8">
      {/* 버튼 */}


      {/* 다이얼로그 */}
      <CustomDialogImage
     
        isOpen={showDialog}
        onClose={closeDialog}
        title={digText}
        content=""
      />



     
    </div>
    
</>
      );
    };


export default Page