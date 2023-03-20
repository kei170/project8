import { Layout } from "@/componets/Layout";
import Link from "next/link";
import Image from "next/image";
import { SiNaver, SiKakaotalk } from "react-icons/si";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";




const blogMember = ({blogMember}) =>{
    // console.log(blogMember);
    return (
        <Layout>
        <main>
        <div className="text">
        <h1>자연</h1>
        <div className="box-Main">
        <Link href="/"><AiFillHome />Home</Link>
        </div>
        </div>
        <div className="title">
        <h2>{blogMember.title}</h2>
        <p>{blogMember.name}</p>
        </div>
        
        <div className="box-Gallery">
        <figure>
        <Image src={`/images/${blogMember.bigImg}`} alt={blogMember.title} width={600} height={300}/>
        <figcaption></figcaption>
        </figure>
        </div>
<div className="box-Info">
    <h3>나의 취향</h3>
<div className="box-List">     
<ul>
    <li>
        <dfn>좋아하는 음식</dfn>
        <span>{blogMember.favorites["food"]}</span>
    </li>
    <li>
        <dfn>좋아하는 음악</dfn>
        <span>{blogMember.favorites["music_genre"]}</span>
    </li>
    <li>
        <dfn>좋아하는 책</dfn>
        <span>{blogMember.favorites["book"]}</span>
    </li>
    <li>
        <dfn>좋아하는 신발</dfn>
        <span>{blogMember.favorites["footwear"]}</span>
    </li>
</ul>
<p>
    {blogMember.text}
</p>
<div className="box-Home">
<Link href="/"><AiFillHome />Home</Link>
</div>
</div>
</div>

        </main>
        <div className="box-Serves">
        <footer>
            <div>
                <ul>
                <li><Link href="https://blog.naver.com/korea_gov/222529812268"><SiNaver /></Link></li>
                <li><Link href="https://www.instagram.com/jyone_insta/"><BsInstagram /></Link></li>
                <li><Link href="https://www.facebook.com/mevpr/?locale=ko_KR"><FaFacebookSquare /></Link></li>
                <li><Link href="https://www.youtube.com/channel/UCcyXjAdiepuKgmJO2C2fEmA"><BsYoutube /></Link></li>
                <li><Link href="https://pf.kakao.com/_Yxddxiq"><SiKakaotalk /></Link></li>
                </ul>
            </div>
            <div className="box-Copyright">
                <small>&copy;MY BLOG.All rights reserved.</small>
            </div>
        </footer>
        </div>
        </Layout>

    )
}

export const getServerSideProps = async(context) => {
    const res = await fetch('https://sample-sample-test2.s3.ap-northeast-2.amazonaws.com/data.json');
    const data = await res.json();
    const blogMember = data.filter(item => item.id == context.params.id);
    return {
        props : {
            blogMember : blogMember[0]
        }
    }
}

export default blogMember;