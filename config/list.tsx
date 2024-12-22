

const ADslotList:any={header:["구좌구분","시작시간","종료시간","광고주 수(명)","콘텐츠 시간(초)",
"일일송출 횟수(회)","반복주기(초)","오차인정범위(%)"],
data:[
{"구좌구분":"보도측(미사역 동편)","시작시간":"07","종료시간":"23","광고주 수(명)":"24","콘텐츠 시간(초)":"15",
"일일송출 횟수(회)":"160","반복주기(초)":"360초","오차인정범위(%)":"5"},
{"구좌구분":"보도측(미사역 서편)","시작시간":"07","종료시간":"23","광고주 수(명)":"24","콘텐츠 시간(초)":"15",
    "일일송출 횟수(회)":"160","반복주기(초)":"360초","오차인정범위(%)":"5"},
{"구좌구분":"차도축","시작시간":"07","종료시간":"23","광고주 수(명)":"24","콘텐츠 시간(초)":"15",
"일일송출 횟수(회)":"160","반복주기(초)":"360초","오차인정범위(%)":"5"}
]}
const   advertisementGuidelines= [
    "광고 신청은 '회원가입'부터 하신 후 로그인하셔야 합니다.",
    "광고 게시 시간은 매일 06-24시이며, 1구좌 당 15초씩 표출됩니다. (차도측은 30초씩 표출)",
    "신규 광고 게시 시작일은 매월 1일이며 전월 20일까지 신청 가능합니다.",
    "광고 기간 및 게시는 단기 10일, 장기 1/3/6/12개월로 광고 신청하실 수 있습니다.",
    "광고 게시는 광고 내용 검토를 거친 후 '이메일'과 '문자' 전송으로 통보하여 드립니다.",
    "광고 신청 비용 중 수수료는 세금계산서 발행 항목에서 제외됩니다.",
    "라이브러리를 통해 광고 인증 사진 요청 시 표출 중 사진을 '이메일'과 '문자'로 전달드립니다.",
    "단, 단기 광고(10일)에 한해서는 광고 게시 보고 사진은 전달드리지 않사오니 양해 바랍니다.",
    "정해진 기간 내 광고료를 입금하지 않으면 다음 차례 광고주로 넘어갑니다.",
    "단기/장기 기간 및 금액은 월수(28~31일)에 상관없이 동일합니다.",
    "세금계산서는 신청 시 등록된 사업자등록번호로만 발행하며, 발행 일자는 게시 시작일 기준입니다.",
    "옥외광고물 등의 관리와 옥외광고산업 진흥에 관한 법률 제 5조에 규정한 금지광고물, 특정 개인 또는 단체를 비방하는 목적의 광고, 기타 공중도덕이나 사회윤리를 침해할 우려가 있는 광고 등은 광고 송출이 불가합니다.",
    "광고 신청 접수 시 자체 제작 이미지, 동영상을 업로드하여 주시기 바랍니다.",
    "자체 이미지 사용으로 인한 지적재산권 침해는 광고주에게 책임이 있습니다."
  ]

  const ManagementList = [
    {
      index: 0,
      "신청일시": "2024/11/17",
      "소속/사업자명": "세진테크",
      "이름": "홍길동",
      "그룹": "차도측",
      "분류": "상업광고",
      "신청기간": "1개월",
      "콘텐츠유형": "동영상",
      "금액": "2,000,000",
      "진행상태": "심의중",
      "첨부콘텐츠": "ABCD OO광고.MP4"
    },
    {
      index: 1,
      "신청일시": "2024/11/17",
      "소속/사업자명": "세진테크",
      "이름": "홍길동",
      "그룹": "보도측(미사용 서편)",
      "분류": "상업광고",
      "신청기간": "12개월",
      "콘텐츠유형": "동영상",
      "금액": "12,000,000",
      "진행상태": "광고중",
      "첨부콘텐츠": "ABCD OO광고.MP4"
    },
    {
      index: 2,
      "신청일시": "2024/11/17",
      "소속/사업자명": "세진테크",
      "이름": "홍길동",
      "그룹": "보도측(미사용 서편)",
      "분류": "상업광고",
      "신청기간": "1개월",
      "콘텐츠유형": "동영상",
      "금액": "2,000,000",
      "진행상태": "심의중",
      "첨부콘텐츠": "ABCD OO광고.MP4"
    },
    {
      index: 3,
      "신청일시": "2024/11/17",
      "소속/사업자명": "세진테크",
      "이름": "홍길동",
      "그룹": "보도측(미사용 서편)",
      "분류": "상업광고",
      "신청기간": "1개월",
      "콘텐츠유형": "동영상",
      "금액": "2,000,000",
      "진행상태": "광고중단",
      "첨부콘텐츠": "ABCD OO광고.MP4"
    },{
        index: 4,
        "신청일시": "2024/11/17",
        "소속/사업자명": "세진테크",
        "이름": "홍길동",
        "그룹": "차도측",
        "분류": "상업광고",
        "신청기간": "1개월",
        "콘텐츠유형": "동영상",
        "금액": "2,000,000",
        "진행상태": "심의중",
        "첨부콘텐츠": "ABCD OO광고.MP4"
      },
      {
        index: 5,
        "신청일시": "2024/11/17",
        "소속/사업자명": "세진테크",
        "이름": "홍길동",
        "그룹": "보도측(미사용 서편)",
        "분류": "상업광고",
        "신청기간": "12개월",
        "콘텐츠유형": "동영상",
        "금액": "12,000,000",
        "진행상태": "광고중",
        "첨부콘텐츠": "ABCD OO광고.MP4"
      },
      {
        index: 6,
        "신청일시": "2024/11/17",
        "소속/사업자명": "세진테크",
        "이름": "홍길동",
        "그룹": "보도측(미사용 서편)",
        "분류": "상업광고",
        "신청기간": "1개월",
        "콘텐츠유형": "동영상",
        "금액": "2,000,000",
        "진행상태": "심의중",
        "첨부콘텐츠": "ABCD OO광고.MP4"
      },
      {
        index: 7,
        "신청일시": "2024/11/17",
        "소속/사업자명": "세진테크",
        "이름": "홍길동",
        "그룹": "보도측(미사용 서편)",
        "분류": "상업광고",
        "신청기간": "1개월",
        "콘텐츠유형": "동영상",
        "금액": "2,000,000",
        "진행상태": "광고중단",
        "첨부콘텐츠": "ABCD OO광고.MP4"
      },{
        index: 8,
        "신청일시": "2024/11/17",
        "소속/사업자명": "세진테크",
        "이름": "홍길동",
        "그룹": "차도측",
        "분류": "상업광고",
        "신청기간": "1개월",
        "콘텐츠유형": "동영상",
        "금액": "2,000,000",
        "진행상태": "심의중",
        "첨부콘텐츠": "ABCD OO광고.MP4"
      },
      {
        index: 9,
        "신청일시": "2024/11/17",
        "소속/사업자명": "세진테크",
        "이름": "홍길동",
        "그룹": "보도측(미사용 서편)",
        "분류": "상업광고",
        "신청기간": "12개월",
        "콘텐츠유형": "동영상",
        "금액": "12,000,000",
        "진행상태": "광고중",
        "첨부콘텐츠": "ABCD OO광고.MP4"
      },
      {
        index: 10,
        "신청일시": "2024/11/17",
        "소속/사업자명": "세진테크",
        "이름": "홍길동",
        "그룹": "보도측(미사용 서편)",
        "분류": "상업광고",
        "신청기간": "1개월",
        "콘텐츠유형": "동영상",
        "금액": "2,000,000",
        "진행상태": "심의중",
        "첨부콘텐츠": "ABCD OO광고.MP4"
      },
      {
        index: 11,
        "신청일시": "2024/11/17",
        "소속/사업자명": "세진테크",
        "이름": "홍길동",
        "그룹": "보도측(미사용 서편)",
        "분류": "상업광고",
        "신청기간": "1개월",
        "콘텐츠유형": "동영상",
        "금액": "2,000,000",
        "진행상태": "광고중단",
        "첨부콘텐츠": "ABCD OO광고.MP4"
      },{
        index: 12,
        "신청일시": "2024/11/17",
        "소속/사업자명": "세진테크",
        "이름": "홍길동",
        "그룹": "차도측",
        "분류": "상업광고",
        "신청기간": "1개월",
        "콘텐츠유형": "동영상",
        "금액": "2,000,000",
        "진행상태": "심의중",
        "첨부콘텐츠": "ABCD OO광고.MP4"
      },
      {
        index: 13,
        "신청일시": "2024/11/17",
        "소속/사업자명": "세진테크",
        "이름": "홍길동",
        "그룹": "보도측(미사용 서편)",
        "분류": "상업광고",
        "신청기간": "12개월",
        "콘텐츠유형": "동영상",
        "금액": "12,000,000",
        "진행상태": "광고중",
        "첨부콘텐츠": "ABCD OO광고.MP4"
      },
      {
        index: 14,
        "신청일시": "2024/11/17",
        "소속/사업자명": "세진테크",
        "이름": "홍길동",
        "그룹": "보도측(미사용 서편)",
        "분류": "상업광고",
        "신청기간": "1개월",
        "콘텐츠유형": "동영상",
        "금액": "2,000,000",
        "진행상태": "심의중",
        "첨부콘텐츠": "ABCD OO광고.MP4"
      },
      {
        index: 15,
        "신청일시": "2024/11/17",
        "소속/사업자명": "세진테크",
        "이름": "홍길동",
        "그룹": "보도측(미사용 서편)",
        "분류": "상업광고",
        "신청기간": "1개월",
        "콘텐츠유형": "동영상",
        "금액": "2,000,000",
        "진행상태": "광고중단",
        "첨부콘텐츠": "ABCD OO광고.MP4"
      },
   
  ];
const bank ={
  "국민은행" :{name:"홍길동",number:"XXXXYY-ZZ-ZZZZZC"}
}
  const ADstateList:any ={
    "신청완료":{btnlist:
      {"취소":{title:"취소하신 광고는 목록에서 삭제됩니다. \n 정말 취소하시겠습니까?",subtitle:""},
    
      
     
   
    }
    ,title:"신청이 완료된 광고입니다. \n 광고 심의가 시작되면 문자나 이메일로 안내해 드리겠습니다."},
    "심의중":{btnlist:{"취소":{title:"취소하신 광고는 목록에서 삭제됩니다. \n 정말 취소하시겠습니까?",subtitle:""},
      
    }
    ,title:"현재 심의중인 광고 건 입니다. \n 광고 심의가 완료되면 문자나 이메일로 안내해 드리겠습니다."},
    "반려":{btnlist:{
      "삭제 (3일후 자동 삭제)":{title:"지금 취소하시면 해당건으로 진행한 내용이 완전히 삭제됩니다. \n 그래도 취소 하시겠습니까?",subtitle:""},
    }
    ,title:"심의 결과 회원님의 광고가 반려되었습니다. \n 반려 사유는 문자나 이메일로 안내해 드렸습니다."},
    "입금대기":{btnlist:{"취소":{title:"취소하신 광고는 목록에서 삭제됩니다. \n 정말 취소하시겠습니까?",subtitle:""},
      
      "입금계좌보기":{title:bank["국민은행"].name,subtitle:bank["국민은행"].number},
    
    }
    ,title:"회원님의 광고가 심의완료 되었습니다. \n 안내해 드린 계좌로 기간내 입금하지 않으면 자동으로 취소됩니다."},
    "광고중":{btnlist:
      {"취소":{title:"취소하신 광고는 목록에서 삭제됩니다. \n 정말 취소하시겠습니까?",subtitle:""},  
    "거래명세서":{title:"거래명세서",subtitle:"*계산서 금액에서 수수료는 제외됩니다."}
    }
    ,title:"{start}부터 {end}일 까지 광고를 송출합니다."},
    "광고예정":{btnlist:
      {"취소":{title:"취소하신 광고는 목록에서 삭제됩니다. \n 정말 취소하시겠습니까?",subtitle:""},
      
     
    "거래명세서":{title:"거래명세서",subtitle:"*계산서 금액에서 수수료는 제외됩니다."}
    }
    ,title:"{start}부터 {end}일 까지 광고를 송출합니다."}
  }

  const GroupList=[{group:"보도측(미사역동편)",one:["00역 게시대","ooo역게시대","ooo 회관","ooo초등학교"]},
{group:"보도측(미사역서편)",one:["00역 게시대","ooo역게시대","ooo 회관","ooo초등학교"]},
{group:"차도측",one:["00역 게시대","ooo역게시대","ooo 회관","ooo초등학교"]},
{group:"oo동 복지센터",one:["00역 게시대","ooo역게시대","ooo 회관","ooo초등학교"]},
{group:"하남시청",one:["00역 게시대","ooo역게시대","ooo 회관","ooo초등학교"]},
{group:"문화의거리",one:["00역 게시대","ooo역게시대","ooo 회관","ooo초등학교"]},

]
export {ADslotList,advertisementGuidelines,ManagementList,ADstateList,GroupList}