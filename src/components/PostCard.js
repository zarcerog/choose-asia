import { Link } from "react-router-dom";

export default function PostCard({postTitle, postSlug, postCoverPhoto, postAuthorImage, postAuthor, id}) {
    return(
            <Link to={`/blog/${postSlug}`} className="flex flex-col shadow-lg p-4 max-w-sm border-2 hover:bg-[#cb69281a] font-oswald rounded-lg">
                <img src={postCoverPhoto} alt={postTitle} className="object-cover w-80 h-44" />
                <h1 className="text-[#ff9900] font-oswald text-2xl font-normal my-1">{postTitle}</h1>
                <div className="flex flex-row gap-2 content-center">
                    <img src={postAuthorImage} className="object-cover h-9 w-9 rounded-full" />
                    <h6 className="font-lato font-normal text-base mt-1 mb-2">{postAuthor}</h6>
                </div>
            </Link>
    );
}