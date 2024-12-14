"use client"

import Image from "next/image"
import { useRef, useState } from "react"


const Grid =({className,children}:any)=>{

    return(<>
    <div className={`grid grid-flow-row-dense grid-cols-3  w-full ${className}`}> 
    {children}
    </div>
    </>)
}
const GridContainer =({className,children}:any)=>{

    return(<>
    <div className={`grid grid-cols-5 w-full text-wrap ${className}`}> 
    {children}
    </div>
    </>)
}
const GridInputText = ({onChange,value,placeholder,className}:any)=>{
return(<>
<input type="text" placeholder={placeholder} onChange={(e)=>onChange(e.target.value)} value={value} className={`max-w-[14rem] min-w-[10rem]  max-h-[1.5rem] min-h-[1.5rem]  px-[1rem] py-[0.5rem] border border-[#999999] border-solid rounded-sm ${className}`}/>
</>)
}
const GridInputSelect = ({onChange,value,defaultValue,className,children}:any)=>{
    return(<>
    <select defaultValue="default" onChange={(e)=>{onChange(e.target.value)}}  className={`max-w-[14rem] min-w-[10rem] font-thin text-[0.7rem] lg:text-[1rem] max-h-[1.5rem] min-h-[2.5rem]  px-[1rem] py-[0.5rem] border border-[#999999] border-solid rounded-sm ${className}`}>
    <option value="default" disabled>
        Select an option
      </option>
   {children}
    </select>
    </>)
    }
    const GridInputFile = ({onChange,value,defaultValue,className,children,saveFile}:any)=>{
        const [images, setImages] = useState<File[]>([]);

        const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const files = e.target.files;
          if (files) {
            setImages((prev) => [...prev, ...Array.from(files)]);
            saveFile((prev: any) => [...prev, ...Array.from(files)]);
          }
        };
      
        const handleRemoveImage = (index: number) => {
          setImages((prev) => prev.filter((_, i) => i !== index));
          saveFile((prev: any[]) => prev.filter((_, i) => i !== index));
        };
      
        return (<>
           <div className="w-full h-full">
            <div className=" border border-gray-300 rounded-md w-full max-w-2xl">
      {/* 파일 입력 */}
      <div className="flex flex-nowrap w-full items-center space-x-2 mb-4">
        <input
          type="text"
          value={String(images[0]?.name?images[0]?.name:"파일을 업로드 해주세요")}
          placeholder="입력하세요."
          className="flex-1 border border-gray-300 text-gray-500 rounded-md p-2 text-sm focus:outline-blue-500"
        />
        <label
              htmlFor="fileInput"        
            
        className="bg-[#485C6D] text-white px-4 py-2 max-w-[8rem] text-sm rounded-md hover:bg-blue-600">
          찾아보기
        </label>
      </div>

      {/* 가이드 정보 */}
      <div className="grid gird-cols-1 lg:grid-cols-2 gap-4 bg-[#F0F0F0] px-4 pb-4 rounded-md text-sm text-gray-700">
        {/* 해상도 사이즈 */}
        <div className="rounded-md">
          <h3 className="text-[0.8rem] text-blue-500 font-bold mb-1">[ 해상도 사이즈 ]</h3>
          <span className="space-y-1 text-[0.7rem]">
            <div>• 보도측 디스플레이: 800 x 1280px</div>
            <div>• 차도측 디스플레이: 800 x 2560px</div>
            <div>
              * 규격 사이즈와 상이 할 경우 콘텐츠가 왜곡되어 보입니다.
            </div>
          </span>
        </div>

        {/* 콘텐츠 파일 가이드 */}
        <div className=" rounded-md">
          <h3 className="text-[0.8rem] text-blue-500 font-bold mb-1 ">[ 콘텐츠 파일 가이드 ]</h3>
          <span className="space-y-1 text-[0.7rem]">
            <div>• 이미지: jpeg (Good Quality), 최대 용량 6MB</div>
            <div>• 동영상: mp4 (H.264, 4K 30fps), 최대 용량 300MB</div>
            <div>* 동영상은 15초 단위로 반복됩니다.</div>
            <div>* 사운드 출력은 지원되지 않습니다.</div>
          </span>
        </div>
      </div>
    </div>
          <div className="p-4">
            {/* 파일 입력 버튼 */}

            <input
              id="fileInput"
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e)=>images.length>0?alert("파일은 최대 1개 업로드 가능합니다."):handleFileChange(e)}
            />
      
            {/* 업로드된 이미지 미리보기 */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center border border-gray-300 rounded-lg p-2"
                >
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Uploaded ${index}`}
                    className="w-full h-[150px] object-cover rounded-md"
                  />
                  <button
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                    onClick={() => handleRemoveImage(index)}
                  >
                    ×
                  </button>
                  <p className="mt-2 text-sm text-gray-700">{image.name}</p>
                </div>
              ))}
            </div>
          </div>
          {children}
          </div>
        </>);
      };
const GridImageCheckbox =({onChange,value,className,boxlist,children,classImage}:any)=>{
    const checkOnlyOne = (checkThis: HTMLElement) => {

        const checkboxes:any = document.getElementsByName('test')
        for (let i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i] !== checkThis) {
            checkboxes[i].checked = false
          }
        }
      }
 
    return(<>
    <div className="w-full h-full flex flex-row items-center justify-start space-x-2 overflow-x-auto">
        {boxlist.map((item:any)=>(<>
        <div>
        <div className={` rounded-md flex justify-center items-center relative max-w-[20rem] px-[0.7rem] py-[0.2rem] bg-[#172731] text-white ${className}`}>

            
        {typeof item.image ==="function"?(<><item.image className={`object-contain ${classImage}`}/></>):<Image className={`object-contain ${classImage}`} src={item.image} alt={""}/>}

        <div className=" absolute flex justify-center items-center text-[0.7rem] text-white font-bold">{item.subtitle}</div>
        
        </div>
        <div className="flex flex-row w-full items-center space-x-2 pt-[0.5rem]"><input name="test" value={item.title} onChange={(e) => {
            onChange(e.target.value)
            checkOnlyOne(e.target)}} type="checkbox"></input><p className="m-0">{item.title}</p> </div>
        
        </div>
        </>))}
        </div>   
    </>)
}
const GridCheckboxList =({onChange,value,className,boxlist,children,classImage}:any)=>{
    const checkOnlyOne = (checkThis: HTMLElement) => {

        const checkboxes:any = document.getElementsByName('test')
        for (let i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i] !== checkThis) {
            checkboxes[i].checked = false
          }
        }
      }
 
    return(<>
    <div className=" w-full h-full flex flex-row items-center justify-start space-x-2 overflow-x-auto">
        
        {boxlist.map((item:any)=>(<>
        <div>
       
        <div className="flex flex-row w-full items-center space-x-2 pt-[0.5rem]"><input name="test" value={item.title} onChange={(e) => {
            onChange(e.target.value)
            checkOnlyOne(e.target)}} type="checkbox"></input>
            <p className="m-0">{item.title}</p> 
            </div>
        
        </div>
        </>))}
        </div>   
    </>)
}

    const GridSideScroll = ({children}:any)=>{
        return(<>
        <div className="w-full flex flex-row overflow-x-auto scroll-m-3">{children}</div>
        </>)
        }   
const GridSlider = ()=>{

    const sliderRef = useRef<any>(null);
    const isDragging = useRef<any>(false); // 드래그 상태
    const startX = useRef<any>(0); // 드래그 시작 위치
    const scrollLeft = useRef<any>(0); // 드래그 시작 시 스크롤 위치
    const [dragging, setDragging] = useState<any>(false);
  
    const handleMouseDown = (e: { pageX: number }) => {
      isDragging.current = true;
      setDragging(true);
      startX.current = e.pageX - sliderRef.current.offsetLeft;
      scrollLeft.current = sliderRef.current.scrollLeft;
    };
  
    const handleMouseMove = (e: { pageX: number }) => {
      if (!isDragging.current) return;
  
      const x = e.pageX - sliderRef.current.offsetLeft;
      const walk = (x - startX.current) * 1.5; // 드래그 거리
      sliderRef.current.scrollLeft = scrollLeft.current - walk;
    };
  
    const handleMouseUp = () => {
      isDragging.current = false;
      setDragging(false);
    };
  
    const handleTouchStart = (e: any) => {
      isDragging.current = true;
      setDragging(true);
      startX.current = e.touches[0].pageX - sliderRef.current.offsetLeft;
      scrollLeft.current = sliderRef.current.scrollLeft;
    };
  
    const handleTouchMove = (e: any) => {
      if (!isDragging.current) return;
  
      const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      sliderRef.current.scrollLeft = scrollLeft.current - walk;
    };
  
    const handleTouchEnd = () => {
      isDragging.current = false;
      setDragging(false);
    };
  
    return (
      <div className="relative">
        {/* 드래그 가능한 슬라이더 */}
        <div
          ref={sliderRef}
          className={`overflow-x-scroll flex scroll-snap-x mandatory [&::-webkit-scrollbar]:hidden ${
            dragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="min-w-[250px] h-[150px] bg-red-500 flex items-center justify-center scroll-snap-start">
            Slide 1
          </div>
          <div className="min-w-[250px] h-[150px] bg-blue-500 flex items-center justify-center scroll-snap-start">
            Slide 2
          </div>
          <div className="min-w-[250px] h-[150px] bg-green-500 flex items-center justify-center scroll-snap-start">
            Slide 3
          </div>
          <div className="min-w-[250px] h-[150px] bg-yellow-500 flex items-center justify-center scroll-snap-start">
            Slide 4
          </div>
        </div>
      </div>
    );
  };
  
const GridTitle =({title,className,subtitle}:any)=>{

    return(<>

<div className={`w-full flex flex-col font-semibold items-center justify-start ${className} mt-[3%]`}>
    <h1 className={`w-full text-[1.3rem] lg:text-[1.8rem] flex flex-row space-x-2 items-center ${className}`}><p className="m-0">{title}</p>  {subtitle&&<p className={`m-0 border-2 text-[0.7rem] lg:text-[1rem] text-center  border-solid rounded-xl py-[0.25rem] px-[1rem] text-[#1292F5] border-[#1292F5]`} style={{color:subtitle==="반려"?"gray":"#1292F5",borderColor:subtitle==="반려"?"gray":"#1292F5"}}>{subtitle}</p>}</h1>
 <div className={`w-full h-[2px] bg-[#384958]  ${className}`}/>
 
    </div>    

    </>)
}


const GridItem =({title,className,children}:any)=>{

    return(<>

<div className={`text-start text-[0.7rem] mt-[0.5rem] text-wrap flex-wrap lg:text-[1rem] justify-start font-[550] p-[0.5rem] min-h-[2rem] border-b-[1px] border-[#D8D8D8] border-solid ${className}`}>

• {title}

    </div>
    <div className={` w-[calc(100%_-1rem)] items-center text-wrap flex-wrap font-thin text-[0.7rem] lg:text-[1rem]  justify-start min-h-[2rem] p-[0.5rem] col-span-4 border-b-[1px] border-[#D8D8D8] border-solid ${className}`}>
<div className="w-full h-full flex flex-col justify-center">
{children}
</div>
    </div>        


    </>)

}
const GridItemCN =({title,className,children,className_title,className_item}:any)=>{

    return(<>

<div className={`text-start text-wrap flex-wrap  justify-start font-[550] p-[0.5rem] min-h-[1rem] border-b-[1px] border-[#D8D8D8] border-solid ${className_title?className_title:"text-[0.7rem] lg:text-[1rem]"}`}>

{title}

    </div>
    <div className={` w-[calc(100%_-1rem)] items-center text-wrap flex-wrap font-thin  justify-start min-h-[1rem] p-[0.5rem] col-span-4 border-b-[1px] border-[#D8D8D8] border-solid ${className_item?className_item:"text-[0.7rem] lg:text-[1rem]"}`}>
<div className="w-full h-full flex flex-col justify-center">
{children}
</div>
    </div>        


    </>)

}
export {Grid,GridTitle,GridItem,GridContainer,GridInputText,GridInputSelect,GridSlider,GridSideScroll,GridImageCheckbox,GridInputFile,GridCheckboxList,GridItemCN}

