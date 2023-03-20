import { Layout } from '@/componets/Layout'
import { MyList } from '@/componets/MyList'
import Head from 'next/head';


export default function Home({blog}) {
  return (
    <Layout>
    <Head>
      <title>Nature Blog</title>
    </Head>
    <main>
      {/* <h1>welcome</h1> */}
      <MyList blog={blog} />
      {/* {console.log(blog)}
      {blog[0].name} */}
    </main>
      {/* <h1>welcome</h1> */}
    </Layout>
  )
}

export async function getStaticProps(){
  const res = await fetch('https://sample-sample-test2.s3.ap-northeast-2.amazonaws.com/data.json');
  const data = await res.json();
  return {
    props:{
      blog : data
    }
  }
}
