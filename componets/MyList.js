import Link from "next/link";
import { SiNaver, SiKakaotalk } from "react-icons/si";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";


import Image from "next/image";


export const MyList = ({blog}) =>{
    return (
        <>
        <div className="box-Title">
        <h1>
            <Image src="/images/logo.png" alt="green blog" width={53} height={46} />
            Green Blog
        </h1>
        <div className="box-Sns">
        <ul>
            <li><Link href="https://blog.naver.com/korea_gov/222529812268"><SiNaver /></Link></li>
            <li><Link href="https://www.instagram.com/jyone_insta/"><BsInstagram /></Link></li>
            <li><Link href="https://www.facebook.com/mevpr/?locale=ko_KR"><FaFacebookSquare /></Link></li>
            <li><Link href="https://www.youtube.com/channel/UCcyXjAdiepuKgmJO2C2fEmA"><BsYoutube /></Link></li>
            <li><Link href="https://pf.kakao.com/_Yxddxiq"><SiKakaotalk /></Link></li>
        </ul>
        </div>
        </div>
        <div className="box-Pic">
            <section>
            <h3>여행 블로그</h3>
            <div>
                <figure>
                    <img src="images/source_01.png" alt="풍경" width={372} height={247} />
                    <figcaption></figcaption>
                </figure>
            <p>여행 전문가가 추천하는 세계의 놀라운 자연경관 이 공개되었는데 이 자연 경관은 여행을 즐기는 분들이라면 평생 꼭 한번이라도 가봐야하는 자연경관이다.<br/>
            우리나라의 자연 경관도 아름답지만 세계적인 자연 경관은 그야말로 아름다움은 물론 웅장함과 신비를 두루 갖춘 최고의 경관이다.<br/>
            여행 전문가의 조언에 따르면 크고 엄청난 위용과 신비에 잠을 이루지 못한다고 표현한다.<br/>
            여행의 계절 지면으로의 소개가 다소 아쉅다면 직접 확인해보시기 바랍니다.</p>
            </div>
            
            </section>
            
{/* 
            <Image src="/images/pic.png"  width={600} height={300}/> */}
        </div>
        <div className="box-Table">
         <h4>내가 뽑은 자연 경관</h4>
        <div>
        <table>
            <colgroup>
            <col className="no01" />
            <col className="no02" />
            <col className="no03" />
            </colgroup>
            <thead>
                <tr>
                    <th scope="col">번호</th>  
                    <td colSpan="3">내용제목</td>
                    <td>작성자</td>
                    
                </tr>
            </thead>
            <tbody>
                    {
                        blog.map(member =>(
                            <tr key={member.id}>
                                <th scope="col">{member.id}</th>
                            <td colSpan="3">
                                <Link href="/member/[id]"
                                    as={`/member/${member.id}`}>
                                    {member.title}
                                </Link>
                            </td>
                            <td>{member.name}</td>
                            
                        </tr>
                    ))
                    }
            </tbody>
        </table>
        
        <div className="box-Icon">
            <Link href="https://www.foresttrip.go.kr/main.do"><Image src="/images/green.png" width={100} height={100}/></Link>
        </div>
        </div>
        </div>
        <footer className="box-Copy">
            <small>&copy;MY BLOG.All rights reserved.</small>
        </footer>
        </>
    )
}