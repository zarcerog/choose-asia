import React from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery, gql } from "@apollo/client";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const QUERYcat = gql`
{
    posts {
        id,
        postTitle,
        slug,
        coverPhoto {
            url
        },
        autor {
            name,
            avatar {
                url
            }
        },
          content {
          html
        },
          pubDate
    }
}
`;

const QUERYesp = gql`
{
    posts(locales: [es, ca]) {
        id,
        postTitle,
        slug,
        coverPhoto {
            url
        },
        autor {
            name,
            avatar {
                url
            }
        },
content {
  html
},
pubDate
    }
}
`;

const Post = () => {
    const [postData, setPostData] = useState({ posts: [] });
    const { slug } = useParams();
  
    const post = postData.posts.find((data) => data.slug === slug);
  
    const { i18n } = useTranslation();
  
    const QUERY = i18n.language === "es" ? QUERYesp : QUERYcat;
  
    const { error, data, loading } = useQuery(QUERY);
  
    useEffect(() => {
      if (data) {
        setPostData(data);
      }
    }, [data]);
  
    if (loading) {
      return (
        <div className="flex justify-center items-center h-screen w-screen">
          <div className="relative inline-block h-8 w-8 rounded-full border-2 border-gray-600 border-t-2 transform animate-spin">
            <div className="absolute top-0 left-0 h-full w-full bg-gray-600 opacity-75"></div>
          </div>
        </div>
      );
    }
  
    if (error) {
      return <div>Something went wrong...</div>;
    }
  
    if (!post) {
      return <div className="flex w-screen h-screen justify-center items-center">Post not found</div>;
    }
  
    return (
      <div name="blog" className="w-full pt-14 flex flex-col gap-6">
        <img className='w-screen h-72 object-cover' src={post.coverPhoto.url} alt={post.postTitle}/>
        <div className='mx-14 md:mx-32 lg:mx-56 flex flex-col gap-6 pb-16'>
          <h1 className="text-[#ff9900] text-4xl">{post.postTitle}</h1>
          <div
            className="text-lg flex flex-col gap-6 justify-center"
            dangerouslySetInnerHTML={{ __html: post.content.html }}
          ></div>
          <div className='flex flex-col gap-2'>
            <p className="text-[#ff9900] text-lg">Autor</p>
            <div className="flex flex-row items-center gap-2">
              <img src={post.autor.avatar.url} alt={post.autor.name} className="w-8 h-8 rounded-full"/>
              <p className="text-[#ff9900] text-lg">{post.autor.name}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Post;