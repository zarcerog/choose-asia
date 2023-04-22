import React from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery, gql } from "@apollo/client";
import PostCard from '../components/PostCard.js';

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
            }
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
            }
	    }
    }    
`;

const Blog = () => {

    const { i18n } = useTranslation();

    const QUERY = i18n.language === 'es' ? QUERYesp : QUERYcat;

    React.useEffect(() => {
        i18n.on('languageChanged', () => {
            window.location.reload();
        });
    }, [i18n]);

    const {error, data, loading} = useQuery(QUERY);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen w-screen">
                <div className="relative inline-block h-8 w-8 rounded-full border-2 border-gray-600 border-t-2 transform animate-spin">
                    <div className="absolute top-0 left-0 h-full w-full bg-gray-600 opacity-75"></div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div>Something went wrong...</div>
        )
    }

    return (
      <div name='blog' className='w-full h-screen pt-16 px-5 flex flex-col gap-6'>
        <h1 className='text-[#ff9900] text-4xl'>Blog</h1>
        <div className='grid gap-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center'>
            {data.posts.map((post) => {
                return (
                    <PostCard   
                        key={post.id} 
                        postTitle={post.postTitle} 
                        postSlug={post.slug} 
                        postCoverPhoto={post.coverPhoto.url} 
                        postAuthorImage={post.autor.avatar.url}
                        postAuthor={post.autor.name}
                    />
                )
            })}
        </div>
      </div>
    );
  };
  
  export default Blog;
  