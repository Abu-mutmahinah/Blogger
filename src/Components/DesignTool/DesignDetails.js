import ReactMarkdown from "react-markdown";
import { useHistory } from "react-router-dom";
import designPost from "../../designPost.json";

const DesignDetails = (props) => {
  const validId = parseInt(props.match.params.id);
  const fetchedPost = {};
  designPost.forEach((post, i) => {
    if (validId === post.id) {
      fetchedPost.title = post.title;
      fetchedPost.date = post.date ? post.date : "No date given";
      fetchedPost.heading = post.heading ? post.heading : "No heading given";
      fetchedPost.content = post.content ? post.content : "No content given";
      fetchedPost.image = post.image ? post.image : "No image given";
    }
  });
  const back = useHistory();
  return (
    <div className="flex flex-col justify-center text-center items-center px-2">
      <h1 className="font-[900] text-[2.5vw] w-[40vw] my-5 uppercase">
        {fetchedPost.heading}
      </h1>
      <img src={fetchedPost.image} alt="" className="w-[30vw] mb-5" />
      <p className="my-4 text-[1.5vw] w-[50vw]">
        <ReactMarkdown children={fetchedPost.content} />
      </p>

      <small className="font-[500] ">Published on {fetchedPost.date}</small>
      <button
        onClick={() => back.go(-1)}
        className="py-1 px-2 border border-gray-500 rounded my-5"
      >
        back
      </button>
    </div>
  );
};

export default DesignDetails;
