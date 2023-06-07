import { useRef, useState } from "react";
import { PopupCont, PopupItem } from "./style/Popup.styled";
import StyledPostModal, { PostModalForm, PostModalHeader } from "./style/Popup.styled";
import { useNavigate } from "react-router-dom";
// import useSendPost from "./hooks/useSendPost";

const PostModal = ({setModal, token}) => {
    const [value, setValue] = useState({post:""});
    const navigate = useNavigate();
    const backgroundRef = useRef(null);
    const [a, setA] = useState(true);
    // const { mutate: sendPost } = useSendPost();

    const delay = ms => new Promise(
      resolve => setTimeout(resolve, ms)
    );

    const logoutFunc = () => {
      localStorage.clear();
      window.location = "/login";
      // navigate("/login");
    }

    async function openProfile () {
        navigate("/profile");
        setA(false);
        await delay(1000);
        setModal(false);
    }

  return (
    <StyledPostModal 
        ref={backgroundRef} 
        onClick={
            async(e) => {
                if (e.target === backgroundRef.current){
                    setA(false);
                    await delay(1000);
                    setModal(false);
                }
                
            }
        }
    >
      
      <PopupCont Open={a} Act={true}>
            <PopupItem onClick={openProfile}><span>{token?.userNow?.user_name}</span></PopupItem>
            <PopupItem><span>Dil: Türkçe</span></PopupItem>
            <PopupItem><span>Ülke: Türkiye</span></PopupItem>
            <PopupItem><span>Tema: Varsayılan</span></PopupItem>
            <PopupItem onClick={logoutFunc}><span>Çıkış</span></PopupItem>
        </PopupCont>
        {/* <PostModalForm
            onSubmit={ e => 
                {
                    e.preventDefault();
                    const postText = value.post;
                    if(postText.length > 0) {
                        // post to api
                        // sendPost({ post: postText });
                    }
                    setValue({post:""});
                    setModal(false);

                }
            }
        >
            <PostModalHeader><h1>New Post</h1></PostModalHeader>
            <textarea 
                name="post" 
                value={value.post} 
                onChange={(e) => 
                    setValue({[e.target.name]: e.target.value})
                }
                maxLength="255"
            />

            <sub>Kalan karakter: {255 - value.post.length}</sub>

            <button 
                type="submit" 
            >
                <p>Submit New Post</p>
            </button>
        </PostModalForm> */}
    </StyledPostModal>
  )
}

export default PostModal;